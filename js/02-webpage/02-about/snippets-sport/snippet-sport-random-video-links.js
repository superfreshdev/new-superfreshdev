console.log("🟨 snippet-sport-random-video-links.js")


/* ---------------------------------------------------------------------- */
/* Dom Elements
/* ---------------------------------------------------------------------- */

var link_randomVideoLinks = document.getElementById("snippet-click");

// 1: https://drive.google.com/file/d/16s4r5rtodqSpB2VvIerFl5F7DMOK_3Qo/view?usp=sharing
// 2: https://drive.google.com/file/d/15MEJVgqmf14iXBTwS25rzKGphJppcZs4/view?usp=sharing
// 3: https://drive.google.com/file/d/1B0xlvXhssyTIM0jOLVrkkBWb9fZvtCu2/view?usp=sharing

var url_list = [

  "https://drive.google.com/file/d/16s4r5rtodqSpB2VvIerFl5F7DMOK_3Qo/view?usp=sharing",
  "https://drive.google.com/file/d/15MEJVgqmf14iXBTwS25rzKGphJppcZs4/view?usp=sharing",
  "https://drive.google.com/file/d/1B0xlvXhssyTIM0jOLVrkkBWb9fZvtCu2/view?usp=sharing",
  "",
  "",
  "",
  "",
  "",
  ""
]

var img_list = [

  "media/imgs/content/01-about/about-me/snippet-img-videos/01.png",
  "media/imgs/content/01-about/about-me/snippet-img-videos/02.png",
  "media/imgs/content/01-about/about-me/snippet-img-videos/03.png",
  "media/imgs/content/01-about/about-me/snippet-img-videos/04.png",
  "media/imgs/content/01-about/about-me/snippet-img-videos/05.png",
  "media/imgs/content/01-about/about-me/snippet-img-videos/06.png",
  "media/imgs/content/01-about/about-me/snippet-img-videos/07.png",
  "media/imgs/content/01-about/about-me/snippet-img-videos/08.png",
  "media/imgs/content/01-about/about-me/snippet-img-videos/09.png",
  "media/imgs/content/01-about/about-me/snippet-img-videos/10.png",

]

/* ----------------------------------------------------------------- */
/* Event
/* Click
/* ----------------------------------------------------------------- */

link_randomVideoLinks.addEventListener( "click",  async () => {

  alert("snippet-click");

} )

/* ----------------------------------------------------------------- */
/* Generate Random Numbers By Given Range
/* ----------------------------------------------------------------- */

async function async_get_randomNumbers_inRange( numberOfRandomValues, rangeLimit ) {

  console.log("numberOfRandomValues = " + numberOfRandomValues );
  console.log("rangeLimit = " + rangeLimit );


  return new Promise(resolve => {
    resolve( );
  })

}

/* ----------------------------------------------------------------- */
/* ...
/* ----------------------------------------------------------------- */

// update img src

// update link url
