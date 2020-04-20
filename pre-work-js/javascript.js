var queen = {
  direction: `s`,
  postion: {
    xcordinate: 4,
    ycordinate: 0,
  },
};
document.write(queen.postion.xcordinate);
document.write("<br>");

document.write("<br>");

changeDirection = "s";

switch (changeDirection) {
  case "N": {
    document.write("Queen in North Postion");
    document.write("<br>");
    break;
  }
  case "s": {
    document.write("Queen in South Postion");
    document.write("<br>");
    break;
  }

  case "E": {
    document.write("Queen in East Postion");
    document.write("<br>");
    break;
  }
  case "W": {
    document.write("Queen in West Postion");
    document.write("<br>");
    break;
  }
  case "NE": {
    document.write("Queen in North East Postion");
    document.write("<br>");
    break;
  }
  case "NW": {
    document.write("Queen in North West Postion");
    document.write("<br>");
    break;
  }
  case "SE": {
    document.write("Queen in South East Postion");
    document.write("<br>");
    break;
  }
  case "SW": {
    document.write("Queen in South West Postion");
    document.write("<br>");
    break;
  }
}
document.write("<br>");

document.write("<br>");

document.write();
function jumpMoveForward() {}
// Checkpoint 5 |  Tracking the position
positionLog = [
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],

  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],

  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],

  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],

  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],

  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],

  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],

  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];
