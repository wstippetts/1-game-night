export class Player {

  constructor(name, points, img) {
    this.name = name
    this.points = points
    this.img = img
  }

  addpoints(name) {
    this.points += 1
  }

  subpoints(name) {
    this.points -= 1
  }

  get HTMLTemplate() {
    return `
    <div class="col-4 text-dark">
  <div class="card text-center selectable no-select" onclick="app.creaturesController.hurtCreature('${this.name}')">
    <h5>${this.name}</h5>
    <h1>${this.points ? '🤺' : '☠️'}</h1>
  </div>
</div>
  
  `
  }


}