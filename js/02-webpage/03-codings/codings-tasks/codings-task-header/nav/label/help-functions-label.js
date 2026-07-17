/* -------------------------------------------------------------------- */
// console.log("🟨 help-functions-label.js")
/* -------------------------------------------------------------------- */

  /* --------------------------------------------------------- */
  /* 🔩 Help Function
  /* 🟩 Get Label Status Style from Tasks
  /* --------------------------------------------------------- */

    async function asyncGetLabelStatusStyleFromTasks( dataLabelStatusStyles, dataTasks ) {

      // console.log("dataLabelStatusStyles: " + dataLabelStatusStyles )
      // console.log("dataTasks(length): " + dataTasks.length )

      var labelStatusStyle = "";
      var statusTask = "";

      var counterInProgress = 0;
      var counterLater = 0;
      var counterDone = 0;

      // Count Status Arts
      for( let i=0; i < dataTasks.length; i++ ) {

          statusTask = dataTasks[i].header.status.cssClassSticker;
          // console.log(i + ": " + statusTask )

          // count status tasks
          switch( statusTask ) {

            case "codings-task-card-status-sticker-in-progress":
              counterInProgress++;
              break;

            case "codings-task-card-status-sticker-later":
              counterLater++;
              break;

            case "codings-task-card-status-sticker-done":
              counterDone++;
              break;

          }


      }

      // Get Status Style
      if( counterInProgress == 0 && counterLater == 0 && counterDone == 0 ) {

        // not correct json status found
        // Default: Get Status Style - Later
        labelStatusStyle = dataLabelStatusStyles.later;
        // console.log("➡️🟪 labelStatusStyle(0-0-0): " + labelStatusStyle.cssClass )

      } else {

        if( counterInProgress > 0 ) {

          // Get Status Style - In Progress
          labelStatusStyle = dataLabelStatusStyles.inProgress;
          // console.log("➡️🟨 labelStatusStyle(inProgress): " + labelStatusStyle.cssClass )

        }
        else {

          if( counterLater > 0 ) {

            // Get Status Style - Later
            labelStatusStyle = dataLabelStatusStyles.later;
            // console.log("➡️🟪 labelStatusStyle(later): " + labelStatusStyle.cssClass )

          } else {

            // Get Status Style - Done
            labelStatusStyle = dataLabelStatusStyles.done;
            // console.log("➡️🟩 labelStatusStyle(done): " + labelStatusStyle.cssClass )

          }

        }

      }

      // Reset Counters
      counterInProgress = 0;
      counterLater = 0;
      counterDone = 0;

      return new Promise(resolve => {
        resolve( labelStatusStyle );
      })

    }

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
