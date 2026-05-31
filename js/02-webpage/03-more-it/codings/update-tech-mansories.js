console.log("🟨 update-tech-mansories.js")


// update tech mansories

/* -------------------------------------------------------------------------- */
/* Dom Elements
/* -------------------------------------------------------------------------- */

  // radios tech
  var radios_of_tech = document.querySelectorAll("input[name='name-radio-nav-codings-tech']")
  console.log("🔥= " + radios_of_tech.length )

  // tech mansories
  var tech_masonry_id_containers = [

    "#masonry-tech-java-container",
    "#masonry-tech-spring-boot-container"

  ]

  // tech mansories items
  var tech_masonry_items = [

    "#masonry-tech-java-container > div",
    "#masonry-tech-spring-boot-container > div"

  ]

/* -------------------------------------------------------------------------- */
/* Var
/* -------------------------------------------------------------------------- */

  // tech masonry contex - better for reference handling
  // its the same object in storage, we give only the object
  // that had the original value

  // msnryCtc_tech

  const msnryCtc_tech  = { container: null }

  // radio tech checked id
  var checked_techId = null;

  // resp handling of tech masonry layout
  var resp_techMsnry_columns = null;
  var resp_techMsnry_breakpoint_800 = 800;

  // active tech masonry setted
  var active_tech_masonry = null;
  var active_tech_masonry_items = null;


/* -------------------------------------------------------------------------- */
/* Events
/* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /* 🟥 Event
  /> DomContentLoaded (first load)
  /* -------------------------------------------------------------------------- */

    document.addEventListener( "DOMContentLoaded", async () => {

      // window.alert("DOM")

      console.log("🟩 Spring Boot items beim Start:",
        document.querySelectorAll("#masonry-tech-spring-boot-container > .masonry-coding-item").length
      )

      /* ----------------------------------------------------- */
      /* Step 1
      /* > Get "checked" from radio techs
      /* ----------------------------------------------------- */

        checked_techId = await async_get_checked_radioIndex( radios_of_tech );
        console.log("checked_techID = " + checked_techId)

        // exit if no tech id is checked
        if(checked_techId == null ) return;

      /* ----------------------------------------------------- */
      /* Step 2
      /* > Get Dom Masonry by id to "Destroy & Rebuild"
      /* ----------------------------------------------------- */

        // get active masonry container to update
        active_tech_masonry = tech_masonry_id_containers[checked_techId];
        active_tech_masonry_items = tech_masonry_items[checked_techId];

      /* ------------------------------------------------------- */
      /* Step 3
      /* Destroy Old Masonry Contex for clean rebuild
      /* ------------------------------------------------------- */

        destroy_old_msnryCtx( msnryCtc_tech )

      /* ------------------------------------------------------- */
      /* Step 4
      /* Rebuild new Masonry Context
      /* ------------------------------------------------------- */

        // get actually width size and decide which column nr
        resp_techMsnry_columns = window.innerWidth >= resp_techMsnry_breakpoint_800 ? 2 : 1;

        msnryCtc_tech.container = await rebuild_respMasonry_2col_layout(  resp_techMsnry_columns,
                                                                          msnryCtc_tech,
                                                                          active_tech_masonry,
                                                                          active_tech_masonry_items )

    })

  /* -------------------------------------------------------------------------- */
  /* 🟥 Event
  /> Resize
  /* -------------------------------------------------------------------------- */

    window.addEventListener( "resize", async () => {

      // exit if no tech id is checked
      // should be setted by event - domContentLoaded
      // if(checked_techId == null ) return;

      /* ------------------------------------------------------- */
      /* Rebuild new Masonry Context
      /* ------------------------------------------------------- */

        // get actually width size and decide which column nr
        resp_techMsnry_columns = window.innerWidth >= resp_techMsnry_breakpoint_800 ? 2 : 1;

        msnryCtc_tech.container = await rebuild_respMasonry_2col_layout(  resp_techMsnry_columns,
                                                                          msnryCtc_tech,
                                                                          active_tech_masonry,
                                                                          active_tech_masonry_items )

    });

  /* -------------------------------------------------------------------------- */
  /* 🟥 Event
  /> Change (Tech Radios)
  /* -------------------------------------------------------------------------- */

    for( let i=0; i < radios_of_tech.length; i++ ) {

      radios_of_tech[i].addEventListener("change", async () => {

        // window.alert("Tab")

        // exit if no tech id is checked
        // should be setted by event - domContentLoaded
        // if(checked_techId == null ) return;

        /* ----------------------------------------------------- */
        /* Step 1
        /* > Get Dom Masonry by id to "Destroy & Rebuild"
        /* ----------------------------------------------------- */

          // update new checked index
          checked_techId = i;

          // exit if no mansory found
          if( tech_masonry_id_containers[checked_techId] == undefined ||
              tech_masonry_items[checked_techId] == undefined ) return;

          // get active masonry container to update
          active_tech_masonry = tech_masonry_id_containers[checked_techId];
          active_tech_masonry_items = tech_masonry_items[checked_techId];

          console.log("🔥🔥🔥 active_tech_masonry = " + active_tech_masonry)
          console.log("🔥🔥🔥 active_tech_masonry_items = " + active_tech_masonry_items)

        /* ------------------------------------------------------- */
        /* Step 2
        /* Destroy Old Masonry Contex for clean rebuild
        /* ------------------------------------------------------- */

          destroy_old_msnryCtx( msnryCtc_tech )

        /* ------------------------------------------------------- */
        /* Step 3
        /* Rebuild new Masonry Context
        /* ------------------------------------------------------- */

          // get actually width size and decide which column nr
          resp_techMsnry_columns = window.innerWidth >= resp_techMsnry_breakpoint_800 ? 2 : 1;

          msnryCtc_tech.container = await rebuild_respMasonry_2col_layout(  resp_techMsnry_columns,
                                                                            msnryCtc_tech,
                                                                            active_tech_masonry,
                                                                            active_tech_masonry_items )


      })


    }


/* -------------------------------------------------------------------------- */
/* Execute
/* -------------------------------------------------------------------------- */

 document.querySelectorAll('.masonry-coding-item').forEach( item => {
  console.log("🖼️ = " + item.className, item.offsetHeight )
 })
