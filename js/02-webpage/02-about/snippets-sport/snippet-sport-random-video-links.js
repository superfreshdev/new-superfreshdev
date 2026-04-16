// console.log("🟨 snippet-sport-random-video-links.js")


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
/* Click
/* ----------------------------------------------------------------- */

link_randomVideoLinks.addEventListener( "click",  async () => {

  // alert("snippet-click");

  // Update 3 Random Video Links in a Random Range of 1-10
  await async_update_random_snippetVideoLinks( 3, 10)

} )


/* ----------------------------------------------------------------- */
/* ...
/* ----------------------------------------------------------------- */

// update random snippet video links

// update img src

// update link url


/* ----------------------------------------------------------------- */
/* Async | Update Random Snippet Video Links
/* ----------------------------------------------------------------- */

async function async_update_random_snippetVideoLinks( numberOfRandomValues, rangeLimit ) {

  // console.log("🪛|async_update_random_snippetVideoLinks()")

  // console.log("numberOfRandomValues = " + numberOfRandomValues );
  // console.log("rangeLimit = " + rangeLimit );

  /* --------------------------------------------------------- */
  /* Step 1/2
  /* > Get x3 Random Values
  /* --------------------------------------------------------- */

  var get_randomValues = await async_get_randomNumbers_inRange( numberOfRandomValues, rangeLimit );

  // test print
  // for( let i=0; i < get_randomValues.length; i++ ) {
  //   console.log("Array="+ i + ": Random = " + get_randomValues[i])
  // }

  /* --------------------------------------------------------- */
  /* Step 1/2
  /* > Update Snippet Videos Links by Datas
  /* --------------------------------------------------------- */

  var use_randomValue = "";

  for( let i=0; i < get_randomValues.length; i++ ) {

    // reminder: -1 because we use array indexing
    use_randomValue = get_randomValues[i];
    use_randomValue = use_randomValue -1;

    // update img
    await async_update_src_from_queryElement( imgs_of_sport_video_snippets[i], img_list[ use_randomValue ] );

    // update link
    await async_update_href_from_queryElement( links_of_sport_video_snippets[i], url_list[ use_randomValue ] )

  }

  return new Promise(resolve => {
    resolve( );
  })

}
