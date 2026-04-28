// console.log("🟨 update-top-it-project-cards.js")


/* -------------------------------------------------------------------------- */
/* DOM Elements
/* -------------------------------------------------------------------------- */

// x3 top it project cards
var divTopItProjectCards = document.getElementsByClassName("about-top-it-project-card");
// console.log("🔥Lenght = " + divTopItProjectCards.length)

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
    // console.log("🔥JSON:🔥= " + data_topItProjects)

    // Get Default Img Path
    var default_imgPath = data_topItProjects.defaults.imgPath;
    // console.log("1. Default Path = " + default_imgPath)

    // Get default icon Status Path
    var default_iconStatusPath = data_topItProjects.defaults.iconStatusPath;

    // Get default icon header path
    var default_iconHeaderPath = data_topItProjects.defaults.iconHeaderPath;

  /* ------------------------------------------------------ */
  /* Step 2/2:
  /* > Update Routine for all top it project cards
  /* ------------------------------------------------------ */

    // Get Array of Data from top it project cards
    var datas = data_topItProjects.dataTopItProjectCards;
    // console.log("datas= " + datas.length )

    // Update Routine
    for( let i=0; i < datas.length; i++ ) {


      /* ------------------------------------------------------- */
      /* 🟩 Step 2.1:
      /* > Update Img Src
      /* ------------------------------------------------------- */

      // console.log("➡️ Step 1:")

      // get img element
      var imgProject = divTopItProjectCards[i].querySelector(".content-container-top-it-project-card > img:nth-of-type(1)");

      // update img element
      var folderNameProject = datas[i].folderName;
      var fileNameProject = datas[i].imgProjectName;
      var imgFullPathProject = default_imgPath + folderNameProject + fileNameProject;

      // console.log("Update Img = " + imgFullPathProject)
      imgProject.setAttribute( "src", imgFullPathProject );

      // window.alert( imgSrcProject );


      /* ------------------------------------------------------- */
      /* 🟩 Step 2.1:
      /* > Update Status
      /* ------------------------------------------------------- */

      // console.log("➡️ Step 2:")

      // get div status element
      var divStatus = divTopItProjectCards[i].querySelector(".status-container-about-top-it-project-card > div:nth-of-type(1)");

      // get status to create or not
      var statusShow = datas[i].status.statusShow;
      // console.log("statusShow = " + statusShow )

      if( statusShow === "true" ) {

        // update status from json
        // console.log("🟩 status update")

        /* ---------------------------------------------- */
        /* get data status
        /* ---------------------------------------------- */

          var dataStatus = datas[i].status;

           // get css class status
          var cssClassStatus = dataStatus.cssClassStatus;
          // console.log("cssClassStatus = " + cssClassStatus)

          // get icon src
          var iconStatusName = dataStatus.iconName;
          var iconFullPath_status = default_iconStatusPath + iconStatusName;
          // console.log("iconStatus = " + iconFullPath_status)

          // get css class icon
          var cssClassIconStatus = dataStatus.cssClassIcon;
          // console.log("cssClassIconStatus = " + cssClassIconStatus)

          // get text status
          var textStatus = dataStatus.statusTitle;
          // console.log("textStatus = " + textStatus)


        /* ---------------------------------------------- */
        /* update div status
        /* ---------------------------------------------- */

          // update div css class
          divStatus.setAttribute( "class", cssClassStatus )

          // update img src
          var imgIconStatus = divStatus.querySelector("img");
          imgIconStatus.setAttribute( "src", iconFullPath_status )

          // update img css class
          imgIconStatus.setAttribute( "class", cssClassIconStatus )

          // update text
          var divTextStatus = divStatus.querySelector("div");
          divTextStatus.innerText = textStatus;


      } else {

        // console.log("❌ no status update")

        // unshown div element
        divStatus.style.display = "none";

      }

      /* ------------------------------------------------------- */
      /* 🟩 Step 2.2:
      /* > Update Main - Header
      /* ------------------------------------------------------- */

        // console.log("➡️ Step 3:")

        // get header element
        var headerElement = divTopItProjectCards[i].querySelector(".content-top-it-project-card > main > header:nth-of-type(1)");

        /* ---------------------------------------------- */
        /* get data header
        /* ---------------------------------------------- */

          // get data headers
          var dataHeaders = datas[i].header;

          var iconFullPathHeaderDark = default_iconHeaderPath + dataHeaders.iconDarkPath;
          var iconFullPathHeaderLight = default_iconHeaderPath + dataHeaders.iconLightPath;
          // console.log("iconFull-dark = " + iconFullPathHeaderDark)
          // console.log("iconFull-light = " + iconFullPathHeaderLight)

          var textHeader = dataHeaders.title;

        /* ---------------------------------------------- */
        /* update header
        /* ---------------------------------------------- */

          // update img src dark
          var imgElementDark = headerElement.querySelector("img:nth-of-type(1)");
          imgElementDark.setAttribute("src", iconFullPathHeaderDark );

          // update img src light
          var imgElementLight = headerElement.querySelector("img:nth-of-type(2)");
          imgElementLight.setAttribute("src", iconFullPathHeaderLight );

          // update text header
          var divTextHeader = headerElement.querySelector("div:nth-of-type(1)");
          divTextHeader.innerText = textHeader;


      /* ------------------------------------------------------- */
      /* 🟩 Step 2.3:
      /* > Update Main - Main
      /* ------------------------------------------------------- */

        // console.log("➡️ Step 4:")

        // get main element
        var mainElement = divTopItProjectCards[i].querySelector(".content-top-it-project-card > main > main:nth-of-type(1)");

        // get data main
        var textMain = datas[i].mainText;

        // update text main
        mainElement.innerText = textMain;

      /* ------------------------------------------------------- */
      /* 🟩 Step 2.4:
      /* > Update Main - Footer
      /* ------------------------------------------------------- */

        // console.log("➡️ Step 5:")

        // get footer element
        var footerElement = divTopItProjectCards[i].querySelector(".content-top-it-project-card > main > footer:nth-of-type(1)");


        // get footer datas
        var dataFooter = datas[i].footer;
        var footerShow = dataFooter.footerShow;

        /* ---------------------------------------------------------- */
        /* update only if footer should be shown
        /* ---------------------------------------------------------- */
        if( footerShow === "true" ) {

          console.log("🟩 footer show")
          // show footer
          footerElement.style.display = "flex";

          /* ---------------------------------------------------------- */
          // check to show | zip und github container
          /* ---------------------------------------------------------- */
          var zipGithubShow = dataFooter.zipGitHubShow;

          if( zipGithubShow === "true" ) {

            // console.log(">> Create zipGithub Container")

            // show zip github
            var zipGithubContainer = footerElement.querySelector(".github-zip-container-about-top-it-project-card");
            zipGithubContainer.style.display = "flex";

            // update links
            var linkZipElement = zipGithubContainer.querySelector("a:nth-of-type(1)");
            var linkGithubElement = zipGithubContainer.querySelector("a:nth-of-type(2)");

              // update zip link
              var urlZip = dataFooter.zipLink;
              linkZipElement.setAttribute("href", urlZip);

              // update github link
              var urlGithub = dataFooter.githubLink;
              linkGithubElement.setAttribute("href", urlGithub);

          }

          /* ---------------------------------------------------------- */
          // check to show | details
          /* ---------------------------------------------------------- */

          // get status data
          var detailsShow = dataFooter.detailsShow;

          if( detailsShow === "true" ) {

            // console.log(">> Details Show")

            // get button details element
            var detailsButton = footerElement.querySelector(".button-sfd-medium:nth-of-type(1)");

            // show button details
            detailsButton.style.display = "flex";

          }

          /* ---------------------------------------------------------- */
          // check to show | status
          /* ---------------------------------------------------------- */

          // get status data
          var footerStatusShow = dataFooter.statusShow;

          if( footerStatusShow === "true" ) {

            // console.log("🔥footerStatusShow Show")

            // get status container
            var statusContainer = footerElement.querySelector(".status-links-about-top-it-project-card");

            // show status container
            statusContainer.style.display = "block";

          }


        } else {

          console.log("❌ footer unshown")

        }



    }


}
