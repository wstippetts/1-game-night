import { PlayerController } from "./Controllers/PlayerController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  PlayerController = new PlayerController();
}

window["app"] = new App();
