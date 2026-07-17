/* -------------------------------------------------------------------- */
// console.log("🟨 create-labels.js")
/* -------------------------------------------------------------------- */


  /* --------------------------------------------------------- */
  /*  ➡️🟥 Create Label | Codings Task Header Nav
  /* --------------------------------------------------------- */

    async function asyncCreateCodingsTaskHeaderNavLabel( iconPath, radioId, dataLabelContent,
                                                         labelCategory, dataTasks )
    {


      // Test Prints
      console.log("❇️🔩 Create New Label")
      // console.log("➡️ iconPath: " + iconPath )
      console.log("➡️ radioID: " + radioId )
      console.log("➡️ labelCategory : " + labelCategory )
      console.log("➡️ dataTasks : " +  dataTasks.length )
      console.log("--------")

      /* ---------------------------------------------------- */
      /* ➡️🟥 Step 1/4
      /* > Get Datas to Create Label
      /* ---------------------------------------------------- */

        var labelStatusStyles = dataLabelContent.status;
        var labelCounterBoxCssClass = dataLabelContent.counterBoxCssClass;

      /* ---------------------------------------------------- */
      /* ➡️🟥 Step 2/4
      /* > Get Label Status Styles
      /* > In Progress: Minimum x1 Task
      /* > Later: 0 - In Progress & Minimum x1 Task Later
      /* > Done: Only all Task Done
      /* ---------------------------------------------------- */

        // 1. Decide Label Status Style ? - In Progress, Later, Done

      /* ---------------------------------------------------- */
      /* 🟥 Step 3/4
      /* > Get Finished & Max Tasks of Category
      /* ---------------------------------------------------- */

        // 1. Decide Label Counter Box - Finished Task & Max Tasks each Category

      /* ---------------------------------------------------- */
      /* 🟥 Step 4/4
      /* > Create New Label
      /* ---------------------------------------------------- */

        var newLabel = "";




      return new Promise(resolve => {
        resolve( );
      })

    }
