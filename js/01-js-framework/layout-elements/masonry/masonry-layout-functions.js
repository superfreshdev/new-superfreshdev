// console.log("🟨 masonry-layout-functions.js")


/* -------------------------------------------------------------------------- */
/* 🟩 | 🔩⛑️ Help Function
/* > Get Column Number by Comparing Breakpoints With Screen Width
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
/* 🟩 | 🔩 Function
/* > Init Responsive Masonry
/* -------------------------------------------------------------------------- */

  async function initResponsiveMasonry(ctx) {

    return new Promise((resolve) => {

      // 1 - Spaltenanzahl dynamisch anhand der aktuellen Fensterbreite bestimmen
      // Eine innere Funktion, die das Layout berechnet
      const appLayout = () => {

        let currentColumns = 1;
        const screenWidth = window.innerWidth;

        // 1. Breakpoints ermitteln und Spalten Anzahl festlegen
        let breakpoints = ctx.breakpoints;
        currentColumns = getColumnsForCurrentWidth(breakpoints)
        console.log("📐 [Resp - Masonry Layout ] - Set Columns = " + currentColumns )

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
      // Vorteil: Resize Event ist direkt im Context der Methode und
      // wird überall registriert, wenn diese Methode augerufen wird
      window.addEventListener("resize", () => {
        window.requestAnimationFrame(() => {

          appLayout();

        });

      });

      resolve(instance)


    })

  }
