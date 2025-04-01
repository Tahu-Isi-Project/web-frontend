import { Game } from "../model/game";
import { Replay } from "../model/replay";
import { users } from "./users";

export const replays = [
    new Replay("1", users[1], Game.TouhouLoLK, "Lunatic : Reisen"),
    new Replay("2", users[1], Game.TouhouLoLK, "Lunatic : Reisen"),
    new Replay("3", users[1], Game.TouhouLoLK, "Lunatic : Reisen"),
    new Replay("4", users[1], Game.TouhouLoLK, "Lunatic : Reisen"),
] as Replay[];