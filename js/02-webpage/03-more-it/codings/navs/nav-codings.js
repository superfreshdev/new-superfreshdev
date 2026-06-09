// console.log("🟨 nav-codings.js")


/* -------------------------------------------------------------------------- */
/* Dom Elements
/* -------------------------------------------------------------------------- */

 // radios - nav codings
 var radiosNavCodings = document.querySelectorAll( "input[name='name-radio-nav-codings']" );
 //  console.log("Radios_NavCodings= " + radiosNavCodings.length)

 // radios - tech nav codings
 var radios_techNavCodings = document.querySelectorAll( "input[name='name-radio-nav-codings-tech']" );
 console.log("radios_techNavCodings= " + radios_techNavCodings.length)

 // showing header container
 var headerCodingsContainer = document.getElementById("header-coding-category-container");

/* -------------------------------------------------------------------------- */
/* Variables
/* -------------------------------------------------------------------------- */

  // Json Data - Header Tech
  var dataFile_headerTech = "data/json/more-it/codings/header-codings/header-techs.json";

  // Json Data - Header Algos
  var dataFile_headerAlgos = "data/json/more-it/codings/header-codings/header-algos.json";

  // Json Data - Header Leetcode
  var dataFile_headerLeetcode = "data/json/more-it/codings/header-codings/header-leetcodes.json";


/* -------------------------------------------------------------------------- */
/* Toggle Async Function
/* > Toggle - Show/Hide - Coding Header
/* -------------------------------------------------------------------------- */

  async function async_toggle_codingHeader( radios, header ) {

    // states
    var cssStyle_show = "display:flex;"
    var cssTyle_unshown = "display:none;"

    /* --------------------------------------------------------- */
    // Step 1 - Get Checked Index
    /* --------------------------------------------------------- */

      var checkedIndex = await async_get_checked_radioIndex( radios )

    /* --------------------------------------------------------- */
    // Step 2 - Get Last Index ( unshwon index )
    /* --------------------------------------------------------- */

      var unshownIndex = radios.length - 1;

    /* --------------------------------------------------------- */
    // Step 3 - Toggle Coding Header by checked index
    /* --------------------------------------------------------- */

      // console.log("checkedIndex= " + checkedIndex)

      if( checkedIndex != unshownIndex &&
          checkedIndex != null &&
          checkedIndex != undefined )
      {

          // Show Header Coding Container
          console.log("🟩 Show - header ")
          await async_update_cssStyle_to_element( cssStyle_show,
                                                  header )

      } else {

        // Unshow Mode - Unshown Header Coding Container
        console.log("❌ Unshow - header ")
        await async_update_cssStyle_to_element( cssTyle_unshown,
                                                header )

      }

  }

/* -------------------------------------------------------------------------- */
/* Event
/* > DomContentLoaded Listener ( first content load )
/* > Toggle - Header Coding Container
/* > Update - Coding Header
/* -------------------------------------------------------------------------- */

  document.addEventListener( "DOMContentLoaded", async ()=> {

    /* ------------------------------------------------------ */
    /* Step 1/1:
    /* > Toggle Coding Header by Checked Index
    /* ------------------------------------------------------ */

      await async_toggle_codingHeader( radiosNavCodings,
                                       headerCodingsContainer )

    /* ------------------------------------------------------ */
    /* Step 2/2:
    /* > Update Coding Header by Checked Index
    /* ------------------------------------------------------ */

      var checkedIndex = await async_get_checked_radioIndex( radiosNavCodings )

      // Only 1=Algos | 2=Leetcode - Data Update - Coding Header
      switch( checkedIndex ) {

        // Data Update - Header Coding Algos
        case 1:
           // 0 - we only have one data item
          async_update_codingHeader( 0, dataFile_headerAlgos, headerCodingsContainer )
          break;

        // Data Update - Header Coding Leetcode
        case 2:
          // 0 - we only have one data item
          async_update_codingHeader( 0, dataFile_headerLeetcode, headerCodingsContainer )
          break;

        default:
          return;

      }

  })

/* -------------------------------------------------------------------------- */
/* Event
/* > Radio Change Listener
/* > Radios: tech, algos, leetcode, unshown
/> > Toggle - Header Coding Container
/* -------------------------------------------------------------------------- */

  for( let i=0; i < radiosNavCodings.length; i++ ) {

    radiosNavCodings[i].addEventListener( "change", async ()=> {

      window.alert("Toggle coding Header = " + i)

      // Toggle - Coding Header Container
      await async_toggle_codingHeader( radiosNavCodings,
                                       headerCodingsContainer )

    })

  }

/* -------------------------------------------------------------------------- */
/* Event
/* > Radio Change Listener - Tech
/* > Update - Coding Header
/> > Create - Masonry Container
/* -------------------------------------------------------------------------- */

  var radioNavCodingTech = document.getElementById("radio-nav-codings-tech")

  radioNavCodingTech.addEventListener( "change", async() => {

      window.alert("Tab = Tech")

    /* ---------------------------------------------------------------------- */
    /* Step 1/2
    /* > Update - Coding Header Container - Tech
    /* ---------------------------------------------------------------------- */

      // Look which index checked otherwise get index 0
      var checkedIndex = await async_get_checked_radioIndex( radios_techNavCodings )
      console.log("😀 checkedIndex = " + checkedIndex )

      if( checkedIndex != null &&
          checkedIndex != undefined )
      {
         await async_update_codingHeader( checkedIndex,
                                          dataFile_headerTech,
                                          headerCodingsContainer )
      } else {

        // Unshown Coding Header Container
        await async_toggle_codingHeader( radios_techNavCodings, headerCodingsContainer )

      }



    /* ---------------------------------------------------------------------- */
    /* Step 2/2
    /* > Create - Masonry Container for Algos
    /* ---------------------------------------------------------------------- */

    // window.alert("🛠️| Create Masonry Container - Algos"  )


  })

/* -------------------------------------------------------------------------- */
/* Event
/* > Radio Change Listener - Tech
/* > Update - Coding Header
/> > Create - Masonry Container
/* -------------------------------------------------------------------------- */

  for( let i=0; i < radios_techNavCodings.length; i++ ) {

    radios_techNavCodings[i].addEventListener( "change", async() => {

    /* ---------------------------------------------------------------------- */
    /* Step 1/1
    /* > Update - Coding Header Container - Tech by Ids
    /* ---------------------------------------------------------------------- */

      var checkedIndex = i;
      console.log("⭐ checkedIndex = " + checkedIndex )

      await async_update_codingHeader( checkedIndex,
                                       dataFile_headerTech,
                                       headerCodingsContainer )

    })

  }


/* -------------------------------------------------------------------------- */
/* Event
/* > Radio Change Listener - Algo
/* > Update - Coding Header
/> > Create - Masonry Container
/* -------------------------------------------------------------------------- */

  var radioNavCodingAlgos = document.getElementById("radio-nav-codings-algos")

  radioNavCodingAlgos.addEventListener( "change", async() => {

    /* ---------------------------------------------------------------------- */
    /* Step 1/2
    /* > Update - Coding Header Container - Algos
    /* ---------------------------------------------------------------------- */

      await async_update_codingHeader( 0,
                                       dataFile_headerAlgos,
                                       headerCodingsContainer )


    /* ---------------------------------------------------------------------- */
    /* Step 2/2
    /* > Create - Masonry Container for Algos
    /* ---------------------------------------------------------------------- */

    // window.alert("🛠️| Create Masonry Container - Algos"  )


  })

/* -------------------------------------------------------------------------- */
/* Event
/* > Radio Change Listener - Leetcode
/* > Update - Coding Header
/> > Create - Masonry Container
/* -------------------------------------------------------------------------- */

  var radioNavCodingLeetcode = document.getElementById("radio-nav-codings-leetcode")

  radioNavCodingLeetcode.addEventListener( "change", async() => {

    /* ---------------------------------------------------------------------- */
    /* Step 1/2
    /* > Update - Coding Header Container for Leetcode
    /* ---------------------------------------------------------------------- */

      await async_update_codingHeader( 0,
                                       dataFile_headerLeetcode,
                                       headerCodingsContainer )

    /* ---------------------------------------------------------------------- */
    /* Step 2/2
    /* > Create - Masonry Container for Leetcode
    /* ---------------------------------------------------------------------- */

    // window.alert("🛠️| Create Masonry Container - Leetcode"  )

  })

/* -------------------------------------------------------------------------- */
/* Event
/* > Radio Change Listener - Unshown
/* > Update - Coding Header
/> > Destroy - Masonry Container
/* -------------------------------------------------------------------------- */

  var radioNavCodingUnshown = document.getElementById("radio-nav-codings-unshown")

  radioNavCodingUnshown.addEventListener( "change", async() => {

    /* ---------------------------------------------------------------------- */
    /* Step 1/1
    /* > Destroy last Masonry Container to restart new
    /* ---------------------------------------------------------------------- */

    // window.alert("❌| Detroy Masonry Container - Unshwon"  )




  })
