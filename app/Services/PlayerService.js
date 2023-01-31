import { appState } from "../AppState.js";
import { Player } from "../Models/PlayerModel.js";

class PlayerService {

  addPoints(name) {
    let player = appState.Players.find(player => player.name == name)
    player.addPlayerPoints(1)
  }
  subPoints(name) {
    let player = appState.Players.find(player => player.name == name)
    player.subPlayerPoints(1)
  }
  createPlayer(playerData) {
    let newPlayer = new Player(playerData.name, playerData.points)
    appState.Players.push(newPlayer)
  }
}

export const playerService = new PlayerService()