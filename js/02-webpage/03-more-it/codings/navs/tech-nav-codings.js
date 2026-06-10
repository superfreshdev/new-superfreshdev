// console.log("🟨 tech-nav-codings.js")


/* -------------------------------------------------------------------------- */
/* 🏗️ | Dom Elements
/* -------------------------------------------------------------------------- */

 // Radios - Techs
 var radiosTechNavCodings = document.querySelectorAll( "input[name='name-radio-nav-codings-tech']" );

 // Coding Header Container
 var headerCodingsContainer = document.getElementById("header-coding-category-container");

/* -------------------------------------------------------------------------- */
/* 🔩 | Variables
/* -------------------------------------------------------------------------- */

  // Json Data - Header Tech
  var dataFileHeaderTech = "data/json/more-it/codings/headers/header-techs.json";


/* -------------------------------------------------------------------------- */
/* 🎉 Event
/* > Radio Change Listener - Tech Nav
/* > * Update - Coding Header ( Java, Spring Boot, ... )
/* -------------------------------------------------------------------------- */

  for( let i=0; i < radiosTechNavCodings.length; i++ ) {

    radiosTechNavCodings[i].addEventListener( "change", async() => {

    /* ---------------------------------------------------------------------- */
    /* Step 1/1
    /* > Update | Coding Header Container - Tech Nav
    /* ---------------------------------------------------------------------- */

      var checkedIndex = i;
      // console.log("⭐ checkedIndex = " + checkedIndex )

      await updateCodingHeader( checkedIndex,
                                dataFileHeaderTech,
                                headerCodingsContainer )

    })

  }
