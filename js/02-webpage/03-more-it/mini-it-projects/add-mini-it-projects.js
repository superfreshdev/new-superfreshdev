// console.log("🟨 add-mini-it-projects.js")


/* -------------------------------------------------------------------------- */
/* DOM Elements
/* -------------------------------------------------------------------------- */

// add Point of Mini IT Projects
var addPoint_mini_itProject_list = document.getElementById("js-add-to-do-more-it-mini-it-projects");
// console.log("🔥Length = " + addPoint_miniItProject_list )

// Test
// addPoint_miniItProjects.style.display = "none";

/* -------------------------------------------------------------------------- */
/* Execute
/* > Add all Mini IT Projects from file
/* -------------------------------------------------------------------------- */

  var jsonFile_mini_itProjects = "data/json/more-it/mini-it-projects/data-mini-it-project-cards.json";

  update_miniItProjects_to_addPoint( jsonFile_mini_itProjects, addPoint_mini_itProject_list )
