console.log("🟨 detail-fullsize-view.js")


/* ---------------------------------------------------------------------- */
/* Register Dom Elements
/* ---------------------------------------------------------------------- */

var linkDetails_itProject_1 = document.getElementById("js-link-details-top-it-project-1");

// Test fixed Header
var header_fixed_body = document.getElementById("header-fixed-body");

// Detail Fullview
var detail_fullsize_container = document.getElementById("defail-fullsize-top-it-project-1");

// Close Detal View
// var btn_close_fullsize = document.getElementById("close-detail-view");

// Test
var str_cssStyle_update = "";


/* ---------------------------------------------------------------------- */
/* Add Dom Element to Click Event
/* ---------------------------------------------------------------------- */

linkDetails_itProject_1.addEventListener("click", async () => {

  doDetailFullsizeView("Details 1: Online Ordering Service");

  /* Update CSS Style */
  str_cssStyle_update = "display:grid;"

  await async_update_cssStyle( detail_fullsize_container, str_cssStyle_update )



})

// close full size view
// btn_close_fullsize.addEventListener("click", async () => {

//   /* Update CSS Style */
//   str_cssStyle_update = "display:none;"

//   await async_update_cssStyle( detail_fullsize_container, str_cssStyle_update )


// })


/* ---------------------------------------------------------------------- */
/* Function:
/* > Do Defail Fullsize View
/* ---------------------------------------------------------------------- */

  function doDetailFullsizeView( strInfo ) {

    window.alert("🍎:" + strInfo);

  }

/* ---------------------------------------------------------------------- */
/* Function:
/* > Update Css Style
/* ---------------------------------------------------------------------- */

async function async_update_cssStyle( domElement, cssStyle ) {

  console.log("🟡 async_update_cssStyle: ")

  /* --------------------------------------------------------------- */
  /* Step 1:
  /* > Get domElement
  /* --------------------------------------------------------------- */

  // exist, is not null ?
  if( domElement === null ) {

    window.alert("❌: Failed | DomElement dont exist, " + domElement );

  } else {

    // Update CSS Style
    domElement.style.cssText = cssStyle;

    window.alert("🟩: Successful | CSS Style Update to DomElement " );

  }



  /* --------------------------------------------------------------- */
  /* Step 2:
  /* > Update CSS Style domElement
  /* --------------------------------------------------------------- */

  return new Promise(resolve => {
    resolve( );
  })

}

/* ---------------------------------------------------------------------- */
/* Function:
/* > Do Push Slide
/* ---------------------------------------------------------------------- */
