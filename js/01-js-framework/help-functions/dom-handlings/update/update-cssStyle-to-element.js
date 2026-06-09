// console.log("🟨 update-cssStyle-to-element.js")


/* ---------------------------------------------------------------- */
/* Async Function
/* > Update Css Style to Element
/* ---------------------------------------------------------------- */

async function async_update_cssStyle_to_element( cssStyle, element ) {

  // console.log("🟪 async_update_cssStyle_to_element()")

  element.style.cssText = cssStyle;

  return new Promise(resolve => {
   resolve(  );

  })


}
