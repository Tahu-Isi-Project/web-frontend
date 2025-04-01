import { Tag } from "./tag";
import { User } from "./user";

export class Replay {
    public id: string;
    public author: User;
    public imgUrl: string;
    public tags: Tag[];

    constructor(id: string, author: User, imgUrl: string, tags: Tag[]) {
        this.id = id;
        this.author = author;
        this.imgUrl = imgUrl;
        this.tags = tags;
    }
}