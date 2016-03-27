var myRover = {
  position: [0,0],
  direction: 'N'
};

// The exercise asked to create a grid using two-dimensional arrays, but program works without using it, why then?
var grid = new Array(10)

for (i = 0; i < grid.length; i++) {
  grid[i] = new Array(10);
}

/*
grid[0][1] = "Arrays"
grid[0][2] = "What is an array?"
grid[0][3] = "An ordered stack of data"

grid[1][1] = "Arrays"
grid[1][2] = "How to create arrays?"
grid[1][3] = "Assign variable name to array object, then assign values to the array."

grid[2][1] = "Arrays"
grid[2][2] = "What are two dimensional arrays?"
grid[2][3] = "An ordered grid of data"
*/

// console.log(grid);

var obstacles = [

    { "name": "Spaceship",
      "position": [1,7]
    },

    { "name": "Crater",
      "position": [7,8]
    }
  ];

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  } //deleted semicolon ; but still works :D Why?

  if (rover.position[0] < 0) {
    rover.position[0] += 10;
  }

  if (rover.position[0] > 9) {
    rover.position[0] -= 10;
  }

  if (rover.position[1] < 0) {
    rover.position[1] += 10;
  }

  if (rover.position[1] > 9) {
    rover.position[1] -= 10;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
  } //deleted semicolon ; but still works :D Why?

  if (rover.position[0] < 0) {
    rover.position[0] += 10;
  }

  if (rover.position[0] > 9) {
    rover.position[0] -= 10;
  }

  if (rover.position[1] < 0) {
    rover.position[1] += 10;
  }

  if (rover.position[1] > 9) {
    rover.position[1] -= 10;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = "W"
      break;
    case 'E':
      rover.direction = "N"
      break;
    case 'S':
      rover.direction = "E"
      break;
    case 'W':
      rover.direction = "S"
      break;
  };

  console.log("New Rover Direction: [" + rover.direction + "]")
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function turnRigth(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = "E"
      break;
    case 'E':
      rover.direction = "S"
      break;
    case 'S':
      rover.direction = "W"
      break;
    case 'W':
      rover.direction = "N"
      break;
  };

  console.log("New Rover Direction: [" + rover.direction + "]")
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function commands() {
  var commands = prompt('Hi operator! Give me the sequence of commands to move the rover. Use f (foward), b (backward), l (left) or r (right).')

  var arrayCommands = commands.split("");

  for (var i = 0; i < arrayCommands.length; i++) {
    if (arrayCommands[i] == 'f') {
      goForward(myRover);
    }

    else if (arrayCommands[i] == 'b') {
      goBackward(myRover);
    }

    else if (arrayCommands[i] == 'l') {
      turnLeft(myRover);
    }

    else if (arrayCommands[i] == 'r') {
      turnRigth(myRover);
    }

    else {
      alert('Please use only provided commands!');
      return commands();
    }
  }
}

commands();

