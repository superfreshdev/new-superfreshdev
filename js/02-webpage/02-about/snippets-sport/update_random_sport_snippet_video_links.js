// console.log("🟨 update_random_sport_snippet_video_links.js ")


/* ---------------------------------------------------------------------- */
/* Dom Elements
/* ---------------------------------------------------------------------- */

// click link
var link_randomVideoLinks = document.getElementById("snippet-click");

// 3 video link imgs
var imgs_of_sport_video_snippets = document.querySelectorAll(".snippet-video-link-box > img:nth-of-type(1)");
// console.log("🔥 Length = " + imgs_of_sport_video_snippets.length )

// 3 video links
var links_of_sport_video_snippets = document.querySelectorAll(".snippet-video-link-box > a:nth-of-type(1)");
// console.log("🔥 Length = " + links_of_sport_video_snippets.length )


/* ---------------------------------------------------------------------- */
/* Variables
/* ---------------------------------------------------------------------- */

// json data file for all sport snippet video links

// server: json file
var jsonFile = "data/json/about/sport-snippet-videos/data-sport-snippet-videos.json"

// local: json file
// var jsonFileLocal = "../../../data/json/about/sport-snippet-videos/data-sport-snippet-videos.json"

// global
var start_SnippetSportVideoIndizies  = [];
start_SnippetSportVideoIndizies = [0,1,2];

// ⚠️ e.g if u use 3 videos, than u should have minimum maxSportSnippetVideos of 6
// because the first 3 dont will be shown, we like to get 3 new random items
var maxSportSnippetVideos = 10;


/* ----------------------------------------------------------------- */
/* Event
/* Click to generate Random Video Links
/* ----------------------------------------------------------------- */

link_randomVideoLinks.addEventListener( "click",  async () => {

  // alert("snippet-click");

  var new_randomIndizies = [];

  /* ------------------------------------------------- */
  /* Step 1
  /* Generate new random numbers which
  /* are not part of start numbers and they should be
  /* unique because we like complete 3 new random
  /* video link items
  /* ------------------------------------------------- */

    new_randomIndizies = await async_get_randomIndizies_from_rangeLimit_by_ignoring_startIndizies(
                              start_SnippetSportVideoIndizies , maxSportSnippetVideos );

  /* ------------------------------------------------------------------------------- */
  /* Step 2:
  /* > Update Sport Video Link Snippets
  /* > by using getting random values
  /* ------------------------------------------------------------------------------- */

    // Update Random Snippet Video Links
    await async_update_random_snippetVideoLinks( new_randomIndizies, jsonFile  )


  /* ------------------------------------------------------------------------------- */
  /* Step 3:
  /* > Update New Random Indizies to new start_SnippetSportVideoIndizies
  /* > to get everytime new unique random items
  /* ------------------------------------------------------------------------------- */

    start_SnippetSportVideoIndizies = new_randomIndizies;


} )


/* ----------------------------------------------------------------- */
/* Async Function |
/ > Update Random Snippet Video Links by using random indizies
/* ----------------------------------------------------------------- */

async function async_update_random_snippetVideoLinks( updateRandomIndizies, jsonFile ) {


  // console.log("🪛|async_update_random_snippetVideoLinks()")

  /* ------------------------------------------------ */
  /* Step 1/2
  /* > Get Data from JSON File
  /* ------------------------------------------------ */

  const dataSnippetSportVideos = await async_getJsonFile( jsonFile )

  // test prints
  // console.log("➡️ Read Data Snippet Sport Videos ");
  // console.log("🔥data= " + dataSnippetSportVideos)

  // console.log("1: " + dataSnippetSportVideos.defaultDatas.imgPath )

  /* --------------------------------------------------------- */
  /* Step 2/2
  /* > Update Snippet Videos Links by using
  /* > Datas from JSON File
  /* --------------------------------------------------------- */

  var new_index = "";

  var new_imgPath = "";
  // add default img path from json
  new_imgPath = dataSnippetSportVideos.defaultDatas.imgPath;

  var new_imgName = "";
  var new_url = "";

  var new_fullImgPath = "";

  for( let i=0; i < updateRandomIndizies.length; i++ ) {

    // update new index
    new_index = updateRandomIndizies[i];

    /* ------------------------------------------- */
    // get img name from json data
    /* ------------------------------------------- */
    new_imgName = dataSnippetSportVideos.sportSnippetVideoDatas[new_index].imgName;
    // console.log("🤡new_imgName=" + new_imgName);

    // concat img default path with new img name
    new_fullImgPath = new_imgPath + new_imgName;

    /* ------------------------------------------- */
    // get url from json data
    /* ------------------------------------------- */
    new_url = dataSnippetSportVideos.sportSnippetVideoDatas[new_index].url;
    // console.log("🤡new_url=" + new_url);

    // update img
    await async_update_src_from_queryElement( imgs_of_sport_video_snippets[i], new_fullImgPath );

    // update link
    await async_update_href_from_queryElement( links_of_sport_video_snippets[i], new_url )

  }

  return new Promise(resolve => {
    resolve( );
  })

}
