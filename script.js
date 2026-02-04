var list = [];
// identical to "let"

function preload(){
    list = loadJSON("data.json");
}


function setup() {
  createCanvas(400, 630);
}

function draw() {
  background(220);

  // Title
  textAlign("center");
  textSize(24);
  text("Canada's Exports", 200, 40);

  // Iterate through the list and place elements
  Object.values(list).map((item, index) => {
    fill(item.color);
    rect(50, index * 30 + 70, item.amount / 180 * 300, 10);

    // 180 / 180 = 100%
    // 37 / 180 = 21%

    textSize(10);
    textAlign("left");
    fill("black");
    text(item.name, 50, index * 30 + 65);

    textSize(20);
    textAlign("right");
    text(item.icon, 45, index * 30 + 75);
  });
}