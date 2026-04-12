// console.log("🟨 set-css-attributes.js")


/* ---------------------------------------------------------------- */
/* Async Function
/* > Set Css Class to Element
/* ---------------------------------------------------------------- */

// update
 async function async_set_cssClass_to_element( cssClass, element ) {

    // console.log("🟪 async_set_cssClass_to_element()")

    // console.log("➡️ cssClass = " + cssClass );
    // console.log("➡️ element = " +  element.getAttribute("class"));

    // update css class to element
    element.classList.add(cssClass);

   return new Promise(resolve => {
        resolve();
      })

 }

/* ---------------------------------------------------------------- */
/* Async Function
/* > Set CSS "Display:none" to ID
/* ---------------------------------------------------------------- */

 async function async_set_idElement_unshown ( idElement ) {

    // console.log("🟪 async_set_idElement_unshown()")

    // update css class to element
   idElement.style.display = "none";

   return new Promise(resolve => {
        resolve();
      })

 }

/* ---------------------------------------------------------------- */
/* Async Function
/* > Set CSS "Display:..." to ID
/* ---------------------------------------------------------------- */

 async function async_set_idElement_show ( idElement, strDisplay ) {

    // console.log("🟪 async_set_idElement_show()")

    // update css class to element
     // ⚠️ no checking on block, grid, flex, ...
   idElement.style.display = strDisplay;

   return new Promise(resolve => {
        resolve();
      })

 }
