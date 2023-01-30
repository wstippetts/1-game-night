export class Player {

  constructor(name, points, emoj) {
    this.name = name
    this.points = parseInt(points)
    this.emoj = emoj
  }

  addpoints(points) {
    this.points += 1
  }

  subpoints(points) {
    this.points -= 1
  }

  get HTMLTemplate() {
    return `
    <div class="col-4 text-dark">
  
    
  <button class="card text-center selectable no-select" onclick="app.PlayerController.subPlayerPoints(${this.points})" >➖</button>
    <h5>${this.name}</h5>
    <h1>${this.points ? '🤺' : '☠️'}</h1>
    <button class="card text-center selectable no-select" onclick="app.PlayerController.addPlayerPoints(${this.points})">➕</button>
  </div>
</div>
  
  `
  }


}