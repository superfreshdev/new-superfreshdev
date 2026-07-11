console.log("🟨 create-elements.js")


/* ---------------------------------------------------------------- */
/* Async Function
/* > Create Radios
/* ---------------------------------------------------------------- */

 // data:
 async function asyncCreateRadios( radios ) {

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
