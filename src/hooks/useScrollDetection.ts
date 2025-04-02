import { RefObject, useEffect, useState } from "react";

type FunctionScrollDetectionHandler = (rect: DOMRect) => boolean;
type TargetsData = [
  RefObject<HTMLElement | null>,
  React.Dispatch<React.SetStateAction<boolean>>,
  FunctionScrollDetectionHandler
][];

let targets: TargetsData = [];

window.addEventListener("scroll", function() {
  targets.forEach(([ref, setIsVisible, func]) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect() as DOMRect;

      const result = func(rect);
      setIsVisible(result);
    }
  });
});

type ReturnValue = boolean;

export default function useScrollDetection(targetRef: RefObject<HTMLElement | null>, func: FunctionScrollDetectionHandler): ReturnValue {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    targets.push([targetRef, setIsVisible, func]);

    return () => {
      const index = targets.indexOf([targetRef, setIsVisible, func]);
      targets = targets.splice(index, -1);
    };
  }, [targetRef]);

  return isVisible;
}