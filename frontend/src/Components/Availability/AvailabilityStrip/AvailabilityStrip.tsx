import { touchReducer, ReducerActions } from "./touchReducer";
import { useCallback, useEffect, useReducer, useState } from "react";

interface IAvailabilityStrip {
  changeCurrentPositionHandler: (num: 0 | 1) => void;
}

const AvailabilityStrip = ({changeCurrentPositionHandler}: IAvailabilityStrip) => {
  const heading = "availability";
  const [isVisible, setIsVisible] = useState(false);
  const [touchState, setTouchState] = useReducer(touchReducer, {
    animationStart: false,
    interaction: false,
    e: undefined,
  });

  const isDragging = useCallback(() => {
    if (touchState.interaction === "dragging")
    
    // e should always be defined unless interaction is false.
      if (
        touchState.e !== undefined &&
        touchState.e.pageX < window.innerWidth / 2 &&
        isVisible === false
      ) {
        setIsVisible(true);
        changeCurrentPositionHandler(1);
      }
  }, [touchState, changeCurrentPositionHandler, isVisible]);

  useEffect(() => {
    isDragging();
  }, [isDragging]);

  return (
    <div className="relative">
      <div
        onTouchStart={(e: React.TouchEvent) =>
          setTouchState({ type: ReducerActions.Touch, payload: e })
        }
        onTouchMove={(e: React.TouchEvent) =>
          setTouchState({ type: ReducerActions.Drag, payload: e })
        }
        // onTouchCancel={() => setTouchState({type: ReducerActions.Cancel})}
        onTouchEnd={() => setTouchState({ type: ReducerActions.Release })}
        style={{
          opacity: !isVisible ? 1 : 0
        }}
        className="absolute right-0 z-10 grid px-4 py-4 transition-opacity translate-y-1/4 top-1/4 text-clr-primary rounded-l-2xl bg-clr-gradTwo place-content-center"
      >
        {heading
          .toUpperCase()
          .split("")
          .map((letter, i) => {
            return <p key={i}>{letter}</p>;
          })}
      </div>
    </div>
  );
};

export default AvailabilityStrip;
