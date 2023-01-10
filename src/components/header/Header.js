import template from "./template";
import "./header.css";

class Header {
  constructor(props) {
    this.props = props;
  }

  render() {
    const header = document.createElement("header");
    header.innerHTML = template(this.props.section);
    const btns = header.querySelectorAll("button");
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => this.props.handleSection(e.target));
    });
    return header;
  }
}

export default Header;
