import App from "./components/App";
import "./style.css";

async function init() {
  const root = document.getElementById("root");
  const app = new App();

  root.appendChild(await app.render());
}

init();
