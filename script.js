const container = document.createElement("div");
container.className = "container";

container.innerHTML = `
  <div class="screen">
    <div name="calculator">
      <input id="show" type="text" name="screen" />
    </div>
  </div>
  <div class="calc">
    <div class="row">
      <button type="button" value="9" class="number">9</button>
      <button type="button" value="8" class="number">8</button>
      <button type="button" value="7" class="number">7</button>
      <button type="button" value="+" class="plus btn">&plus;</button>
    </div>
    <div class="row">
      <button type="button" value="6" class="number">6</button>
      <button type="button" value="5" class="number">5</button>
      <button type="button" value="4" class="number">4</button>
      <button type="button" value="-" class="minus btn">&#8722;</button>
    </div>
    <div class="row">
      <button type="button" value="3" class="number">3</button>
      <button type="button" value="2" class="number">2</button>
      <button type="button" value="1" class="number">1</button>
      <button type="button" value="*" class="multiply btn">&times;</button>
    </div>
    <div class="row">
      <button type="button" value="C" class="clear btn">C</button>
      <button type="button" value="0" class="number">0</button>
      <button type="button" value="=" class="equally btn">&#61;</button>
      <button type="button" value="/" class="divide btn">&divide;</button>
    </div>
`;
document.body.append(container);

const button = document.querySelectorAll("button");
let display = document.querySelector("input");

button.forEach(function (button) {
  button.addEventListener("click", calc);
});

function calc(evt) {
  const buttonClick = evt.target.value;
  if (buttonClick === "=") {
    if (display.value !== "") {
      display.value = eval(display.value);
    }
  } else if (buttonClick === "C") {
    display.value = "";
  } else {
    display.value += buttonClick;
  }
}