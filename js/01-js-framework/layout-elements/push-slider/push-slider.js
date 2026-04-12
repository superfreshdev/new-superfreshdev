// console.log("🟨 push-slider.js")


/* Reminder:

  > at the beginning all slides get the css class
    "push-content-slide-no-anim", because we dont like
     to see an animation by reload the webpage.

     if we click to slide, than these css class
     will be updated to "push-content-slide-with-anim"

     Thats the reason why we only can work with
     click listeners because radio change listener
     will be reload by webpage.

*/


/* ---------------------------------------------------------------------- */
/* Function:
/* > Do Push Slide
/* ---------------------------------------------------------------------- */

  function doPushSlide( slides, currentIndex, newIndex ) {


    // termination condition, dont allow same index for new sliding
    if( newIndex === currentIndex ) return;

    // console.log("---------------------")
    // console.log("📏|slides.length= " + slides.length )
    // console.log("📏|currentIndex= " + currentIndex )
    // console.log("📏|newIndex= " + newIndex )
    // console.log("---------------------")

    /* -------------------------------------------- */
    /* Step 1: Style Slide Push Direction
    /* -------------------------------------------- */

    const currentPage = slides[currentIndex];
    const nextPage = slides[newIndex]

    // Multiplicator for Slide Direction
    const direction = newIndex > currentIndex ? 1 : -1;

    // Add Start Translate to 'nextPage'
    nextPage.style.transition = 'none';
    nextPage.style.transform = `translateX(${100 * direction}%)`;
    nextPage.style.zIndex = 3;

    // Fore Reflow ( Web-Browser )
    // force Web-Browser to calculate
    // the next Slide Element again to
    // register the start transition
    // why ?
    // without that we lost / overwrite our
    // start transition & in the end we dont get
    // any transition
    void nextPage.offsetWidth;

    // add after new browser calc new transistion effect
    currentPage.style.transition = 'transform .5s ease';
    nextPage.style.transition = 'transform .5s ease';


    /* -------------------------------------------- */
    /* Step 2: Start Push Slide
    /* -------------------------------------------- */

    // Add End Translate to 'newPage' (100% -> 0% or -100% -> 0%)
    nextPage.style.transform = 'translateX(0)';


    // Add End Translate to 'currentPage' from 'left to right' or 'right to left'
    currentPage.style.transform = `translateX(${-100 * direction}%)`;


    /* -------------------------------------------- */
    /* Step 3: Update New Slide
    /* -------------------------------------------- */

      // reminder: wait 500ms, then start
      // the browser need some time to recalc by 'nextPage.offsetWidth'
      // & do translate

      setTimeout(() => {

        /* ------------------------------------------------------------------ */
        /* Step 1: Unshown Old Slide
        /* ------------------------------------------------------------------ */

        currentPage.classList.remove('active');

        currentPage.style.transition = 'none';
        currentPage.style.transform = 'translateX(100%)';
        currentPage.style.zIndex = 1;

        /* ------------------------------------------------------------------ */
        /* Step 2: Show New Slide
        /* ------------------------------------------------------------------ */

        nextPage.classList.add('active');
        nextPage.style.zIndex = 2;


      }, 500)

  }

/* ---------------------------------------------------------------------- */
/*  Async Function:
/* > Add clickListeners to Slide
/* ---------------------------------------------------------------------- */

  async function async_add_clickListeners_to_slide( clickElements, slides, currentIndex ) {


    console.log("🟨 async_add_clickListeners_to_slide()")

      // css class: with or no anims effects
      var cssClass_withAnim = "push-content-slide-with-anim";
      var cssClass_noAnim = "push-content-slide-no-anim";

      // global
      var wasClicked = false;

    /* --------------------------------------------------------------------------- */
    /*  Add to all Elements the Click Listener to "doPushSlide()" */
    /* --------------------------------------------------------------------------- */

    for( let clickedIndex=0; clickedIndex < clickElements.length; clickedIndex++ ) {

      // add click listener
      clickElements[clickedIndex].addEventListener( 'click', () => {

        console.log( "⚡ Clicked Index = " + clickedIndex )
        console.log( "⚡ Current Index = " + currentIndex )

        /* -------------------------------------------------------------------------------------------- */
        /* Step 1: Update Slides with css class "push-content-slide-with-anim" only ones
        /* -------------------------------------------------------------------------------------------- */

          if( wasClicked == false ) {

            for( let i=0; i < slides.length; i++ ) {

              async_update_cssClass_to_element( cssClass_noAnim, cssClass_withAnim, slides[i] )

            }

            // need only updated ones, not by every click
            wasClicked = true;

          }

          /* ----------------------------------------------------------------------------- */
          /* Step 2: Do Push Slide
          /* ----------------------------------------------------------------------------- */

            doPushSlide( slides, currentIndex, clickedIndex )

          /* ----------------------------------------------------------------------------- */
          /* Step 3: Update new Current Index
          /* ----------------------------------------------------------------------------- */

            currentIndex = clickedIndex;


      } )

    }

      return new Promise(resolve => {
        resolve( );
      })


  }

/* ---------------------------------------------------------------------- */
/* 🟨 Start Function for Push Slides:
/* > 1. comination of radios & clickElements
/* > 2. only clickedElements
/* ---------------------------------------------------------------------- */

  // comination of radios & clickElements
  async function async_create_pushSlides_with_radios( radios, clickedElements, slides) {


    /* -------------------------------------------------- */
    /* Step 1:
    /* > Show Start Slide ( by radio index )
    /* -------------------------------------------------- */

       // default 0, if not changed
      var checkedRadioIndex = 0;

      // get checked radio index for slide
      checkedRadioIndex = await async_get_checked_radioIndex_or_zeroIndex( radios )
      // console.log("⛓️ checkedRadioIndex = " + checkedRadioIndex )

      // set slide by radio index, set css class "active"
      var set_slideElement = slides[checkedRadioIndex];
      await async_set_cssClass_to_element( "active", set_slideElement )

      // if any default was setted, set radio index 0 as checked
      // to see the css styling
      if( checkedRadioIndex == 0 ) {

        radios[checkedRadioIndex].checked = true;
      }


    /* -------------------------------------------------- */
    /* Step 2:
    /* > Add Push Slides to clickElements
    /* -------------------------------------------------- */

      // get start index by checkedRadioIndex
      await async_add_clickListeners_to_slide( clickedElements, slides, checkedRadioIndex )



    return new Promise(resolve => {
      resolve( );
    })


  }

  // 🟨 only clickedElements
  async function async_create_pushSlides_only_clickElements( startSlide, slides, clickedElements ) {

    /* -------------------------------------------------- */
    /* Step 1:
    /* > Show Start Slide
    /* -------------------------------------------------- */

    /* -------------------------------------------------- */
    /* Step 2:
    /* > Add Push Slides to clickElements
    /* -------------------------------------------------- */


  }
