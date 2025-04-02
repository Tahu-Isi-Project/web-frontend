import { PropsWithChildren, ReactNode, Suspense } from "react";
import LoadingScreen from "@/components/LoadingScreen";

// TODO : implement proper loading in React (probably need implement custom router)
type LoaderProps = PropsWithChildren;
export default function Loader(props: LoaderProps): ReactNode {
  return (
    <Suspense fallback={<LoadingScreen />}>
      {props.children}
    </Suspense>
  );
}