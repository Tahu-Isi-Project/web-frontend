export class Replay {
    public id: string;
    public playerName: string;
    public game: string;
    public mode: string;

    constructor(id: string, playerName: string, game: string, mode: string) {
        this.id = id;
        this.playerName = playerName;
        this.game = game;
        this.mode = mode;
    }
}