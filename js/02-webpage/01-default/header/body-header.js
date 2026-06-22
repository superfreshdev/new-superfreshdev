// console.log("🟨 body-header.js")


/* -------------------------------------------------------- */
/* DOM Elements
/* -------------------------------------------------------- */

  var companyItem = document.getElementById("body-header-company-item");

  const bodyPageSlides = document.querySelectorAll("#main-body .push-slider .push-content-slide-no-anim");

  // used for default setting state
  const bodyHeaderRadios = document.querySelectorAll("input[name='name-radio-body-header-nav']");
  const bodyHeaderLabels = document.querySelectorAll(".body-header-label");


/* ------------------------------------------------------------------------ */
/* Create "PushSlides" with ClickListeners & Slides
/* ------------------------------------------------------------------------ */

  async_create_pushSlides_with_radios( bodyHeaderRadios, bodyHeaderLabels, bodyPageSlides );


/* ------------------------------------------------------------------------ */
/* 🎉 Event - DomContentLoaded
/* ------------------------------------------------------------------------ */

  document.addEventListener("DOMContentLoaded", async()=> {

    var checkedHeaderIndex = await async_get_checked_radioIndex( bodyHeaderRadios )

    // window.alert("DomContent = " + checkedHeaderIndex)

    if( checkedHeaderIndex == 0 ) {

      var updateCssStyle = " background-color: wheat; color:black;"
      await async_update_cssStyle_to_element( updateCssStyle, companyItem )

    }
    else {

        var updateCssStyle = "color:rgb(179, 161, 131); "
        await async_update_cssStyle_to_element( updateCssStyle, companyItem )

      }

  } )

/* ------------------------------------------------------------------------ */
/* 🎉 Event - Radio Changes
/* ------------------------------------------------------------------------ */

  for( let i=0; i < bodyHeaderRadios.length; i++ ) {

    bodyHeaderRadios[i].addEventListener( "change", async() => {

      // console.log("Header Tab = " + i )

      var checkedHeaderIndex = await  async_get_checked_radioIndex( bodyHeaderRadios )

      if( checkedHeaderIndex == 0 ) {

        var updateCssStyle = " background-color: wheat; color:black;"
        await async_update_cssStyle_to_element( updateCssStyle, companyItem )

      } else {

        var updateCssStyle = "color:rgb(179, 161, 131); "
        await async_update_cssStyle_to_element( updateCssStyle, companyItem )

      }

    })
  }
