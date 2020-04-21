// Checkpoint 1 | Creating the queen object
var queen = {
  direction: `s`,
  postion: {
    xcordinate: 0,
    ycordinate: 0,
  },

  whereabouts: [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],

    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],

    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],

    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],

    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],

    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],

    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],

    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
  ],
};
// Checkpoint 2 | Turning the queen
switch (queen.direction) {
  case "N": {
    document.write("Queen in North Postion");
    document.write("<br>");
    break;
  }
  case "s": {
    document.write("Queen in South Postion");

    function returnSouth(queen, x, y) {
      queen.postion.xcordinate = x;
      queen.postion.ycordinate = y;
      return queen.postion;
    }
    returnSouth(queen, 4, 0);
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
// Checkpoint 3 | Moving the queen
function MoveForward(queen) {
  var first = queen.postion.xcordinate + 1;
  var last = queen.postion.ycordinate + 1;
  // Bonus 1 - Gotta keep her in the battle!
  if (first >= 0 && first <= 7 && last >= 0 && last <= 7) {
    document.write(first + "," + last);
    document.write("<br>");
    queen.postion.xcordinate = first;
    queen.postion.ycordinate = last;
    return queen.postion;
  } else {
    document.write("out side of board");
  }
}
document.write(
  "Moving one step forward ---->using method MoveForwar():====present postion in queen on board   "
);
MoveForward(queen);
// Checkpoint 4 | Jump move the queen
function jumpMoveForward(queen, first, last) {
  // Bonus 1 - Gotta keep her in the battle!
  if (first >= 0 && first <= 7 && last >= 0 && last <= 7) {
    var first = queen.postion.xcordinate + first;
    var last = queen.postion.ycordinate + last;
    if (first >= 0 && first <= 7 && last >= 0 && last <= 7) {
      document.write(first + "," + last);

      document.write("<br>");
      queen.postion.xcordinate = first;
      queen.postion.ycordinate = last;
      return queen.postion;
    } else {
      document.write("out side of board");
    }
  } else {
    document.write("out side of board");
  }
}
document.write(
  "queen jumping steps using this method----> jumpMoveForward( 2, 2)):==== present postion on board  "
);
jumpMoveForward(queen, 2, 2);

// Checkpoint 5 |  Tracking the position
function updatePostion(queen) {
  row = queen.whereabouts;

  var x = queen.postion.xcordinate;
  var y = queen.postion.ycordinate;
  for (let index = 0; index < row.length; index++) {
    for (let index1 = 0; index1 < row.length; index1++) {
      if (queen.whereabouts[index][index1] == queen.whereabouts[x][y]) {
        document.write(queen.whereabouts[index][index1]);
        document.write(":---->it is postion an array on board");
      }
    }
    document.write("<br>");
  }
}
updatePostion(queen);
// Bonus 2 - The queen is more powerful than what you think!
function jumpMoveback(queen, first, last) {
  if (first >= 0 && first <= 7 && last >= 0 && last <= 7) {
    var first = queen.postion.xcordinate - first;
    var last = queen.postion.ycordinate - last;
    if (first >= 0 && first <= 7 && last >= 0 && last <= 7) {
      document.write(first + "," + last);

      document.write("<br>");
      queen.postion.xcordinate = first;
      queen.postion.ycordinate = last;
      return queen.postion;
    } else {
      document.write("out side of board");
    }
  } else {
    document.write("out side of board");
  }
}
document.write("<br>");
document.write(
  "queen jumping back steps using this method----> jumpMoveback( 3, 1)):==== present postion on board  "
);

jumpMoveback(queen, 3, 1);
// Bonus 3 - How about multiple queens?
