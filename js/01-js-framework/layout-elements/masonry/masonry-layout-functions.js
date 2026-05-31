// console.log("🟨 masonry-layout-functions.js")


/* -------------------------------------------------------------------------- */
/* Function
/* > Rebuild resp Masonry | 2 col layout
/* -------------------------------------------------------------------------- */

  async function rebuild_respMasonry_2col_layout( columns, ctx, layout, items ) {

    console.log("⭐columns: " + columns);
    console.log("⭐ctx: " + ctx);
    console.log("⭐layout: " + layout);
    console.log("⭐items: " + items);


    return new Promise( resolve => {

      setTimeout( () => {

        const gutter = 24;
        const domItems = document.querySelectorAll( items );

        domItems.forEach( item => {

          // console.log("🥒item = " + item)

          item.style.width = columns === 1
            ? '100%'
            : `calc(50% - ${gutter / 2}px)`;

        })

        // create new masonry
        ctx.container = new Masonry( layout, {

          itemSelector: items + ':not(:empty)',
          columnWidth: items + ':not(:empty)',
          percentPosition: true,
          gutter: gutter

        })

        resolve( ctx.container )

      }, 50);

    })

  }
