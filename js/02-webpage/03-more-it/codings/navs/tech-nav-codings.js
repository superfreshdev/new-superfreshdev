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
    /* Step 1/2
    /* > Update | Coding Header Container - Tech Nav
    /* ---------------------------------------------------------------------- */

      var checkedIndex = i;
      // console.log("⭐ checkedIndex = " + checkedIndex )

      await updateCodingHeader( checkedIndex,
                                dataFileHeaderTech,
                                headerCodingsContainer )

    /* ---------------------------------------------------------------------- */
    /* Step 2/2
    /* > Update | Masonry Items
    /* ---------------------------------------------------------------------- */

      switch( i ) {

        /* ---------------------------------------------------------- */
        /* Java - Task Categories
        /* ---------------------------------------------------------- */
        case 0:

          // window.alert("➡️ Create | Masonry Items = Java")

            // var tech_masonry_id_containers = [

            //   "#masonry-tech-java-container",
            //   "#masonry-tech-spring-boot-container"

            // ]

          var addPointMasonryJavaContainer = document.getElementById("masonry-tech-java-container");
          var jsonPathJavaCodingTaskCategories = "data/json/more-it/codings/masonries/tech/java-task-categories.json";

          await createCodingMasonryItems( jsonPathJavaCodingTaskCategories,
                                          addPointMasonryJavaContainer )

          break;

        /* ---------------------------------------------------------- */
        /* Spring Boot - Task Categories
        /* ---------------------------------------------------------- */
        case 1:

          // window.alert("➡️ Create | Masonry Items = Spring Boot ")

          var addPointMasonryJavaContainer = document.getElementById("masonry-tech-spring-boot-container");
          var jsonPathJavaCodingTaskCategories = "data/json/more-it/codings/masonries/tech/spring-boot-task-categories.json";

          await createCodingMasonryItems( jsonPathJavaCodingTaskCategories,
                                          addPointMasonryJavaContainer )

          break;

        /* ---------------------------------------------------------- */
        /* Microservice - Task Categories
        /* ---------------------------------------------------------- */
        case 2:
          break

        default:
          return;

      }




    })

  }
