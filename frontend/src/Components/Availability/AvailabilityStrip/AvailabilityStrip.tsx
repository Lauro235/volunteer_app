import { touchReducer, ReducerActions } from "./touchReducer";
import { useReducer } from "react";

const AvailabilityStrip = () => {
  const heading = "availability";
  const [touchState, setTouchState] = useReducer(touchReducer, {animationStart: false, interaction: false, e: undefined})
  /*
    state
    touched
    dragging
    released
  */
  console.log(touchState);
  

  return (
    <div className="relative">
      <div style={{
        opacity: 0,
      }} className="hidden w-screen h-screen bg-gray-700"></div>
      <div 
        onTouchStart={(e: React.TouchEvent) => setTouchState({type: ReducerActions.Touch, payload: e})}
        onTouchMove={(e: React.TouchEvent) => setTouchState({type: ReducerActions.Drag, payload: e})}
        // onTouchCancel={() => setTouchState({type: ReducerActions.Cancel})}
        onTouchEnd={() => setTouchState({type: ReducerActions.Release})}
        className="absolute right-0 z-10 grid px-4 py-4 translate-y-1/4 top-1/4 text-clr-primary rounded-l-2xl bg-clr-gradTwo place-content-center">
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
