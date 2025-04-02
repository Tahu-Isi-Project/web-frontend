import { PropsWithChildren } from 'react';

export { default as SlideTransition } from './SlideTransition';
export { default as SlideTransitionScroll } from './SlideTransitionScroll';

export enum SlideTransitionType {
  Right, Left
}

export type SlideTransitionProps = {
  className?: string,
  visible?: boolean,
  type?: SlideTransitionType
} | PropsWithChildren;