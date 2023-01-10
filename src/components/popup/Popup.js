import template from "./template";
import "./index.css";
import "../../assets/trophy.png";

class Popup {
  constructor(winner) {
    this.winner = winner;
  }

  render() {
    const div = document.createElement("div");
    div.className = "popup";
    div.innerHTML = template(this.winner);
    return div;
  }
}

export default Popup;
