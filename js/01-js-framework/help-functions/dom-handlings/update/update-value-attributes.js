// console.log("🟨 update-value-attribute.js")


/* ---------------------------------------------------------------- */
/* Async Function
/* > Update "src" from "id-element"
/* ---------------------------------------------------------------- */

 async function async_update_src_from_idElement( idElement, strSrc ) {

    // console.log("🟪 async_update_src_from_idElement()")
    // console.log("➡️ strSrc = " +  strSrc);

    // update src to element
    idElement.src = strSrc;

  return new Promise(resolve => {
      resolve();
    })

 }

/* ---------------------------------------------------------------- */
/* Async Function
/* > Update "src" from "query-element"
/* ---------------------------------------------------------------- */

 async function async_update_src_from_queryElement( querySelector, strSrc ) {

    // console.log("🟪 async_update_src_from_queryElement()")
    // console.log("➡️ strSrc = " +  strSrc);

    // update src to element
    querySelector.src = strSrc;

  return new Promise(resolve => {
      resolve();
    })

 }

 /* ---------------------------------------------------------------- */
/* Async Function
/* > Update "href" from "query-element"
/* ---------------------------------------------------------------- */

 async function async_update_href_from_queryElement( querySelector, strHref ) {

    // console.log("🟪 async_update_href_from_queryElement()")
    // console.log("➡️ strHref = " +  strHref);

    // update src to element
    querySelector.href = strHref;

  return new Promise(resolve => {
      resolve();
    })

 }


/* ---------------------------------------------------------------- */
/* Async Function
/* > Update "CSS Class" from "id-element"
/* ---------------------------------------------------------------- */

 async function async_update_cssClass_from_idElement( idElement, newCssClass ) {

    // console.log("🟪 async_update_cssClass_from_idElement()")

    // ⚠️ dont check if class-attribute exist
    var oldCssClass = idElement.getAttribute("class")
    console.log("➡️ oldCssClasst = " +  oldCssClass);

    // update css class to element
    idElement.classList.replace( oldCssClass, newCssClass );

   return new Promise(resolve => {
        resolve();
      })

 }

 /* ---------------------------------------------------------------- */
/* Async Function
/* > Update Css Class to Element
/* ---------------------------------------------------------------- */

// update
 async function async_update_cssClass_to_element( element, cssClass ) {

    // console.log("🟪 async_set_cssClass_to_element()")

    // console.log("➡️ cssClass = " + cssClass );
    // console.log("➡️ element = " +  element.getAttribute("class"));

    // remove old css class
    element.className = "";

    // update css class to element
    element.classList.add(cssClass);

   return new Promise(resolve => {
        resolve( );
      })

 }

/* ---------------------------------------------------------------- */
/* Async Function
/* > Update x2 Css Class to Element
/* ---------------------------------------------------------------- */

// update
 async function async_update_2_cssClass_to_element( element, cssClass_1, cssClass_2 ) {

    // console.log("🟪 async_set_cssClass_to_element()")

    // console.log("➡️ cssClass = " + cssClass );
    // console.log("➡️ element = " +  element.getAttribute("class"));

    // remove old css class
    element.className = "";

    // update css class to element
    element.classList.add(cssClass_1);

    element.classList.add(cssClass_2);

   return new Promise(resolve => {
        resolve( );
      })

 }

 /* ---------------------------------------------------------------- */
/* Async Function
/* > Update Text from Element
/* ---------------------------------------------------------------- */

// update
 async function async_update_text_from_element( element, newText ) {

    // console.log("🟪 async_set_cssClass_to_element()")

    // console.log("➡️ cssClass = " + cssClass );
    // console.log("➡️ element = " +  element.getAttribute("class"));

    // remove old css class
    element.innerText = "";

    // update new text
    element.innerText = newText;


   return new Promise(resolve => {
        resolve( );
      })

 }
