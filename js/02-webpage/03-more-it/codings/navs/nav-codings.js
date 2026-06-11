// console.log("🟨 nav-codings.js")


/* -------------------------------------------------------------------------- */
/* 🏗️ | Dom Elements
/* -------------------------------------------------------------------------- */

 // Radios - nav codings
 var radiosNavCodings = document.querySelectorAll( "input[name='name-radio-nav-codings']" );

 // Radios - sub nav tech - codings
 var radiosTechNavCodings = document.querySelectorAll( "input[name='name-radio-nav-codings-tech']" );


/* -------------------------------------------------------------------------- */
/* 🎉 Event
/* > DomContentLoaded Listener ( first content load )
/* > * Toggle - Header Coding Container ( all )
/* > * Update - Coding Header ( Algos, Leetcode, Challenges )
/* -------------------------------------------------------------------------- */

  document.addEventListener( "DOMContentLoaded", async ()=> {

    /* ------------------------------------------------------ */
    /* Step 1/3:
    /* > Apply Coding Header - Visibility ( show / unshown )
    /* > by finding checked index
    /* ------------------------------------------------------ */

      await applyVisibilityCodingHeader( radiosNavCodings )


    /* ------------------------------------------------------ */
    /* Step 2/3:
    /* > Handle Update Coding Header by Checked Index
    /*
    /* Checked Indizies:
    /* 0 = Tech = go deeper in nav
    /* 1 = Algos = Update Coding Header
    /* 2 = Leetcode = Update Coding Header
    /* 3 = Challenges = Update Coding Header
    /* otherwise ids will be ignorred
    /* ------------------------------------------------------ */

      await handleUpdateCodingHeader( radiosNavCodings,
                                      radiosTechNavCodings )


    /* ------------------------------------------------------ */
    /* Step 3/3:
    /> Handle Update Masonry Coding Items by checking
    /* 2x indizies
    /* ------------------------------------------------------ */

      await handleUpdateMasonryCodingsItems( radiosNavCodings,
                                             radiosTechNavCodings )


  })


/* -------------------------------------------------------------------------- */
/* 🎉 Event
/* > Radio Change Listener - Tech, Algos, Leetcode, Challenges, Unshown
/* > * Toggle - Header Coding Container ( all )
/* > * Update - Coding Header ( Algos, Leetcode, Challenges )
/* -------------------------------------------------------------------------- */

  for( let i=0; i < radiosNavCodings.length; i++ ) {

    radiosNavCodings[i].addEventListener( "change", async ()=> {

      window.alert("Nav Coding | Switching = " + i)

      /* ------------------------------------------------------ */
      /* Step 1/3:
      /* > Apply Coding Header - Visibility ( show / unshown )
      /* ------------------------------------------------------ */

        await applyVisibilityCodingHeader( radiosNavCodings )

      /* ------------------------------------------------------ */
      /* Step 2/3:
      /* > Handle Update Coding Header by Checked Index
      /*
      /* Checked Indizies:
      /* 0 = Tech = go deeper in nav
      /* 1 = Algos = Update Coding Header
      /* 2 = Leetcode = Update Coding Header
      /* 3 = Challenges = Update Coding Header
      /* otherwise ids will be ignorred
      /* ------------------------------------------------------ */

        await handleUpdateCodingHeader( radiosNavCodings,
                                        radiosTechNavCodings )


      /* ------------------------------------------------------ */
      /* Step 3/3:
      /> Handle Update Masonry Coding Items by checking
      /* 2x indizies
      /* ------------------------------------------------------ */

        await handleUpdateMasonryCodingsItems( radiosNavCodings,
                                               radiosTechNavCodings )

    })

  }
