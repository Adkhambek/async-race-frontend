function template(props) {
  function getCar() {
    let result = "";
    for (const car of props.cars) {
      result += `<li class="car">
      <h3 class="car__name">${car.name}</h3>
      <div class="car__btns-group">
        <button data-id=${car.id} class="btn btn-sm select" aria-label="select">
          <span class="fas fa-check"></span>
        </button>
        <button data-id=${car.id} class="btn btn-sm delete" aria-label="remove">
          <span class="fas fa-trash"></span>
        </button>
        <button data-id=${car.id} class="btn btn-sm start" aria-label="start">
          <span class="fas fa-play"></span>
        </button>
        <button data-id=${car.id} class="btn btn-sm stop" aria-label="stop" disabled>
          <span class="fas fa-stop"></span>
        </button>
      </div>
      <div class="playground">
      <i class="car-icon" style="background-color: ${car.color}"></i>
        <img
          src="./assets/finish-flag.png"
          width="70"
          alt="finish flag"
          class="flag"
        />
      </div>
    </li>`;
    }

    return result;
  }
  return `<div class="garage__playground">
  <h2>Garage (${props.totalCars} cars):</h2>
  <ul class="cars">
    ${getCar()}
  </ul>
  <div class="pagination">
    <button class="btn prev" aria-label="prev button"
    ${props.page === 1 ? "disabled" : ""} >
      <span class="fas fa-chevron-left"></span>
    </button>
    <span class="page">${props.page}/${props.totalPages()}</span>
    <button class="btn next" aria-label="next button"
    ${props.page >= props.totalPages() ? "disabled" : ""}>
      <span class="fas fa-chevron-right"></span>
    </button>
  </div>
</div>`;
}

export default template;
