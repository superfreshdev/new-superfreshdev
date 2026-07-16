/* -------------------------------------------------------------------- */
// console.log("🟨 help-functions-codings-task-header.js")
/* -------------------------------------------------------------------- */
/* > Help Functions - Codings Task Header
/* -------------------------------------------------------------------- */


  /* --------------------------------------------------------- */
  /* 🔩 Help Function
  /* 🟩 Get Finished Task Number by Category
  /* --------------------------------------------------------- */

    async function asyncGetFinishedTasksNumber( dataTasks ) {

      var finishedTasks = 0;

      // only count if status done found
      for( let i=0; i < dataTasks.length; i++ ) {

        // counter found
        if( dataTasks[i].header.status.cssClassSticker == "codings-task-card-status-sticker-done") {

          finishedTasks++;

        }

      }

      return new Promise(resolve => {
        resolve( finishedTasks );
      })

    }

  /* --------------------------------------------------------- */
  /* 🔩 Help Function
  /* 🟩 Get Max Task Numbers by Category
  /* --------------------------------------------------------- */

    async function asyncGetMaxTasksNumber( dataTasks ) {

      var maxTaskNr = dataTasks.length;

      return new Promise(resolve => {
        resolve( maxTaskNr );
      })

    }

  /* --------------------------------------------------------- */
  /* 🔩 Help Function
  /* ➡️🟥 Create Codings Task Header Nav Label
  /* --------------------------------------------------------- */

    async function asyncCreateCodingsTaskHeaderNavLabel( idString, dataLabel, finishedNr, maxNr) {

      console.log("-------------")
      console.log("⚒️ Build - Label")
      console.log("idString: " + idString);

      // var labels
      console.log("dataLabel: " + dataLabel);
      // 🟩
      var labelCssClass = dataLabel.cssClass;

      // 🟥
      var labelStatusIconFilename = dataLabel.statusIconFilename;
      console.log("dataLabel: " + labelStatusIconFilename);

      // 🟥
      var labelStatusIconCssClass = dataLabel.cssClassStatusIcon;
      console.log("dataLabel: " + labelStatusIconCssClass);

      // 🟥
      var labelText = dataLabel.categoryText;
      console.log("dataLabel: " + labelText);

      // 🟥
      var labelCounterBoxCssClass = dataLabel.cssClassCounters;
      console.log("dataLabel: " + labelCounterBoxCssClass);

      console.log("finishedNr: " + finishedNr);
      console.log("maxNr: " + maxNr);


      /* ------------------------------------------------------------------ */
      /* ➡️🟥 Step 1/1:
      /* > Create Label
      /* ------------------------------------------------------------------ */

        var newLabel = "";
        newLabel = await asyncCreateLabel( idString, labelCssClass )

        /* ------------------------------------------------------- */
        /* ➡️🟥 Step 1.1
        / > Create Div - Status
        /* ------------------------------------------------------- */



        /* ------------------------------------------------------- */
        /* 🟥 Step 1.2
        / > Create Div - Text & Counters
        /* ------------------------------------------------------- */


      return new Promise(resolve => {
        resolve( newLabel );
      })

    }
