function template(winner) {
  return `<img src="./assets/trophy.png" alt="trophy" />
  <h2>The WINNER is<br /><span class="name">${winner.name}</span><br />${winner.time} sec</h2>`;
}

export default template;
