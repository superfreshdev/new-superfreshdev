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

// global
var start_SnippetSportVideoIndizies  = [];
start_SnippetSportVideoIndizies = [0,1,2];

// ⚠️ e.g if u use 3 videos, than u should have minimum maxSportSnippetVideos of 6
// because the first 3 dont will be shown, we like to get 3 new random items
var maxSportSnippetVideos = 10;

// 1: https://drive.google.com/file/d/16s4r5rtodqSpB2VvIerFl5F7DMOK_3Qo/view?usp=sharing
// 2: https://drive.google.com/file/d/15MEJVgqmf14iXBTwS25rzKGphJppcZs4/view?usp=sharing
// 3: https://drive.google.com/file/d/1B0xlvXhssyTIM0jOLVrkkBWb9fZvtCu2/view?usp=sharing

// 4: https://drive.google.com/file/d/1c51KfZqyIEIHYXEu6WnOMulnZ5U4cJHa/view?usp=sharing
// 5: https://drive.google.com/file/d/1RQM3meA1csgiPwIowwgz1bqVBfZFDBsp/view?usp=sharing
// 6: https://drive.google.com/file/d/12JPskQ5xeu8jIWFcgQOw6Gal682knQyF/view?usp=sharing

// 7: https://drive.google.com/file/d/1Q_z7GMinGYnMW5Adv8lxNM2TgYF20_ih/view?usp=sharing
// 8: https://drive.google.com/file/d/1dtO-zPFdB8WsrsRWqWG1g9TOQ31Q_zEL/view?usp=sharing
// 9: https://drive.google.com/file/d/1JrzXdVsQny1V9onl1rmJc_Q83o4WScHI/view?usp=sharing

// 10: https://drive.google.com/file/d/1J9eMjm1CyoqzBIsSzrurCSb6t3eB_f8z/view?usp=sharing

var url_list = [

  "https://drive.google.com/file/d/16s4r5rtodqSpB2VvIerFl5F7DMOK_3Qo/view?usp=sharing",
  "https://drive.google.com/file/d/15MEJVgqmf14iXBTwS25rzKGphJppcZs4/view?usp=sharing",
  "https://drive.google.com/file/d/1B0xlvXhssyTIM0jOLVrkkBWb9fZvtCu2/view?usp=sharing",

  "https://drive.google.com/file/d/1c51KfZqyIEIHYXEu6WnOMulnZ5U4cJHa/view?usp=sharing",
  "https://drive.google.com/file/d/1RQM3meA1csgiPwIowwgz1bqVBfZFDBsp/view?usp=sharing",
  "https://drive.google.com/file/d/12JPskQ5xeu8jIWFcgQOw6Gal682knQyF/view?usp=sharing",

  "https://drive.google.com/file/d/1Q_z7GMinGYnMW5Adv8lxNM2TgYF20_ih/view?usp=sharin",
  "https://drive.google.com/file/d/1dtO-zPFdB8WsrsRWqWG1g9TOQ31Q_zEL/view?usp=sharing",
  "https://drive.google.com/file/d/1JrzXdVsQny1V9onl1rmJc_Q83o4WScHI/view?usp=sharing",

  "https://drive.google.com/file/d/1J9eMjm1CyoqzBIsSzrurCSb6t3eB_f8z/view?usp=sharing"
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
    await async_update_random_snippetVideoLinks( new_randomIndizies )


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

async function async_update_random_snippetVideoLinks( updateRandomIndizies ) {

  // ⚠️ to from json file:
  // mit den indizies aus der json lesen und daraus die Daten nehmen
  // Extra Step 1 / 2

  // console.log("🪛|async_update_random_snippetVideoLinks()")

  // console.log("numberOfRandomValues = " + numberOfRandomValues );
  // console.log("rangeLimit = " + rangeLimit );

  // test print
  // for( let i=0; i < get_randomValues.length; i++ ) {
  //   console.log("Array="+ i + ": Random = " + get_randomValues[i])
  // }


  /* --------------------------------------------------------- */
  /* Step 1
  /* > Update Snippet Videos Links by using
  /* > Random Indizies
  /* --------------------------------------------------------- */

  var new_index = "";

  for( let i=0; i < updateRandomIndizies.length; i++ ) {

    // update new index
    new_index = updateRandomIndizies[i];

    // update img
    await async_update_src_from_queryElement( imgs_of_sport_video_snippets[i], img_list[ new_index ] );

    // update link
    await async_update_href_from_queryElement( links_of_sport_video_snippets[i], url_list[ new_index ] )

  }

  return new Promise(resolve => {
    resolve( );
  })

}
