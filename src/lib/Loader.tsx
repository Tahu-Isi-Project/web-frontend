import { PropsWithChildren, ReactNode, Suspense, useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { FlavorText } from "../components/LoadingScreen";
import { sleep } from "../utils";

// TODO : implement proper loading in React (probably need implement custom router)
type LoaderProps = PropsWithChildren;

interface LoaderTrigger {
  done: () => void;
}

function LoaderTrigger(props: LoaderTrigger): ReactNode {
  useEffect(() => {
    return () => {
      props.done();
    }
  }, []);

  return (<></>);
}


export default function Loader(props: LoaderProps): ReactNode {
  const [done, setDone] = useState(false);

  const flavorText = [
    { time: 0, text: "Booting" },
    { time: 1, text: "Load minimal resources" },
    { time: 12, text: "Loading assets" },
    { time: 24, text: "Loading tailwind" },
    { time: 42, text: "Loading content" },
    { time: 52, text: "Content loaded" },
    { time: 72, text: "Starting app" },
    { time: 102, text: "Finishing" },
  ] as FlavorText[];

  async function loadDone() {
    await sleep(300);
    setDone(() => true);
  }

  return (
    <>
      <LoadingScreen className={done ? 'opacity-0' : ''} flavorText={flavorText} />
      <Suspense fallback={<LoaderTrigger done={loadDone} />}>
        {props.children}
      </Suspense>
    </>
  );
}