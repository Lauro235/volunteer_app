import { touchReducer, ReducerActions } from "./touchReducer";
import { useCallback, useEffect, useReducer } from "react";
import { cn } from "../../../utils/conditions";
interface IStrip {
  heading: string;
  className: string;
  position: number;
  currentPosition: number;
  changeCurrentPositionHandler: (num: number) => void;
}

const Strip = ({
  heading,
  className,
  position,
  currentPosition,
  changeCurrentPositionHandler,
}: IStrip) => {
  const rightStrip = position === currentPosition + 1;
  const leftStrip = position === currentPosition - 1;

  const [touchState, setTouchState] = useReducer(touchReducer, {
    animationStart: false,
    interaction: false,
    e: undefined,
  });

  console.log(touchState.e);
  
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
      ((rightStrip && touchState.e.pageX < window.innerWidth / 2) ||
        (leftStrip && touchState.e.pageX > window.innerWidth / 2))
    ) {
      changeCurrentPositionHandler(position);
    }
  }, [
    touchState,
    changeCurrentPositionHandler,
    rightStrip,
    leftStrip,
    position,
  ]);

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
        className={cn(
          "absolute z-10 hover:scale-125  grid px-3 py-3 text-sm xsm:px-4 xsm:py-4 xsm:text-base transition-all top-12 place-content-center",
          className
        )}
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
