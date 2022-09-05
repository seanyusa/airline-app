import { Animated, StyleSheet, View } from "react-native";
import { ReactNode, useRef, useState } from "react";
import {
  PanGestureHandler,
  NativeViewGestureHandler,
  State,
  TapGestureHandler,
  PanGestureHandlerEventPayload,
  HandlerStateChangeEventPayload,
} from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17171e",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    shadowColor: "#000000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
  },
});

type Props = {
  snapPoints: number[];
  children?: ReactNode;
};

export default function BottomSheet(props: Props) {
  const masterDrawerRef = useRef();
  const drawerRef = useRef();
  const scrollRef = useRef();

  const startSnapPoint = props.snapPoints[0];
  const endSnapPoint = props.snapPoints[props.snapPoints.length - 1];
  const [lastSnapPoint, setLastSnapPoint] = useState(endSnapPoint);
  const lastScrollY = useRef(new Animated.Value(0)).current;
  const lastScrollYValue = useRef(0);
  const dragY = useRef(new Animated.Value(0)).current;
  const translateYOffset = useRef(new Animated.Value(endSnapPoint)).current;

  lastScrollY.addListener(({ value }) => {
    lastScrollYValue.current = value;
  });

  const reverseLastScrollY = useRef(
    Animated.multiply(new Animated.Value(-1), lastScrollY)
  ).current;

  const translateY = useRef(
    Animated.add(
      translateYOffset,
      Animated.add(dragY, reverseLastScrollY)
    ).interpolate({
      inputRange: [startSnapPoint, endSnapPoint],
      outputRange: [startSnapPoint, endSnapPoint],
      extrapolate: "clamp",
    })
  ).current;

  const snapToPoint = (destSnapPoint: number, velocity?: number) => {
    setLastSnapPoint(destSnapPoint);

    Animated.spring(translateYOffset, {
      velocity: velocity,
      tension: 68,
      friction: 12,
      toValue: destSnapPoint,
      useNativeDriver: true,
    }).start();
  };

  const onHandlerStateChange = ({
    nativeEvent,
  }: {
    nativeEvent: HandlerStateChangeEventPayload & PanGestureHandlerEventPayload;
  }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      let { velocityY, translationY } = nativeEvent;
      translationY -= lastScrollYValue.current;
      const dragToss = 0.05;
      const endOffsetY = lastSnapPoint + translationY + dragToss * velocityY;

      let destSnapPoint = props.snapPoints[0];
      props.snapPoints.forEach((snapPoint) => {
        const distFromSnap = Math.abs(snapPoint - endOffsetY);
        if (distFromSnap < Math.abs(destSnapPoint - endOffsetY)) {
          destSnapPoint = snapPoint;
        }
      });

      translateYOffset.extractOffset();
      translateYOffset.setValue(translationY);
      translateYOffset.flattenOffset();
      dragY.setValue(0);
      snapToPoint(destSnapPoint, velocityY);
    }
  };

  return (
    <TapGestureHandler
      maxDurationMs={100000}
      ref={masterDrawerRef}
      maxDeltaY={lastSnapPoint - props.snapPoints[0]}
    >
      <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            { transform: [{ translateY: translateY }] },
          ]}
        >
          <PanGestureHandler
            ref={drawerRef}
            simultaneousHandlers={[scrollRef, masterDrawerRef]}
            shouldCancelWhenOutside={false}
            onGestureEvent={Animated.event(
              [{ nativeEvent: { translationY: dragY } }],
              { useNativeDriver: true }
            )}
            onHandlerStateChange={onHandlerStateChange}
          >
            <Animated.View style={styles.container}>
              <NativeViewGestureHandler
                ref={scrollRef}
                waitFor={masterDrawerRef}
                simultaneousHandlers={drawerRef}
              >
                <Animated.ScrollView
                  style={[{ marginBottom: props.snapPoints[0] }]}
                  bounces={false}
                  onScrollBeginDrag={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: lastScrollY } } }],
                    { useNativeDriver: true }
                  )}
                  scrollEventThrottle={16}
                >
                  {props.children}
                </Animated.ScrollView>
              </NativeViewGestureHandler>
            </Animated.View>
          </PanGestureHandler>
        </Animated.View>
      </View>
    </TapGestureHandler>
  );
}
