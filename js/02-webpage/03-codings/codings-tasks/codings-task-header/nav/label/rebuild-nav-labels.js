/* -------------------------------------------------------------------- */
// console.log("🟨 rebuild-nav-labels.js")
/* -------------------------------------------------------------------- */


  /* --------------------------------------------------------- */
  /* Async Function
  /* ➡️🟥 Rebuild Labels To Nav
  /* --------------------------------------------------------- */

    async function asyncRebuildCodingsTaskHeaderNavLabels( jsonTaskContent, navAddPoint ) {

      console.log("-------------------")
      console.log("❇️⚒️ Rebuild - Codings Task Header Nav")
      console.log("➡️ jsonTaskContent: " + jsonTaskContent)
      console.log("➡️ navAddPoint: " + navAddPoint)
      console.log("-------------------")

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
        /* 🟥 Step 1/4
        /* > Clean Up - Delete old Labels from Element
        /* ---------------------------------------------------- */


        /* ---------------------------------------------------- */
        /* ➡️🟥 Step 3/4:
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


            navAddPoint.append( newLabels[i] )

          }

          console.log("🏁 Final New Labels(length): " + newLabels.length )

        /* ---------------------------------------------------- */
        /* ➡️🟥 Step 4/4:
        /* > Add all "New Labels" to "navAddPoint"
        /* ---------------------------------------------------- */

          // await asyncPrependElementTo( newLabels, navAddPoint )




      return new Promise(resolve => {
        resolve( );
      })

    }
