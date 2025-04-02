import { ReactNode } from "react";
import { ReplayCardProps } from ".";
import { cn } from "../../utils";

export default function ReplayCard(props: ReplayCardProps): ReactNode {
  return (
    <img src="/assets/img/lolk.png" alt={props.replay.game}
      className={cn("brightness-75 hover:brightness-100 duration-200 object-cover object-center rounded", props.className)} />
  );
}