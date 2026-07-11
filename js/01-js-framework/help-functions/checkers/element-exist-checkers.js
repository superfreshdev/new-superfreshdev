console.log("🟨 element-exist-checkers.js")


/* ---------------------------------------------------------------- */
/* Async Function
/* > Check Exist Radios in Element
/* ---------------------------------------------------------------- */

 async function asyncExistRadiosInElement( radios, inElement ) {

    // console.log("🟪 asyncExistRadiosInElement()")
    // console.log("➡️ radios = " +  radios.length );

    for( let i=0; i < radios.length; i++ ) {

      // console.log(radios[i].getAttribute("id"))

      // check radio id exist inElement
      if( inElement.contains( radios[i] ) ) {

        console.log("🟩 radio exist: " +  radios[i].getAttribute("id") )
        console.log("➡️❌ dont create radios: ")

        return true;

      }


    }

    console.log("➡️🟩 allow to create radios: ")
    // only by zero exist , it returns false
    return false;

  return new Promise(resolve => {
      resolve();
    })

 }
