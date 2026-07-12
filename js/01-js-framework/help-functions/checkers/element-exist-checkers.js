// console.log("🟨 element-exist-checkers.js")


/* ---------------------------------------------------------------- */
/* Async Function
/* > Exist Ids in Element
/* ---------------------------------------------------------------- */

async function asyncExistIdStringsInElement( idStrings, inElement ) {

   for( let i=0; i < idStrings.length; i++ ) {

    if( inElement.querySelector( `#${idStrings[i]}`) ) {

        // console.log("🟥 ID String Exist: " + idStrings[i] )
        // console.log("❌ Dont Create ID-Element ")

        return new Promise(resolve => {
            resolve( true );
        })

      }

   }

   // any exist
  //  console.log("🟩 ID String Dont Exist - Allow to Create ")
   return new Promise(resolve => {
      resolve( false );
  })

}
