const template = `<div class="garage__settings">
<div class="input-group">
  <input class="name-input car-name-input" type="text" placeholder="Car name" />
  <input
    class="color-input car-color-input"
    type="color"
    value="#000000"
    colorpick-eyedropper-active="true"
  />
  <button class="btn create-btn">Create</button>
</div>
<div class="input-group">
  <input
    id="update-car-name"
    class="name-input car-name-input"
    type="text"
    placeholder="Car name"
    disabled
  />
  <input
    id="update-car-color"
    class="color-input car-color-input"
    type="color"
    value="#000000"
    colorpick-eyedropper-active="true"
    disabled
  />
  <button id="update-btn" class="btn update-btn" disabled>Update</button>
</div>
<div class="btn-group">
  <button class="btn btn-race">Race</button>
  <button class="btn btn-reset">Reset</button>
  <button class="btn btn-generate">Generate car</button>
</div>
</div>`;

export default template;
