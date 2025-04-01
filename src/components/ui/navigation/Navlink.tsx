import { PropsWithChildren, ReactNode } from "react";

type NavlinkProps = {
    href: string,
} | PropsWithChildren

export default function Navlink(props: NavlinkProps): ReactNode {
    return (
        <a href={props.href}>{props.children}</a>
    );
}