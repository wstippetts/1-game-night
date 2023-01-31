export class Player {

  constructor(name, points = 0, emoj) {
    this.name = name
    this.points = parseInt(points)
    this.emoj = emoj
  }

  addPlayerPoints(points) {
    this.points += points
  }

  subPlayerPoints(points) {
    this.points -= points
  }



  get HTMLTemplate() {
    return `
    <div class="col-4 text-dark text-center card m-2">
  
    <div class="text-center">
    <h5>${this.name}</h5>
    <h1>${this.points}</h1>
    <button class="m-2 selectable no-select btn btn-danger" onclick="app.PlayerController.subPlayerPoints('${this.name}')" >➖</button>
      <button class="m-2 selectable no-select btn btn-success" onclick="app.PlayerController.addPlayerPoints('${this.name}')">➕</button>
    
    </div>
  </div>
</div>
  
  `
  }


}