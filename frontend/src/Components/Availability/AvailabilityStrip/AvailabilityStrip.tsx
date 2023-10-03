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

  /*
    If I was to abstract this into a custom hook. What would I need?
    touchState, changeCurrentPositionHandler currentPosition

    change from (isVisible === false) to (currentPosition !== position)
    
    I could pass in currentPosition and position to the StripComponent.
    
    0, is the furthest left and 5 is the furthest right. At the moment there are only
    two screens to worry about i.e. 0 - 1
  */
 
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
