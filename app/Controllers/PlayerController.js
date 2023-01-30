import { appState } from "..AppState.js"
import { PlayerService } from "../Services/PlayerService.js"
import { getFormData } from "../Utils/FormHandler.js"

export class PlayerController {

  drawPlayers() {
    let players = appState.players
    let names = ''
    players.forEach(player => names += player.HTMLTemplate)
    document.getElementById('players').innerHTML = names
  }

  createPlayer() {
    window.event.preventDefault()
    const form = window.event.target
    let playerData = getFormData(form)
    PlayerService.createPlayer(playerData)
    this.drawPlayers
  }

  addPlayerPoints(name) {
    PlayerService.addPlayerPoints(name)
    this.drawPlayers()
  }
  subPlayerPoints(name) {
    PlayerService.subPlayerPoints(name)
    this.drawPlayers()
  }

  constructor() {
    this.drawPlayers()

  }

}