console.log("🟨 header-body.js")


/* -------------------------------------------------------- */
/* DOM Elements
/* -------------------------------------------------------- */

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
