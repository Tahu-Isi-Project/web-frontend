import { Tag } from "./tag";
import { User } from "./user";

export class Artwork {
  public id: string;
  public author: User;
  public imgUrl: string;
  public title: string;
  public tags: Tag[];

  constructor(id: string, author: User, imgUrl: string, title: string, tags: Tag[]) {
    this.id = id;
    this.author = author;
    this.imgUrl = imgUrl;
    this.title = title;
    this.tags = tags;
  }
}