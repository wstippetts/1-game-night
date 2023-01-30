import { appState } from "../AppState.js";
import { } from "../Models/PlayerModel.js";

class PlayerService {

  addPoint(name) {
    let player = appState.players.find(player => player.name == name)
    player.addPoints(1)
  }
  subPoint(name) {
    let player = appState.players.find(player => player.name == name)
    player.subPoints(1)
  }
  createPlayer(playerData) {
    let newPlayer = new PlayerModel(playerData.name, playerData.points)
  }
}