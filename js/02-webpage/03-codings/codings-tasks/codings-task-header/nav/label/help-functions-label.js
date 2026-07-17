/* -------------------------------------------------------------------- */
// console.log("🟨 help-functions-label.js")
/* -------------------------------------------------------------------- */

  /* --------------------------------------------------------- */
  /* 🔩 Help Function
  /* ➡️🟥 Define Data Status fo
  /* --------------------------------------------------------- */

    async function asyncGetStatusDataFromCodingsTaskHeaderNavLabels( dataNav, dataTaskCategories ) {

      console.log("🔩 Find all Correct Status for Labels: ")
      console.log("dataNav: " + dataNav );
      console.log("dataTaskCategories: " + dataTaskCategories  );

      // Final Status Datas
      var finalStatusDatas = [];

      /* ------------------------------------------------------------------------------------------ */
      /* ➡️🟥 Step 1/1:
      /* > Decide Data Status by status css class ( in progress, later, done )
      /* ------------------------------------------------------------------------------------------ */

        // Data Json & Var
        var maxTasksCategories = dataTaskCategories.length;

        var dataTasks = "";
        var maxTasks = "";

        // tmp status for making decisions
        var statusCssClass = "";

        // counters to decide
        var counterInProgress = 0;
        var counterLater = 0;
        var counterDone = 0;

        // datas of status label arts
        var dataStatusLabelArts = dataNav.labels.status;


        // Run each Category and check tasks
        for( let i=0; i < maxTasksCategories; i++ ) {

          dataTasks = dataTaskCategories[i].tasks;
          maxTasks = dataTasks.length;

          console.log("🌳🌳 TaskCategory = " + (i+1))

          // run tasks each categories
          for( let k=0; k < maxTasks; k++ ) {

            statusCssClasses = dataTasks[k].header.status.cssClassSticker;

            /* Check Defintions:

              In Progress: Minimum 1
              Later: Minimum 1 & Not Any in progress
              Done: Only if all tasks = done

            */
            switch( statusCssClasses ) {

              case "codings-task-card-status-sticker-in-progress":
                counterInProgress++;
                break;

              case "codings-task-card-status-sticker-later":
                counterLater++;
                break;

              case "codings-task-card-status-sticker-done":
                counterDone++;
                break;

              default:
                return;
            }

          }

          // set status data
          console.log("➡️ Return Final Status Data: ")
          if( counterInProgress > 0 ) {

            console.log("🌳 Status Data: In Progress")
            finalStatusDatas.push( dataStatusLabelArts.inProgress )

          } else {

            if( counterDone != maxTasks ) {

              console.log("🌳 Status Data: Later")
              finalStatusDatas.push( dataStatusLabelArts.later )

            } else {

              console.log("🌳 Status Data: Done")
              finalStatusDatas.push( dataStatusLabelArts.done )

            }


          }

          console.log("counterInProgress: " + counterInProgress)
          console.log("counterLater: " + counterLater)
          console.log("counterDone: " + counterDone)
          console.log("---------------------")

          // Reset Status for next Category
          counterInProgress = 0;
          counterLater = 0;
          counterDone = 0;


        }


        console.log("finalStatusData(l): " + finalStatusDatas.length )



      return new Promise(resolve => {
        resolve( finalStatusDatas );
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
