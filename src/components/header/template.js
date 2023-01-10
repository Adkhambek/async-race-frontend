function template(page) {
  return `<h1>Auto Race 2023</h1>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item">
        <button data-page="garage" type="button" class="btn
        ${page === "garage" ? "active" : ""}">Garage</button>
      </li>
      <li class="nav-item">
        <button data-page="winners" type="button" class="btn
        ${page === "winners" ? "active" : ""}">Winners</button>
      </li>
    </ul>
  </nav>`;
}

export default template;
