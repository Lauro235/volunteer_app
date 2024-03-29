import {
  useState,
  useCallback,
  useLayoutEffect,
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

const getDimension = (node: HTMLElement) => {
  const el = node.getBoundingClientRect();
  return {
    x: el.x,
    y: el.y,
    width: el.width,
    height: el.height,
    top: el.top,
    right: el.right,
    left: el.left,
    bottom: el.bottom
  }
}

/**
 * 
 * @author Swizec Teller
 * @linkcode https://github.com/Swizec/useDimensions/blob/master/src/index.ts
 * @param track boolean to indicate if to track the resize
 * @returns an array with the ref value, the dimensions and the node reference created.
 * @example // In your application... 
 * const [calRef, dimensions] = useElementDimensions();
 * // Cast to keep TypeScript happy.
 * <div ref={(calRef as LegacyRef<HTMLDivElement>)}>
 * </div>
 */

export const useElementDimensions = <T extends HTMLElement>(track = true): [
  (node: T) => void,
  IDimensions | undefined,
  T | null
] => {
  const [dimensions, setDimensions] = useState<IDimensions>();
  const [node, setNode] = useState<T | null>(null)
  
  // const ref = useRef<HTMLDivElement>(null);
  const ref = useCallback((node: T) => {
    setNode(node);
  }, []);

  useLayoutEffect(() => {
    if (node) {
      const measure = () => {
        window.requestAnimationFrame(() => {
          setDimensions(getDimension(node))
        })
        if (track) {
          window.addEventListener("resize", measure);
          return () => window.removeEventListener("resize", measure);
        }
      };
      measure();
    }
  }, [node, track]);
  return [ref, dimensions, node];
};
