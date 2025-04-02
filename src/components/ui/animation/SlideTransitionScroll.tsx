import { ReactNode, useRef, useState } from "react";
import SlideTransition from "./SlideTransition";
import { useScrollDetection } from "../../../hooks";
import { SlideTransitionProps } from ".";

type SlideTransitionScrollProps = SlideTransitionProps;

export default function SlideTransitionScroll(props: SlideTransitionScrollProps): ReactNode {
  const ref = useRef<HTMLElement>(null);
  const [wasVisible, setWasVisible] = useState(false);

  useScrollDetection(ref, function(rect) {
    if (wasVisible) return true;
    if (rect.top >= 0 &&
      (rect.top <= window.innerHeight || rect.bottom <= window.innerHeight)) {
      setWasVisible(true);
      return true;
    }
    return false;
  });

  return (
    <SlideTransition visible={wasVisible} type={props.type} className={props.className}>
      <div ref={ref} className="w-full h-full">
        {props.children}
      </div>
    </SlideTransition>
  );
}