import { Artwork } from '../../model/artwork';

export { default as ArtworkCard } from './ArtworkCard';


export interface ArtworkCardProps {
  className?: string,
  artwork: Artwork,
};