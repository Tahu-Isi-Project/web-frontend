import { Replay } from '../../model/replay';

export { default as ReplayCard } from './ReplayCard';
export { default as ReplaySmallCard } from './ReplaySmallCard';

export interface ReplayCardProps {
  className?: string,
  replay: Replay,
};