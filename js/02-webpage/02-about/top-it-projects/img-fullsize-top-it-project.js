console.log("🟨 img-fullsize-top-it-project.js")


/* -------------------------------------------------------------------------- */
/* DOM Elements
/* -------------------------------------------------------------------------- */

var imgsTopItProject = document.getElementsByClassName("img-top-it-project-card");

/* -------------------------------------------------------------------------- */
/* Event
/* Click Listeners
/* -------------------------------------------------------------------------- */

for( let i=0; i < imgsTopItProject.length; i++ ) {

  // Add Click Event Listener to all Links
  imgsTopItProject[i].addEventListener( "click", ()=> {

    window.alert("Top IT Project = " + i )

  } )

}
