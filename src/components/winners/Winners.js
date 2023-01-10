import fetchData from "../../utils/fetchData";
import template from "./template";
import "./winners.css";

class Winners {
  constructor(props) {
    this.props = props;
    this.sortByWins = this.sortByWins.bind(this);
    this.sortByTime = this.sortByTime.bind(this);
  }

  sortByTime(btn) {
    const sortUpIcon = btn.querySelector(".fa-sort-up");
    const sortDownIcon = btn.querySelector(".fa-sort-down");
    const isSortUp = sortUpIcon.classList.contains("active");
    const isSortDown = sortDownIcon.classList.contains("active");

    if (isSortUp) {
      this.props.sortCars("time", "ASC");
    } else if (isSortDown) {
      this.props.sortCars("time", "DESC");
    } else {
      this.props.sortCars("time", "ASC");
    }
  }

  sortByWins(btn) {
    const sortUpIcon = btn.querySelector(".fa-sort-up");
    const sortDownIcon = btn.querySelector(".fa-sort-down");
    const isSortUp = sortUpIcon.classList.contains("active");
    const isSortDown = sortDownIcon.classList.contains("active");

    if (isSortUp) {
      this.props.sortCars("wins", "ASC");
    } else if (isSortDown) {
      this.props.sortCars("wins", "DESC");
    } else {
      this.props.sortCars("wins", "ASC");
    }
  }

  async render() {
    const div = document.createElement("div");
    div.className = "winners";
    const cars = await fetchData("garage", "GET");
    const winners = this.props.winners.map((winner) => ({
      ...winner,
      ...cars.find((car) => car.id === winner.id),
    }));
    const props = {
      total: this.props.totalWinners,
      page: this.props.page,
      count: (this.props.page - 1) * 10 + 1,
      winners,
      sortBy: this.props.sortBy,
      orderType: this.props.orderType,
      totalPages() {
        return Math.ceil(this.total / 10);
      },
    };

    div.innerHTML = template(props);
    const prevBtn = div.querySelector("button.prev");
    const nextBtn = div.querySelector("button.next");
    const sortByWinsBtn = div.querySelector("button.sort-by-wins");
    const sortByTimeBtn = div.querySelector("button.sort-by-time");

    prevBtn.addEventListener("click", () => this.props.handlePrevPage());
    nextBtn.addEventListener("click", () => this.props.handleNextPage());
    sortByWinsBtn.addEventListener("click", () => {
      this.sortByWins(sortByWinsBtn);
    });
    sortByTimeBtn.addEventListener("click", () => {
      this.sortByTime(sortByTimeBtn);
    });
    return div;
  }
}

export default Winners;
