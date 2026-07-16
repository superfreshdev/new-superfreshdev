// console.log("🟨 add-elements-to.js")


/* ---------------------------------------------------------------- */
/* Async Function
/* > Prepend Radios to Element
/* ---------------------------------------------------------------- */

 async function asyncPrependRadiosToElement( radios, toElement ) {

    // console.log("🟪 asyncCreateRadiosPrepandTo()")
    console.log("➡️ radios = " +  radios.length );

    // Spread-Operator - radios[0],[1],...
    toElement.prepend( ...radios )

    console.log("💫 Adding " + radios.length + " to toElement ")


  return new Promise(resolve => {
      resolve();
    })

 }

/* ---------------------------------------------------------------- */
/* Async Function
/* > General | Append Element to Add Point
/* ---------------------------------------------------------------- */

 async function asyncPrependElementTo( element, addPoint ) {

    // console.log("🟪 asyncCreateRadiosPrepandTo()")
    console.log("➡️ element = " + element );

    addPoint.prepend( element )

  return new Promise(resolve => {
      resolve();
    })

 }
