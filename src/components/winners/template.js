function template(props) {
  function getWinner() {
    let result = "";
    let { count } = props;
    for (const winner of props.winners) {
      result += `<tr>
      <td>${count}</td>
      <td>
        <i class="car-icon" style="background-color: ${winner.color}"></i>
      </td>
      <td>${winner.name}</td>
      <td>${winner.wins}</td>
      <td>${winner.time}</td>
    </tr>`;
      count += 1;
    }

    return result;
  }

  function isActive(sort, order) {
    return props.sortBy === sort && props.orderType === order ? "active" : "";
  }
  return `<h2>Winners (${props.total})</h2>
  <table class="winners__table">
    <thead>
      <tr>
        <th>№</th>
        <th>Car</th>
        <th>Name</th>
        <th>
          <button class="sort-by-wins">
            wins
            <span class="sort-icon">
              <span class="fas fa-sort-up
              ${isActive("wins", "DESC")}" ></span>
              <span class="fas fa-sort-down ${isActive("wins", "ASC")}"></span>
            </span>
          </button>
        </th>
        <th>
          <button class="sort-by-time">
            Best time
            <span class="sort-icon">
              <span class="fas fa-sort-up
              ${isActive("time", "DESC")}" ></span>
              <span class="fas fa-sort-down ${isActive("time", "ASC")}"></span>
            </span>
          </button>
        </th>
      </tr>
    </thead>
    <tbody>
      ${getWinner()}
    </tbody>
  </table>
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
</div>`;
}

export default template;
