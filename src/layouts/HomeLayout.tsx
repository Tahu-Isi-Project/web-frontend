import { Children, PropsWithChildren, ReactNode } from "react";

import { Navbar, Footer } from "../components/ui/navigation";

type HomeLayoutProps = {
} | PropsWithChildren

export default function HomeLayout(props: HomeLayoutProps): ReactNode {
    return (
        <>
            <Navbar></Navbar>
            <div>
                {props.children ? props.children : ''}
            </div>
            <Footer></Footer>
        </>
    );
}