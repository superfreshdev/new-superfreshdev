// console.log("🟨 add-elements-to.js")


/* ---------------------------------------------------------------- */
/* 🟩 Async Function
/* > Adding Element/s to "addPoint"
/* ---------------------------------------------------------------- */

  // ❌
  // Prepend - Elements(n) to "addPoint"
  async function asyncPrependElementsTo( elements, addPoint ) {

    // console.log("🟪 asyncCreateRadiosPrepandTo()")
    // console.log("➡️ radios = " +  radios.length );

    // Spread-Operator - radios[0],[1],...
    addPoint.prepend( ...elements )

    // console.log("💫 Adding " + radios.length + " to toElement ")


  return new Promise(resolve => {
      resolve();
    })

  }

  // ❌
  // Prepend - Element(x1) to "addPoint"
  async function asyncPrependElementTo( element, addPoint ) {

    // console.log("🟪 asyncPrependElementTo()")
    // console.log("➡️ element = " + element );

    // addPoint.prepend( ...elements )
    addPoint.prepend( element )

    return new Promise(resolve => {
        resolve();
      })

  }

  // 🟩
  async function prependElementTo( element, addPoint ) {

    // console.log("🟪 asyncPrependElementTo()")
    // console.log("➡️ element = " + element );

    // addPoint.prepend( ...elements )
    addPoint.prepend( element )

    return new Promise(resolve => {
        resolve();
      })

  }

  // ❌
  // Append - Elements(n) to "addPoint"
  async function asyncAppendElementsTo( elements, addPoint ) {

    // console.log("🟪 asyncAppendElementTo()")
    // console.log("➡️ element = " + element );

     // Spread-Operator - radios[0],[1],...
    addPoint.append( ...elements )

    return new Promise(resolve => {
        resolve();
      })

  }

  // ❌
  // Append - Element(x1) to "addPoint"
  async function asyncAppendElementTo( element, addPoint ) {

    // console.log("🟪 asyncAppendElementTo()")
    // console.log("➡️ element = " + element );

    addPoint.append( element )

    return new Promise(resolve => {
        resolve();
      })

  }

  // 🟩 - Append - Element(x1) to "addPoint"
  async function appendElementTo( element, addPoint ) {

    // console.log("🟪 appendElementTo()")
    // console.log("➡️ element = " + element );

    // addPoint.prepend( ...elements )
    addPoint.append( element )

    return new Promise(resolve => {
        resolve();
      })

  }


/* ---------------------------------------------------------------- */
/* 🟩 Async Function
/* > Prepend New Radios to Element
/* > only if zero radio ids exist
/* ---------------------------------------------------------------- */

 async function asyncPrependNewRadiosFromDataTo( dataRadios, addPoint ) {

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
          await asyncPrependElementsTo( newRadios, addPoint );

          // Set Display None To New Radios
          // Set Css Style - Unshown Radios
          await asyncSetDisplayNoneToElements( newRadios )



        } else {

          console.log("❌🔩 Dont Create Radios")

        }


    return new Promise(resolve => {
        resolve();
      })

 }
