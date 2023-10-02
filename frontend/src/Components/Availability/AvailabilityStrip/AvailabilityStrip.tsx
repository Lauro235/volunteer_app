import { touchReducer, ReducerActions } from "./touchReducer";
import { useReducer } from "react";

const AvailabilityStrip = () => {
  const heading = "availability";
  const [touchState, setTouchState] = useReducer(touchReducer, {animationStart: false, interaction: false})
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
        onTouchStart={() => setTouchState({type: ReducerActions.Touch})}
        // onTouchCancel={() => setTouchState({type: ReducerActions.Cancel})}
        // onTouchEnd={() => setTouchState({type: ReducerActions.Release})}
        className="absolute right-0 z-10 grid px-4 py-8 text-clr-primary rounded-l-2xl bg-clr-gradTwo place-content-center">
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
