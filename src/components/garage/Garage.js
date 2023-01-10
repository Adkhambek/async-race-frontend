import template from "./template";
import Cars from "../cars/Cars";
import "./garage.css";

class Garage {
  constructor(props) {
    this.props = props;
  }

  async createCar(createInputGroup) {
    const nameInput = createInputGroup.querySelector(".car-name-input");
    const colorInput = createInputGroup.querySelector(".car-color-input");
    const body = {
      name: nameInput.value,
      color: colorInput.value,
    };
    await this.props.createCar(body);
  }

  async updateCar(updateInputGroup, updateBtn) {
    const id = +updateBtn.dataset.id;
    const nameInput = updateInputGroup.querySelector(".car-name-input");
    const colorInput = updateInputGroup.querySelector(".car-color-input");
    const body = {
      name: nameInput.value,
      color: colorInput.value,
    };
    await this.props.updateCar(body, id);
  }

  render() {
    const div = document.createElement("div");
    div.className = "garage";
    div.innerHTML = template;

    const createInputGroup = div.querySelector(".input-group");
    const updateInputGroup = div.querySelectorAll(".input-group")[1];
    const createBtn = createInputGroup.querySelector(".create-btn");
    const updateBtn = updateInputGroup.querySelector(".update-btn");
    const generateBtn = div.querySelector(".btn-generate");
    const raceBtn = div.querySelector(".btn-race");
    const resetBtn = div.querySelector(".btn-reset");

    createBtn.addEventListener("click", () => this.createCar(createInputGroup));

    updateBtn.addEventListener("click", () => {
      this.updateCar(updateInputGroup, updateBtn);
    });

    raceBtn.addEventListener("click", () => {
      this.props.raceCar(raceBtn);
    });

    resetBtn.addEventListener("click", () => {
      this.props.resetCar();
    });

    generateBtn.addEventListener("click", () => {
      this.props.generateRandomCars();
    });

    const cars = new Cars(this.props);
    div.appendChild(cars.render());
    return div;
  }
}

export default Garage;
