// console.log("🟨 update-top-it-project-cards.js")


/* -------------------------------------------------------------------------- */
/* DOM Elements
/* -------------------------------------------------------------------------- */

// x3 top it project cards
var divTopItProjectCards = document.getElementsByClassName("about-top-it-project-card");
console.log("🔥Lenght = " + divTopItProjectCards.length)

/* -------------------------------------------------------------------------- */
/* Var
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/* Execute
/* > Test
/* -------------------------------------------------------------------------- */

  var jsonFile_topItProjects = "data/json/about/top-it-project-cards/data-top-it-project-cards.json";

  update_topItProjectCards( jsonFile_topItProjects )

/* -------------------------------------------------------------------------- */
/* Function
/* > Update Top IT Project Cards
/* -------------------------------------------------------------------------- */

async function update_topItProjectCards( jsonFile ) {

  /* ------------------------------------------------------ */
  /* > update process of all top it projects cards
  /* ------------------------------------------------------ */

    await update_topItProjectCard_by_json( jsonFile )

}

/* -------------------------------------------------------------------------- */
/* Function
/* > Update Top IT Project Card by Json
/* -------------------------------------------------------------------------- */

async function update_topItProjectCard_by_json( jsonFile ) {


  /* ------------------------------------------------------ */
  /* Step 1/2:
  /* > try & get json data object to work with it
  /* ------------------------------------------------------ */

    var data_topItProjects = await async_getJsonFile( jsonFile )
    console.log("🔥JSON:🔥= " + data_topItProjects)

    // Get Default Img Path
    var default_imgPath = data_topItProjects.defaults.imgPath;
    console.log("1. Default Path = " + default_imgPath)

  /* ------------------------------------------------------ */
  /* Step 2/2:
  /* > Update Routine for all top it project cards
  /* ------------------------------------------------------ */

    // Get Array of Data from top it project cards
    var datas = data_topItProjects.dataTopItProjectCards;
    console.log("datas= " + datas.length )

    // Update Routine
    for( let i=0; i < datas.length; i++ ) {


      /* ------------------------------------------------------- */
      /* 🟩 Step 2.1:
      /* > Update Img Src
      /* ------------------------------------------------------- */

      console.log("➡️ Step 1:")

      // get img element
      var imgProject = divTopItProjectCards[i].querySelector(".content-container-top-it-project-card > img:nth-of-type(1)");
      var imgSrcProject = imgProject.getAttribute("src");

      // update img element
      var folderNameProject = datas[i].folderName;
      var fileNameProject = datas[i].imgProjectName;
      var imgFullPathProject = default_imgPath + folderNameProject + fileNameProject;

      // console.log("Update Img = " + imgFullPathProject)
      imgProject.setAttribute( "src", imgFullPathProject );

      // window.alert( imgSrcProject );


      /* ------------------------------------------------------- */
      /* ➡️🟥 Step 2.1:
      /* > Update Status
      /* ------------------------------------------------------- */

      console.log("➡️ Step 2:")

      /* ------------------------------------------------------- */
      /* 🟥Step 2.2:
      /* > Update Main - Header
      /* ------------------------------------------------------- */
      // 🟥console.log("➡️ Step 3:")

      /* ------------------------------------------------------- */
      /* 🟥Step 2.3:
      /* > Update Main - Main
      /* ------------------------------------------------------- */
      // console.log("➡️ Step 4:")

      /* ------------------------------------------------------- */
      /* 🟥Step 2.4:
      /* > Update Main - Footer
      /* ------------------------------------------------------- */
      // console.log("➡️ Step 5:")



    }


}
