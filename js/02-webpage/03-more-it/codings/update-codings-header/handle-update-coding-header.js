// console.log("🟨 handle-update-coding-header.js")


/* -------------------------------------------------------------------------- */
/* 🏗️ | Dom Elements
/* -------------------------------------------------------------------------- */

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
/* 🚀 Execute | Async Function
/* > Handle Update - Coding Header
/* -------------------------------------------------------------------------- */

  async function handleUpdateCodingHeader ( radiosNavCodings, radiosTechNavCodings ) {


    var checkedNavCodings = await async_get_checked_radioIndex( radiosNavCodings )
    var checkedTechCodings = "";

    /* Update Coding Header Cases:
    /* 0: Tech - Sub Categories - Java, Spring Boot, ...
    /* 1: Algos
    /* 2: Leetcode
    /* 3: Challenges */

    switch( checkedNavCodings ) {

      /* -------------------------------------------------- */
      /* Update | Coding Header - Tech Sub Categories
      /* -------------------------------------------------- */
      case 0:

        // window.alert("🎉 - 0 - Update - Coding Header" )
        checkedTechCodings = await async_get_checked_radioIndex( radiosTechNavCodings )
        // console.log("checkedIndex == " + checkedIndex )

        await updateCodingHeader( checkedTechCodings, dataFileHeaderTech, headerCodingsContainer )


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
