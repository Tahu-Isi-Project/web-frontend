import { PropsWithChildren, ReactNode } from "react";

type LinkProps = {
    className?: string,
    href: string,
} | PropsWithChildren

export default function Link(props: LinkProps): ReactNode {
    return (
        <a href={props.href} className={props.className}> {props.children}</a >
    );
}