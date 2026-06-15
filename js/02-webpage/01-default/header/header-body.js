// console.log("🟨 header-body.js")


/* -------------------------------------------------------- */
/* DOM Elements
/* -------------------------------------------------------- */

  var divCompanyContainer = document.getElementById("info-company-title");

  const body_page_slides = document.querySelectorAll("#main-body .push-slider .push-content-slide-no-anim");
  const labels_header_body = document.querySelectorAll(".lbl-header-body");

  // console.log("body_page_slides(length)= " + body_page_slides.length)
  // console.log("labels_header_body(length)= " + labels_header_body.length)

  // used for default setting state
  const radios_header_body = document.querySelectorAll("input[name='name-radio-nav-header-body']");

  // console.log("radios_header_body(length)= " + radios_header_body.length)

/* ------------------------------------------------------ */
/* Variables
/* ------------------------------------------------------ */

  // -

/* ------------------------------------------------------------------------ */
/* Create "PushSlides" with ClickListeners & Slides
/* ------------------------------------------------------------------------ */

  async_create_pushSlides_with_radios( radios_header_body, labels_header_body, body_page_slides );



/* ------------------------------------------------------------------------ */
/* 🎉 Event - DomContentLoaded
/* ------------------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", async()=> {

  var checkedHeaderIndex = await async_get_checked_radioIndex( radios_header_body )

  // window.alert("DomContent = " + checkedHeaderIndex)

  if( checkedHeaderIndex == 0 ) {

    var updateCssStyle = " background-color: wheat; color:black;"
    await async_update_cssStyle_to_element( updateCssStyle, divCompanyContainer )

  }

} )

/* ------------------------------------------------------------------------ */
/* 🎉 Event - Radio Changes
/* ------------------------------------------------------------------------ */

for( let i=0; i < radios_header_body.length; i++ ) {

  radios_header_body[i].addEventListener( "change", async() => {

    // console.log("Header Tab = " + i )

    var checkedHeaderIndex = await  async_get_checked_radioIndex( radios_header_body )

    if( checkedHeaderIndex == 0 ) {

      var updateCssStyle = " background-color: wheat; color:black;"
      await async_update_cssStyle_to_element( updateCssStyle, divCompanyContainer )

    } else {

      var updateCssStyle = "rgb(134, 134, 134); background-color: rgb(44, 44, 44); border: 2px solid rgb(56, 56, 56);"
      await async_update_cssStyle_to_element( updateCssStyle, divCompanyContainer )

    }

  })
}
