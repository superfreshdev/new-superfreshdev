// console.log("🟨 update-content-elements.js")


/* ---------------------------------------------------------------- */
/* Async Function
/* > Update Text from Element
/* ---------------------------------------------------------------- */

 async function asyncUpdateTextFromElement( text, element ) {

    // console.log("🟪 asyncUpdateTextFromElement()")
    // console.log("➡️ text = " +  text);

    // update text
    element.innerText = "";
    element.innerText = text;

  return new Promise(resolve => {
      resolve();
    })

 }
