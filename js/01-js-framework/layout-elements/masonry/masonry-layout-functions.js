// console.log("🟨 masonry-layout-functions.js")


/* -------------------------------------------------------------------------- */
/* 🔩 Help Function
/* > Get Breakpoint Value from List by Screen Width
/* -------------------------------------------------------------------------- */

  function getColumnsForCurrentWidth(breakpoints) {

    const currentWidth = window.innerWidth;

    // Sortiere absteigend nach minWidth um den passenden Breakpoint zu finden
    const matchedBreakpoint = [...breakpoints]
      .sort((a,b) => b.minWidth - a.minWidth)
      .find(bp => currentWidth >= bp.minWidth);

    // Fallback auf den ersten Wert, falls nichts greift
    return matchedBreakpoint ? matchedBreakpoint.columns : breakpoints[0].columns;

  }

/* -------------------------------------------------------------------------- */
/* Function
/* > Init Responsive Masonry
/* -------------------------------------------------------------------------- */

  async function initResponsiveMasonry(ctx) {

    return new Promise((resolve) => {

      // 1 - Spaltenanzahl dynamisch anhand der aktuellen Fensterbreite bestimmen
      // Eine innere Funktion, die das Layout berechnet
      const appLayout = () => {

          let currentColumns = 1;
          const screenWidth = window.innerWidth;

          // 1. Breakpoint ermiiteln und Spalten Anzahl festlegen
          let breakpoints = ctx.breakpoints;
          currentColumns = getColumnsForCurrentWidth(breakpoints)
          console.log("🔥🔥🔥 Current Columns = " + currentColumns )

          // 2. Elemente holen
          const container = ctx.container;
          const items = container.querySelectorAll(ctx.itemSelector);

          // 3. Breiten und Gaps rein über den Kontext steuern (sauber)
          const gap = ctx.gap || 16;

          items.forEach(item => {

            if(currentColumns === 1) {
              item.style.width = '100%';
            } else {
              // Prozentualer Anteil minus anteiligen Gap
              item.style.width = `calc((100% - ${gap * (currentColumns -1 )}px) / ${currentColumns})`;
            }
            item.style.marginBottom = `${gap}px`;

          })

          // Masonry initialisieren
          const masonryInstance = new Masonry(container, {

            itemSelector: ctx.itemSelector,
            columnWidth: ctx.itemSelector,
            percentPosition: true,
            gutter: gap

          })

          return masonryInstance;

      }

      // Direkt beim Aufruf einmal ausführen und auflösen
      const instance = appLayout();

      // 2. Bei jeder Fensergrößenänderung (Resize) dynamisch anpassen
      window.addEventListener("resize", () => {
        window.requestAnimationFrame(() => {

          appLayout();

        });

      });

      resolve(instance)


    })

  }

























/* -------------------------------------------------------------------------- */
/* ❌❌❌ Trash
/* -------------------------------------------------------------------------- */




/* -------------------------------------------------------------------------- */
/* Function
/* > Rebuild resp Masonry | 2 col layout
/* -------------------------------------------------------------------------- */

  async function rebuild_respMasonry_2col_layout( layout, items, columns, ctx ) {

    // console.log("⭐columns: " + columns);
    // console.log("⭐ctx: " + ctx);
    // console.log("⭐layout: " + layout);
    // console.log("⭐items: " + items);

    return new Promise( resolve => {

      // Gib dem Browser kurz Luft, falls Elemente gerade erst gerendert wurden
      setTimeout( () => {

        const gutterSize = ctx && ctx.gap !== undefined ? ctx.gap : 16;


        // 1. Hole alle direkten Kind-Elemente über den Container im Layout
        const masonryItems = layout.querySelectorAll(":scope > .m-item");
        console.log("masonryItems(l) = " + masonryItems.length );

        // 2. Setze die Breite für jedes Element (Schleife nur für Styles)
        masonryItems.forEach(item => {

          item.style.width = columns === 1
            ? '100%'
            : `calc(50% - ${gutterSize / 2}px)`;

          // Falls Masonry den vertikalen Abstand nicht automatisch berechnet,
          // dann geben wir sicherheitshalber dies mit margin-bottom an
          item.style.marginBottom = `${gutterSize}px`;

        });

        // 3. ERST HIER: Erstelle die Masonry-Instanz EINMALIG für den Container
        // (Nicht in der forEach-Schleife)
        const masonryInstance = new Masonry(layout, {

          itemSelector: '.m-item',
          columnWidth: '.m-item',
          percentPosition: true,
          gutter: gutterSize // Das steuert den horizontalen Abstand zwischen den Spalten

        })

        // 4. Gib die fertige Instanz zurück
        resolve(masonryInstance);


      }, 50);

    })

  }




  // ❌ alte Lösung - löschen
    // return new Promise( resolve => {

    //   setTimeout( () => {

    //     const gutter = 24;
    //     // const domItems = document.querySelectorAll( items );
    //     const domItems = ctx.container.querySelectorAll( ":scope > div" );

    //     console.log("domItems(l) = " + domItems.length )

    //     domItems.forEach( item => {

    //       // console.log("🥒item = " + item)

    //       item.style.width = columns === 1
    //         ? '100%'
    //         : `calc(50% - ${gutter / 2}px)`;

    //     })

    //     // create new masonry
    //     ctx.container = new Masonry( layout, {

    //       itemSelector: 'div',
    //       columnWidth:  'div',
    //       percentPosition: true,
    //       gutter: gutter

    //     })

    //     resolve( ctx.container )

    //   }, 50);

    // })
