import {
  useRef,
  useState,
  useLayoutEffect,
  MutableRefObject,
  RefObject,
} from "react";

export interface IDimensions {
  x: number;
  y: number;
  width: number;
  height: number;
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export const useElementDimensions = (): [
  RefObject<HTMLDivElement>,
  IDimensions | undefined
] => {
  const ref = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<IDimensions>();

  useLayoutEffect(() => {
    setDimensions(
      (ref as MutableRefObject<HTMLElement>).current
        .getBoundingClientRect()
        .toJSON()
    );
  }, [ref.current]);
  return [ref, dimensions];
};
