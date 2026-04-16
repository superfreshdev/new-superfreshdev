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
