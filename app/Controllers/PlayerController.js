import { appState } from "../AppState.js"
import { playerService } from "../Services/PlayerService.js"
import { getFormData } from "../Utils/FormHandler.js"

export class PlayerController {

  drawPlayers() {
    let players = appState.Players
    let names = ''
    players.forEach(player => names += player.HTMLTemplate)
    document.getElementById('players').innerHTML = names
  }

  createPlayer() {
    window.event.preventDefault()
    const form = window.event.target
    let playerData = getFormData(form)
    playerService.createPlayer(playerData)
    this.drawPlayers
  }

  addPlayerPoints(points) {
    playerService.addPlayerPoints(points)
    this.drawPlayers()
  }
  subPlayerPoints(points) {
    playerService.subPlayerPoints(points)
    this.drawPlayers()
  }

  constructor() {
    this.drawPlayers()

  }

}