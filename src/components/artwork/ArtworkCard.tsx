import { ReactNode } from "react";
import { ArtworkCardProps } from ".";
import { cn } from "../../utils";

export default function ArtworkBigCard(props: ArtworkCardProps): ReactNode {
  return (
    <img src={props.artwork.imgUrl} alt={props.artwork.title}
      className={cn("rounded w-[400px] h-[400px] object-cover object-center brightness-75 hover:brightness-100 duration-200", props.className)} />
  );
}