import { PropsWithChildren, ReactNode } from "react";
import { cn } from "../../../utils";
import { SlideTransitionProps, SlideTransitionType } from ".";


export default function SlideTransition(props: SlideTransitionProps): ReactNode {
  return (
    <div className={
      cn("opacity-0 pointer-events-none duration-200",
        props.type == SlideTransitionType.Right ? 'translate-x-20 ' : '-translate-x-20',
        props.visible ? 'translate-x-0 opacity-100 pointer-events-auto' : '',
        props.className,
      )}>
      {props.children}
    </div>
  );
}