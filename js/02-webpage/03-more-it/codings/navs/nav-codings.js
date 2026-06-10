// console.log("🟨 nav-codings.js")


/* -------------------------------------------------------------------------- */
/* 🏗️ | Dom Elements
/* -------------------------------------------------------------------------- */

 // Radios - nav codings
 var radiosNavCodings = document.querySelectorAll( "input[name='name-radio-nav-codings']" );

 // Coding Header Container
 var headerCodingsContainer = document.getElementById("header-coding-category-container");


/* -------------------------------------------------------------------------- */
/* 🔩 | Variables
/* -------------------------------------------------------------------------- */

  // Json Data - Header Tech
  var dataFileHeaderTech = "data/json/more-it/codings/headers/header-techs.json";

  // Json Data - Header Algos
  var dataFileHeaderAlgos = "data/json/more-it/codings/headers/header-algos.json";

  // Json Data - Header Leetcode
  var dataFileHeaderLeetcode = "data/json/more-it/codings/headers/header-leetcode.json";

  // Json Data - Header Challenges
  var dataFileHeaderChallenges = "data/json/more-it/codings/headers/header-challenges.json";


/* -------------------------------------------------------------------------- */
/* 🔶 Help | Async Function
/* > Apply Visibility - Coding Header Visibility ( show / unshown )
/* -------------------------------------------------------------------------- */

  async function applyVisibilityCodingHeader( radios, header ) {

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
/* 🔶 Help | Async Function
/* > Handle Update - Coding Header
/* -------------------------------------------------------------------------- */

  async function handleUpdateCodingHeader ( radiosNavCodings ) {


      var checkedIndex = await async_get_checked_radioIndex( radiosNavCodings )

      /* Update Coding Header Cases:
      /* 0: Tech - Sub Categories - Java, Spring Boot, ...
      /* 1: Algos
      /* 2: Leetcode
      /* 3: Challenges */

      switch( checkedIndex ) {

        /* -------------------------------------------------- */
        /* Update | Coding Header - Tech Sub Category
        /* -------------------------------------------------- */
        case 0:

          // window.alert("🎉 - 0 - Update - Coding Header" )
          var radiosTech = document.querySelectorAll( "input[name='name-radio-nav-codings-tech']" );
          var checkedIndex = await async_get_checked_radioIndex( radiosTech )
          // console.log("checkedIndex == " + checkedIndex )

          await updateCodingHeader( checkedIndex, dataFileHeaderTech, headerCodingsContainer )

          break;

        /* -------------------------------------------------- */
        /* Update | Coding Header - Algos
        /* -------------------------------------------------- */
        case 1:

           // 0 - we only have one data header item
          await updateCodingHeader( 0, dataFileHeaderAlgos, headerCodingsContainer )

          break;

        /* -------------------------------------------------- */
        /* Update | Coding Header - Leetcode
        /* -------------------------------------------------- */
        case 2:

          // 0 - we only have one data header item
          await updateCodingHeader( 0, dataFileHeaderLeetcode, headerCodingsContainer )

          break;

        /* -------------------------------------------------- */
        /* Update | Coding Header - Challenges
        /* -------------------------------------------------- */
        case 3:

          // 0 - we only have one data header item
          await updateCodingHeader( 0, dataFileHeaderChallenges, headerCodingsContainer )

          break;

        default:
          return;

      }

    return new Promise(resolve => {
        resolve( );
      })

  }

/* -------------------------------------------------------------------------- */
/* 🎉 Event
/* > DomContentLoaded Listener ( first content load )
/* > * Toggle - Header Coding Container ( all )
/* > * Update - Coding Header ( Algos, Leetcode, Challenges )
/* -------------------------------------------------------------------------- */

  document.addEventListener( "DOMContentLoaded", async ()=> {

    /* ------------------------------------------------------ */
    /* Step 1/1:
    /* > Apply Coding Header - Visibility ( show / unshown )
    /* > by finding checked index
    /* ------------------------------------------------------ */

      await applyVisibilityCodingHeader( radiosNavCodings,
                                         headerCodingsContainer )

    /* ------------------------------------------------------ */
    /* Step 2/2:
    /* > Handle Update Coding Header by Checked Index
    /*
    /* Checked Indizies:
    /* 0 = Tech = go deeper in nav
    /* 1 = Algos = Update Coding Header
    /* 2 = Leetcode = Update Coding Header
    /* 3 = Challenges = Update Coding Header
    /* otherwise ids will be ignorred
    /* ------------------------------------------------------ */

      await handleUpdateCodingHeader( radiosNavCodings )


  })


/* -------------------------------------------------------------------------- */
/* 🎉 Event
/* > Radio Change Listener - Tech, Algos, Leetcode, Challenges, Unshown
/* > * Toggle - Header Coding Container ( all )
/* > * Update - Coding Header ( Algos, Leetcode, Challenges )
/* -------------------------------------------------------------------------- */

  for( let i=0; i < radiosNavCodings.length; i++ ) {

    radiosNavCodings[i].addEventListener( "change", async ()=> {

      window.alert("Tab Switching = " + i)

      /* ------------------------------------------------------ */
      /* Step 1/1:
      /* > Apply Coding Header - Visibility ( show / unshown )
      /* ------------------------------------------------------ */

        await applyVisibilityCodingHeader( radiosNavCodings,
                                          headerCodingsContainer )

      /* ------------------------------------------------------ */
      /* Step 2/2:
      /* > Handle Update Coding Header by Checked Index
      /*
      /* Checked Indizies:
      /* 0 = Tech = go deeper in nav
      /* 1 = Algos = Update Coding Header
      /* 2 = Leetcode = Update Coding Header
      /* 3 = Challenges = Update Coding Header
      /* otherwise ids will be ignorred
      /* ------------------------------------------------------ */

        await handleUpdateCodingHeader( radiosNavCodings )

    })

  }
