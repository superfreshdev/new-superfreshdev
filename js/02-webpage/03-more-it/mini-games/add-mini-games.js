// console.log("🟨 add-mini-games.js")

/* -------------------------------------------------------------------------- */
/* DOM Elements
/* -------------------------------------------------------------------------- */

// id="mini-games-container"

// add Point of Mini Games
var addPoint_miniGame_list = document.getElementById("js-add-to-do-more-it-mini-games");
// console.log("🔥Length = " + addPoint_miniItProject_list )

// Test
// addPoint_miniGame_list.style.display = "none";

/* -------------------------------------------------------------------------- */
/* Execute
/* > Add all Mini IT Projects from file
/* -------------------------------------------------------------------------- */

  var jsonFile_mini_itProjects = "data/json/more-it/mini-games/data-mini-game-cards.json";

  update_miniItProjects_to_addPoint( jsonFile_mini_itProjects, addPoint_miniGame_list )
