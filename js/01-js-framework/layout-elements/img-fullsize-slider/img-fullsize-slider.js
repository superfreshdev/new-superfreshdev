console.log("🟨 img-fullsize-slider.js")



/* ---------------------------------------------------------------------- */
/* Dom Elements
/* ---------------------------------------------------------------------- */

  // update - big img
  var imgBigFullsizeSlider = document.getElementById("js-big-img-fullsize-slider");

  // click items - mini imgs
  var mini_img_clickItems = document.querySelectorAll("#js-mini-img-list-of-img-fullsize-slider > img");
  console.log("↗️ mini_img_clickItems(lenght) = " + mini_img_clickItems.length )



/* ---------------------------------------------------------------------- */
/* Async | Update | Img Fullsize Slider
/* ---------------------------------------------------------------------- */

// async_update_imgFullsizeSlider( strJsonFile, optClickedIndex )

/*
    Overview:

    1. Try to get json file
    2. Try to read json file

    3. Test Prints from json file

    4. Prepare Data from json file

    5. Update Big Img

    6. Create mini img-tags from json file
    7. Add Click Events on mini img-tags

*/

async function async_show_imgFullsizeSlider_with( strJsonFile, optionalClickIndex ) {

  /* reminder:
     with optionalClickIndex we can define which img should show at first time */

  /* ---------------------------------------------------------- */
  /* Open & Read Json File
  /* ---------------------------------------------------------- */
  try {

    /* ---------------------------------------------------------- */
    /* Step 1 |
    /* > Try to Get Json File
    /* ---------------------------------------------------------- */

      // try to get json file, if dont work -> catch block , {mode: "no-cors"}
      const response = await fetch( strJsonFile, {mode: "no-cors"} );

      // if not ok
      if( !response.ok ) {
          console.log("🔴: Can't get JSON-File | " + response.status )
          // return false;
      } else {
        console.log("💚: Json File found | " + response.status )
      }

    /* ---------------------------------------------------------- */
    /* Step 2
    /* > Try Read Json File
    /* ---------------------------------------------------------- */

      // try to read json file, if dont work -> catch block
      const data = await response.json();

    /* ---------------------------------------------------------- */
    /* Step 3
    /* > Testing Prints
    /* ---------------------------------------------------------- */

      console.log("JsonFile:" + strJsonFile );
      console.log("optionalClickIndex:" + optionalClickIndex);

      /* ------------------------------------------- */
      // Get Data from JSON File
      /* ------------------------------------------- */

      // get | default img path
      var default_imgPath = data.defaults.imgPathBegin;
      console.log("default_imgPath:" + default_imgPath);

      // get | default "big" img path
      var default_imgPath_big = default_imgPath + data.defaults.imgPathBig;
      console.log("default_imgPath_big:" + default_imgPath_big);

      // get | default "small" img path
      var default_imgPath_small = default_imgPath + data.defaults.imgPathSmall;
      console.log("default_imgPath_small:" + default_imgPath_small);

    /* ---------------------------------------------------------- */
    /* Step 4
    /* > Prepare Data from Json File to Vars
    /* ---------------------------------------------------------- */

      /* -------------------------------------------- */
      /* Prepare | Big Img
      /* -------------------------------------------- */

      var big_img_names = [];

      // get all big img names
      for( let i=0; i < data.imgBig.length; i++ ) {

        big_img_names.push( data.imgBig[i] )

      }

      console.log("big=" + big_img_names.length )

      /* -------------------------------------------- */
      /* Prepare | Mini Imgs
      /* -------------------------------------------- */

      var mini_img_names = [];

      // get all small img names
      for( let i=0; i < data.imgSmall.length; i++ ) {

        mini_img_names.push( data.imgSmall[i] )

      }

      console.log("small=" + mini_img_names.length )

   /* ---------------------------------------------------------- */
  /* Step 5
  /* > Create Big Img Src
  /* ---------------------------------------------------------- */

    // ⚠️ check if optionalClickedIndex a postive number 0 -> ...

    var big_img_srcPath = default_imgPath_big + big_img_names[0];

    console.log("XXXX = " +  big_img_srcPath )
    // Use Default Index 0 or "optionalClickedIndex"

    await async_update_src_from_element( imgBigFullsizeSlider, big_img_srcPath )


  /* ---------------------------------------------------------- */
  /* Step 6
  /* > Create img Elements of "mini imgs"
  /* > Create ClickEvents to "mini imgs"
  /* ---------------------------------------------------------- */

      /* -------------------------------------------------- */
      /* Create img Elements
      /* -------------------------------------------------- */

      // var mini_img_clickItems = [];

      /* -------------------------------------------------- */
      /* Create Click Events
      /* -------------------------------------------------- */

      var big_imgPath_update = "";

      for( let i=0; i < mini_img_clickItems.length; i++ ) {


        mini_img_clickItems[i].addEventListener("click", async () => {

          // window.alert("🖼️ Change Img = " + i )

          // Update Img Src
          big_imgPath_update =  default_imgPath_big + big_img_names[i];
          await async_update_src_from_element( imgBigFullsizeSlider, big_imgPath_update )


        });


      }






  } catch (error) {

    console.log("🔴: Can't [get/read] JSON-File correctly:" + error )

  }


  return new Promise(resolve => {
    resolve();
  })


}
