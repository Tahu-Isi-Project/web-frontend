import { Game } from "./game";
import { User } from "./user";

export class Replay {
    public id: string;
    public player: User;
    public game: Game;
    public mode: string;

    constructor(id: string, player: User, game: Game, mode: string) {
        this.id = id;
        this.player = player;
        this.game = game;
        this.mode = mode;
    }
}