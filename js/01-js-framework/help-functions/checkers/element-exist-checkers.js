// console.log("🟨 element-exist-checkers.js")



/* ---------------------------------------------------------------- */
/* Async Function
/* > Exist Ids in Element
/* ---------------------------------------------------------------- */

async function asyncExistIdStringsInElement( idStrings, inElement ) {

   for( let i=0; i < idStrings.length; i++ ) {

    if( inElement.querySelector( `#${idStrings[i]}`) ) {

        console.log("🟥 ID String Exist: " + idStrings[i] )
        console.log("❌ Dont Create ID-Element ")

        return new Promise(resolve => {
            resolve( true );
        })

      }

   }

   // any exist
   console.log("🟩 ID String Dont Exist - Allow to Create ")
   return new Promise(resolve => {
      resolve( false );
  })

}

/* ---------------------------------------------------------------- */
/* ❌ Async Function
/* > Check Exist Radios in Element
/* ---------------------------------------------------------------- */

// ❌ buggy
 async function asyncExistRadiosInElement( radios, inElement ) {

    // console.log("🟪 asyncExistRadiosInElement()")
    // console.log("➡️ radios = " +  radios.length );

    for( let i=0; i < radios.length; i++ ) {

      // console.log(radios[i].getAttribute("id"))

      // check radio id exist inElement
      if( inElement.querySelector( `#${radios[i].getAttribute("id")}`) ) {

        console.log("🟥 radio exist: " +  radios[i].getAttribute("id") )
        console.log( `#${radios[i].getAttribute("id")}` )

        console.log("➡️❌ dont create radios: ")

        return true;

      }


    }

    // console.log("➡️🟩 allow to create radios: ")
    // only by zero exist , it returns false
    return false;

  return new Promise(resolve => {
      resolve();
    })

 }
