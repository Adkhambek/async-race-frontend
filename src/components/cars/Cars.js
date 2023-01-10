import template from "./template";
import "./cars.css";
import "../../assets/finish-flag.png";
import "../../assets/car.svg";

class Cars {
  constructor(props) {
    this.props = props;
  }

  selectBtn(btn) {
    const id = Number(btn.dataset.id);
    const car = this.props.cars.find((val) => val.id === id);
    const updateCarNameInput = document.getElementById("update-car-name");
    const updateCarColorInput = document.getElementById("update-car-color");
    const updateBtn = document.getElementById("update-btn");

    updateCarNameInput.disabled = false;
    updateCarColorInput.disabled = false;
    updateBtn.disabled = false;
    updateCarNameInput.value = car.name;
    updateCarColorInput.value = car.color;
    updateBtn.setAttribute("data-id", id);
  }

  render() {
    const div = document.createElement("div");
    div.className = "garage__playground";
    div.innerHTML = template(this.props);
    const prevBtn = div.querySelector("button.prev");
    const nextBtn = div.querySelector("button.next");
    const deleteBtns = div.querySelectorAll("button.delete");
    const selectBtns = div.querySelectorAll("button.select");
    const startBtns = div.querySelectorAll("button.start");
    const stopBtns = div.querySelectorAll("button.stop");

    prevBtn.addEventListener("click", () => this.props.handlePrevPage());
    nextBtn.addEventListener("click", () => this.props.handleNextPage());
    deleteBtns.forEach((btn) => {
      btn.addEventListener("click", async () => {
        const id = Number(btn.dataset.id);
        await this.props.deleteCar(id);
      });
    });
    selectBtns.forEach((btn) => {
      btn.addEventListener("click", () => this.selectBtn(btn));
    });
    startBtns.forEach((btn) => {
      btn.addEventListener("click", () => this.props.startEngine(btn));
    });
    stopBtns.forEach((btn) => {
      btn.addEventListener("click", () => this.props.stopEngine(btn));
    });
    return div;
  }
}

export default Cars;
