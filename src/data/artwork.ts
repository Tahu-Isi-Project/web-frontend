import { Artwork } from "../model/artwork";
import { users } from "./users";
import { tags } from "./tags";

export const artworks = [
  new Artwork("1", users[0], "assets/img/art.png", "Reimu Art", [tags[0]]),
  new Artwork("2", users[0], "assets/img/art.png", "Reimu Art", [tags[0]]),
  new Artwork("3", users[0], "assets/img/art.png", "Reimu Art", [tags[0]]),
  new Artwork("4", users[0], "assets/img/art.png", "Reimu Art", [tags[0]]),
  new Artwork("5", users[0], "assets/img/art.png", "Reimu Art", [tags[0]]),
] as Artwork[];