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

    "#mansory-tech-java-container",
    "#mansory-tech-spring-boot-container"

  ]

  // tech mansories items
  var tech_masonry_items = [

    "#mansory-tech-java-container > div",
    "#mansory-tech-spring-boot-container > div"

  ]

/* -------------------------------------------------------------------------- */
/* Var
/* -------------------------------------------------------------------------- */

  // tech masonry contex - better for reference handling
  // its the same object in storage, we give only the object
  // that had the original value
  const tech_msnryCtx  = { container: null }

  // radio tech checked id
  var checked_techId = null;

  // resp handling of tech masonry layout
  var resp_techMsnry_columns = null;
  var resp_techMsnry_breakpoint_800 = 800;

  // active tech masonry setted
  var active_tech_masonry = null;
  var active_tech_masonry_items = null;

/* -------------------------------------------------------------------------- */
/* Function
/* > Rebuild resp Masonry 2col layout
/* -------------------------------------------------------------------------- */

  async function rebuild_respMasonry_2col_layout( columns, ctx, layout, items ) {

    console.log("⭐columns: " + columns);
    console.log("⭐ctx: " + ctx);
    console.log("⭐layout: " + layout);
    console.log("⭐items: " + items);

    return new Promise( resolve => {

      setTimeout( () => {

        const gutter = 16;
        const domItems = document.querySelectorAll( items );

        domItems.forEach( item => {

          item.style.width = columns === 1
            ? '100%'
            : `calc(50% - ${gutter / 2}px)`;

        })

        // create new masonry
        ctx.container = new Masonry( layout, {

          itemSelector: items,
          columnWidth: items,
          percentPosition: true,
          gutter: gutter

        })

        resolve( ctx.container )

      }, 50);

    })

  }

/* -------------------------------------------------------------------------- */
/* 🟩 Function
/* > Destroy Old Masonry Context
/* > important for DomContentLoad & Switch Content to create new
/* > Dont use in Resize Event because this event triggers to many actions
/* -------------------------------------------------------------------------- */

 function destroy_old_msnryCtx( msnryCtx ) {

    // destroy old msnry to let later
    // create new ones
    // because msnry calc new height of new container

    if( msnryCtx.container ) {
      msnryCtx.container.destroy();
      msnryCtx.container = null;
    }


 }

/* -------------------------------------------------------------------------- */
/* Events
/* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /* 🟥 Event
  /> DomContentLoaded (first load)
  /* -------------------------------------------------------------------------- */
  document.addEventListener( "DOMContentLoaded", async () => {

    // window.alert("DOM")

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

      destroy_old_msnryCtx( tech_msnryCtx )

    /* ------------------------------------------------------- */
    /* Step 4
    /* Rebuild new Masonry Context
    /* ------------------------------------------------------- */

      // get actually width size and decide which column nr
      resp_techMsnry_columns = window.innerWidth >= resp_techMsnry_breakpoint_800 ? 2 : 1;

      tech_msnryCtx.container = await rebuild_respMasonry_2col_layout(  resp_techMsnry_columns,
                                                                        tech_msnryCtx,
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

      tech_msnryCtx.container = await rebuild_respMasonry_2col_layout(  resp_techMsnry_columns,
                                                                        tech_msnryCtx,
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

        destroy_old_msnryCtx( tech_msnryCtx )

      /* ------------------------------------------------------- */
      /* Step 3
      /* Rebuild new Masonry Context
      /* ------------------------------------------------------- */

        // get actually width size and decide which column nr
        resp_techMsnry_columns = window.innerWidth >= resp_techMsnry_breakpoint_800 ? 2 : 1;

        tech_msnryCtx.container = await rebuild_respMasonry_2col_layout(  resp_techMsnry_columns,
                                                                          tech_msnryCtx,
                                                                          active_tech_masonry,
                                                                          active_tech_masonry_items )


    })


  }



/* -------------------------------------------------------------------------- */
/* Execute
/* -------------------------------------------------------------------------- */
