// console.log("🟨 add-elements-to.js")


/* ---------------------------------------------------------------- */
/* 🟩 Async Function
/* > Prepend Radios to Element
/* ---------------------------------------------------------------- */

 async function asyncPrependRadiosToElement( radios, toElement ) {

    // console.log("🟪 asyncCreateRadiosPrepandTo()")
    // console.log("➡️ radios = " +  radios.length );

    // Spread-Operator - radios[0],[1],...
    toElement.prepend( ...radios )

    // console.log("💫 Adding " + radios.length + " to toElement ")


  return new Promise(resolve => {
      resolve();
    })

 }

/* ---------------------------------------------------------------- */
/* 🟩 Async Function
/* > General | Append Element to Add Point
/* ---------------------------------------------------------------- */

 async function asyncPrependElementTo( element, addPoint ) {

    // console.log("🟪 asyncCreateRadiosPrepandTo()")
    // console.log("➡️ element = " + element );

    addPoint.prepend( element )

    return new Promise(resolve => {
        resolve();
      })

 }

/* ---------------------------------------------------------------- */
/* 🟩 Async Function
/* > Exnure Prepend Radios to Element
/* > only if zero radio ids exist
/* ---------------------------------------------------------------- */

 async function asyncEnsureRadiosPrependTo( dataRadios, addPoint ) {

    // console.log("dataRadios(length): " + dataRadios.length )
    // console.log("addPoint: " + addPoint)

    /* -------------------------------------------------- */
    /* 🟩 Step 1/3:
    /* Get New Radio Ids from Json
    /* -------------------------------------------------- */

      // New Radio Ids
      var newRadioIds = [];

      // Get New Radio Ids
      for( let i=0; i < dataRadios.length; i++ ) {

        newRadioIds.push( dataRadios[i].id )
        // console.log("RadioIDs: " + newRadioIds[i])

      }

      /* -------------------------------------------------- */
      /* 🟩 Step 2/3:
      /* Get Status Exist Zero Radio Id in Element
      /* -------------------------------------------------- */

        var existRadioIds = "";

        // atomar check
        existRadioIds = await asyncExistIdStringsInElement( newRadioIds, addPoint );
        // console.log("⁉️ existRadioIds: " + existRadioIds)

      /* -------------------------------------------------- */
      /* 🟩 Step 3/3:
      /* Create Only New Radio Elements to Element
      /* -------------------------------------------------- */

       if( !existRadioIds ) {

          console.log("✳️🔩 Create Radios")

          // Test Print
          console.log("### Following Radios will be added:")
          newRadioIds.forEach(element => {

            console.log(element)

          });


          // New Radio Ids
          var newRadios = [];

          // Create New Radios from Json
          for( let i=0; i < dataRadios.length; i++ ) {

            newRadios.push( await asyncCreateRadio( dataRadios[i].id,
                                                    dataRadios[i].name,
                                                    dataRadios[i].checked ) )

          }

          console.log("🏁 New Radios Created = " + newRadios.length )

          // Add All New Radios to Element
          await asyncPrependRadiosToElement( newRadios, addPoint );


        } else {

          console.log("❌🔩 Dont Create Radios")

        }


    return new Promise(resolve => {
        resolve();
      })

 }
