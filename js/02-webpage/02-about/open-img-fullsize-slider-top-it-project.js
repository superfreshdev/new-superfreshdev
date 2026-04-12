console.log("🟨 open-img-fullsize-slider-top-it-project.js")


/* ---------------------------------------------------------------------- */
/* Dom Elements
/* ---------------------------------------------------------------------- */

/* ----------------------------------------------------------------- */
/* About Page Content Container
/* ----------------------------------------------------------------- */

  var about_pageContentContainer = document.getElementById("js-about-page-content-container");

  // css class sets
  var cssSet_respContent_medium = "resp-row-content-medium";
  var cssSet_respContent_big = "resp-row-content-big";

/* ----------------------------------------------------------------- */
/* Img Fullsize Slider & Detail Fullsize
/* ----------------------------------------------------------------- */

  var imgFullsizeSlider_topItProject = document.getElementById("js-img-fullsize-slider-about-top-it-project");
  var detailFullsize_topItProject = document.getElementById("js-detail-fullsize-about-top-it-project");

/* ----------------------------------------------------------------- */
/* Fixed Header
/* ----------------------------------------------------------------- */

  var fixedHeader_detailFullsize = document.getElementById("fixed-header-detail-fullsize");

  var fixedHeader_imgFullsizeSlider = document.getElementById("fixed-header-img-fullsize-slider");
  // click close button
  var close_imgFullsizeSlider = document.getElementById("close-img-fullsize-slider");

/* ----------------------------------------------------------------- */
/* Img Gallery | Top It Project ( About )
/* ----------------------------------------------------------------- */

  var img_topItProject = document.getElementById("js-img-click");

/* ---------------------------------------------------------------------- */
/* Events
/* > Clicks
/* ---------------------------------------------------------------------- */

/* --------------------------------------------------- */
/* Step 1:
/* > Click on Img to Fullsize
/* --------------------------------------------------- */

img_topItProject.addEventListener("click", async () => {

  window.alert("🖼️ open img fullsize slider")

  // json dyn. way ../../../../
  var strJsonFile = "media/data/about/top-it-projects/top-it-project-1/img-data-top-it-project-1.json";

  // strJsonFile = "img-data-top-it-project-1.json";

  await async_show_imgFullsizeSlider_with( strJsonFile, 0 )


  // hard coded way

  /* ------------------------------------------------------ */
  /* Step 1:
  /* > Change fixed Header
  /* ------------------------------------------------------ */

    // unshown -> fixed header detail fullsize
    await async_set_idElement_unshown( fixedHeader_detailFullsize )

    // show -> fixed header img fullsize slider
    await async_set_idElement_show( fixedHeader_imgFullsizeSlider, "flex")

  /* ------------------------------------------------------ */
  /* Step 2:
  /* > Change ".resp-row-content-medium" to big
  /* ------------------------------------------------------ */

    await async_update_cssClass_to_element( about_pageContentContainer, cssSet_respContent_big)

  /* ------------------------------------------------------ */
  /* Step 3:
  /* > Show "Img Fullsize Slider"
  /* > Unshow "Detail Fullsize"
  /* ------------------------------------------------------ */

    // unshow -> detail fullsize
    await async_set_idElement_unshown( detailFullsize_topItProject )

    // show -> img fullsize slider
    await async_set_idElement_show( imgFullsizeSlider_topItProject, "grid")



})

/* --------------------------------------------------- */
/* Step 2:
/* > Click Close to Close Fullsize
/* --------------------------------------------------- */
close_imgFullsizeSlider.addEventListener("click", async () => {

  window.alert("❌ close img fullsize slider")

  /* ------------------------------------------------------ */
  /* Step 1:
  /* > Change fixed Header
  /* ------------------------------------------------------ */

    // unshown -> fixed header img fullsize slider
    await async_set_idElement_show( fixedHeader_detailFullsize, "flex")

    // shown -> fixed header detail fullsize
    await async_set_idElement_unshown( fixedHeader_imgFullsizeSlider )

  /* ------------------------------------------------------ */
  /* Step 2:
  /* > Change ".resp-row-content-big" to medium
  /* ------------------------------------------------------ */

    await async_update_cssClass_to_element( about_pageContentContainer, cssSet_respContent_medium)

  /* ------------------------------------------------------ */
  /* Step 3:
  /* > Unshow "Img Fullsize Slider"
  /* > Show "Detail Fullsize"
  /* ------------------------------------------------------ */

    // unshow -> img fullsize slider
    await async_set_idElement_unshown( imgFullsizeSlider_topItProject  )

    // show -> detail fullsize
    await async_set_idElement_show( detailFullsize_topItProject, "grid")


})


















/* ---------------------------------------------------------------------- */
/* ❌❌❌ Trash
/* ---------------------------------------------------------------------- */


// linkDetails_itProject_1.addEventListener("click", async () => {

//   doDetailFullsizeView("Details 1: Online Ordering Service");

//   /* Update CSS Style */
//   str_cssStyle_update = "display:grid;"

//   await async_update_cssStyle( detail_fullsize_container, str_cssStyle_update )



// })

// // close full size view
// btn_close_fullsize.addEventListener("click", async () => {

//   /* Update CSS Style */
//   str_cssStyle_update = "display:none;"

//   await async_update_cssStyle( detail_fullsize_container, str_cssStyle_update )


// })


/* ---------------------------------------------------------------------- */
/* Function:
/* > Do Defail Fullsize View
/* ---------------------------------------------------------------------- */

  // function doDetailFullsizeView( strInfo ) {

  //   window.alert("🍎:" + strInfo);

  // }

/* ---------------------------------------------------------------------- */
/* Function:
/* > Update Css Style
/* ---------------------------------------------------------------------- */

// async function async_update_cssStyle( domElement, cssStyle ) {

//   console.log("🟡 async_update_cssStyle: ")

//   /* --------------------------------------------------------------- */
//   /* Step 1:
//   /* > Get domElement
//   /* --------------------------------------------------------------- */

//   // exist, is not null ?
//   if( domElement === null ) {

//     window.alert("❌: Failed | DomElement dont exist, " + domElement );

//   } else {

//     // Update CSS Style
//     domElement.style.cssText = cssStyle;

//     window.alert("🟩: Successful | CSS Style Update to DomElement " );

//   }



//   /* --------------------------------------------------------------- */
//   /* Step 2:
//   /* > Update CSS Style domElement
//   /* --------------------------------------------------------------- */

//   return new Promise(resolve => {
//     resolve( );
//   })

// }

/* ---------------------------------------------------------------------- */
/* Function:
/* > Do Push Slide
/* ---------------------------------------------------------------------- */
