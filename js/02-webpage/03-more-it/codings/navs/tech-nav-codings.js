// console.log("🟨 tech-nav-codings.js")


/* -------------------------------------------------------------------------- */
/* 🏗️ | Dom Elements
/* -------------------------------------------------------------------------- */

 // Radios - nav codings
 var radiosNavCodings = document.querySelectorAll( "input[name='name-radio-nav-codings']" );

 // Radios - Techs
 var radiosTechNavCodings = document.querySelectorAll( "input[name='name-radio-nav-codings-tech']" );


/* -------------------------------------------------------------------------- */
/* 🎉 Event
/* > Radio Change Listener - Tech Nav
/* > * Update - Coding Header ( Java, Spring Boot, ... )
/* -------------------------------------------------------------------------- */

  for( let i=0; i < radiosTechNavCodings.length; i++ ) {

    radiosTechNavCodings[i].addEventListener( "change", async() => {

      console.log("Tech 🍎 ")

    /* ---------------------------------------------------------------------- */
    /* Step 1/2
    /* > Update | Coding Header Container - Tech Nav
    /* ---------------------------------------------------------------------- */

      await handleUpdateCodingHeader( radiosNavCodings,
                                      radiosTechNavCodings )

     /* ------------------------------------------------------ */
    /* Step 2/2:
    /> Handle Update Masonry Coding Items by checking
    /* 2x indizies
    /* ------------------------------------------------------ */

      await handleUpdateMasonryCodingsItems( radiosNavCodings,
                                             radiosTechNavCodings )


    })

  }
