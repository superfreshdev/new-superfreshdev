console.log("🟨 add-elements-to.js")


/* ---------------------------------------------------------------- */
/* Async Function
/* > Prepend Radios to Element
/* ---------------------------------------------------------------- */

 async function asyncPrependRadiosToElement( radios, toElement ) {

    // console.log("🟪 asyncCreateRadiosPrepandTo()")
    console.log("➡️ radios = " +  radios.length );

    for( let i=0; i < radios.length; i++ ) {

      toElement.prepend( radios[i] )

    }

    console.log("💫 Adding " + radios.length + " to toElement ")


  return new Promise(resolve => {
      resolve();
    })

 }
