import { touchReducer, ReducerActions } from "./touchReducer";
import { useCallback, useEffect, useReducer } from "react";

interface IStrip {
  heading: string;
  // orientation: "left" | "right";
  position: number;
  currentPosition: number;
  changeCurrentPositionHandler: (num: number) => void;
}

const Strip = ({
  heading,
  position,
  currentPosition,
  changeCurrentPositionHandler,
}: IStrip) => {
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

    changeCurrentPositionHandler(1); should take currentPosition and add or subtract one depending on whether the position is higher or lower than it.
  */

  const isDragging = useCallback(() => {
    if (touchState.interaction === "dragging") console.log("window width");

    // e should always be defined unless interaction is false.
    if (
      touchState.e !== undefined &&
      ((position === currentPosition + 1 &&
        touchState.e.pageX < window.innerWidth / 2) ||
        (position === currentPosition - 1 &&
          touchState.e.pageX > window.innerWidth / 2))
    ) {
      changeCurrentPositionHandler(position);
    }
  }, [touchState, changeCurrentPositionHandler, currentPosition, position]);

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
          opacity: currentPosition !== position ? 1 : 0,
          right: position + 1 === currentPosition ? "auto" : 0,
        }}
        className="absolute z-10 grid px-4 py-4 transition-opacity translate-y-1/4 top-1/4 text-clr-primary rounded-l-2xl bg-clr-gradTwo place-content-center"
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

export default Strip;
