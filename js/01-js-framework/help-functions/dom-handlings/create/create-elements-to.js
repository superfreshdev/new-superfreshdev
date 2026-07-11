console.log("🟨 create-elements-to.js")


/* ---------------------------------------------------------------- */
/* Async Function
/* > Create Radios Prepend To
/* ---------------------------------------------------------------- */

 async function asyncCreateRadiosPrependTo( radios, addPoint ) {

    // console.log("🟪 asyncCreateRadiosPrepandTo()")
    console.log("➡️ radios = " +  radios.length );

    for( let i=0; i < radios.length; i++ ) {

      addPoint.prepend( radios[i] )

    }

    console.log("💫 Adding " + radios.length + " to addPoint ")


  return new Promise(resolve => {
      resolve();
    })

 }



 /*


  input, checked , type=radio , id=radio-codings-header-nav-java-basics | java-ad | ... , name-radio-cdoings-nav



 */
