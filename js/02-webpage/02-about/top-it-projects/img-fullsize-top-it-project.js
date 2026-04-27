// console.log("🟨 img-fullsize-top-it-project.js")


/* -------------------------------------------------------------------------- */
/* DOM Elements
/* -------------------------------------------------------------------------- */

// 3 imgs
var imgsTopItProject = document.getElementsByClassName("img-top-it-project-card");

// show, unshown
var divAboutPageContainer = document.getElementById("about-page-container");

// img fullsize view
var divImgFullsizeViewTopItProject = document.getElementById("div-fullsize-view-top-it-project");
var imgFullsizeViewTopItProject = document.getElementById("img-fullsize-view-top-it-project");

// btn close
var btnCloseImgFullsizeTopItProject = document.getElementById("btn-close-img-fullsize-view-top-it-project");

/* -------------------------------------------------------------------------- */
/* Var
/* -------------------------------------------------------------------------- */

var getImgSrc = "";

/* -------------------------------------------------------------------------- */
/* Event
/* Click Listeners (imgs)
/* -------------------------------------------------------------------------- */

for( let i=0; i < imgsTopItProject.length; i++ ) {

  // Add Click Event Listener to all Links
  imgsTopItProject[i].addEventListener( "click", ()=> {

    // window.alert("Top IT Project = " + i )

    /* ------------------------------------------------------- */
    /* Step 1/2:
    /* > unshown about page container
    /* ------------------------------------------------------- */

      divAboutPageContainer.style.display = "none";

    /* ------------------------------------------------------- */
    /* Step 2/2:
    /* > show img fullsize view with img
    /* ------------------------------------------------------- */

      divImgFullsizeViewTopItProject.style.display = "flex";

      // get img src from top it project
      getImgSrc = imgsTopItProject[i].getAttribute("src");
      // window.alert("Img Src= = " + getImgSrc )

      // set in fullsize view
      imgFullsizeViewTopItProject.src = getImgSrc;

  } )

}

/* -------------------------------------------------------------------------- */
/* Event
/* Click Listener ( x close )
/* -------------------------------------------------------------------------- */

btnCloseImgFullsizeTopItProject.addEventListener( "click", ()=> {

  //  window.alert("Close Clicked")

  //  unshown img fullsize
  divAboutPageContainer.style.display = "grid";

  // show about page container
   divImgFullsizeViewTopItProject.style.display = "none";


})
