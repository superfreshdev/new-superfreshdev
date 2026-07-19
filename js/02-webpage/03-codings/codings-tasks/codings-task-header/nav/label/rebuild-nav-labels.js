/* -------------------------------------------------------------------- */
// console.log("🟨 rebuild-nav-labels.js")
/* -------------------------------------------------------------------- */


  /* --------------------------------------------------------- */
  /* Async Function
  /* 🟨 Rebuild Labels To Nav
  /* --------------------------------------------------------- */

    async function asyncRebuildCodingsTaskHeaderNavLabels( jsonTaskContent, navAddPoint ) {

      console.log("-------------------")
      console.log("❇️⚒️ Rebuild - Codings Task Header Nav")
      console.log("➡️ jsonTaskContent: " + jsonTaskContent)
      console.log("➡️ navAddPoint: " + navAddPoint)
      console.log("-------------------")

      // default label unshown - dont rebuild
      var labelUnshownId = "radio-codings-header-nav-unshown";

      /* ---------------------------------------------------- */
      /* 🟩 Step 1/4
      /* > Get Datas - Paths, Nav, TaskCategories
      /* ---------------------------------------------------- */

        var dataPaths = jsonTaskContent.paths;
        var dataNav = jsonTaskContent.header.nav;
        var dataTaskCategories = jsonTaskContent.taskCategories;


        // Get - Icon Path Black
        var iconPathBlack = dataPaths.iconBlack;

        // Get Data - Radios
        var dataRadios = dataNav.radios;
        var maxRadios = dataRadios.length;

        // Get Data - Label Content
        var dataLabelContent = dataNav.labelContent;
        var dataLabelCategories = dataNav.labelContent.categories;

        // Tasks for each Task Category Index
        var dataTasks = "";

        /* ---------------------------------------------------- */
        /* 🟩 Step 1/4
        /* > Clean Up - Delete old Labels from Element
        /* > dont delete unshown label (default exist)
        /* ---------------------------------------------------- */

          var oldLabels = navAddPoint.querySelectorAll("label");
          // console.log("⁉️⁉️⁉️⁉️oldLabels(length): " + oldLabels.length + " || " + labelUnshownId)
          await removeLabelsExceptId( oldLabels, navAddPoint, labelUnshownId )


        /* ---------------------------------------------------- */
        /* 🟩 Step 3/4:
        /* > Create Array "New Labels"
        /* ---------------------------------------------------- */

          var newLabels = [];

          for( let i=0; i < maxRadios; i++ ) {

            // Get Actually Tasks from Task Category Index
            dataTasks = dataTaskCategories[i].tasks;
            // console.log("⭐ maxTasks(Category) = " + dataTasks.length )

            // Create Label by every Radio
            newLabels.push ( await asyncCreateCodingsTaskHeaderNavLabel( iconPathBlack,
                                                        dataRadios[i].id,
                                                        dataLabelContent,
                                                        dataLabelCategories[i],
                                                        dataTasks ) )

          }

          console.log("🏁 Final New Labels(length): " + newLabels.length )

        /* ---------------------------------------------------- */
        /* 🟩 Step 4/4:
        /* > Add all "New Labels" to "navAddPoint"
        /* ---------------------------------------------------- */

          await asyncPrependElementsTo( newLabels, navAddPoint )



      return new Promise(resolve => {
        resolve( );
      })

    }
