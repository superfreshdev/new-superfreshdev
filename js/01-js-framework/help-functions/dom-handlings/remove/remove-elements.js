// console.log("🟨 remove-elements.js")


/* --------------------------------------------------------- */
/* Function
/* 🟩 Remove | All Elements Except ID
/* --------------------------------------------------------- */

  async function removeElementsExceptId( removeElements, fromElement, keepId ) {

    // console.log("🟨 removeElementsExceptId()")
    // console.log("removeElements(length): " + removeElements.length )
    // console.log("fromElement: " + fromElement )
    // console.log("keepId: " + keepId )

    for( let i=0; i < removeElements.length; i++ ) {

      // console.log("🌵 Delete ?: " +  removeElements[i].getAttribute("for") );

      if( removeElements[i].getAttribute("id") !== keepId ) {

        // Delete Element
        removeElements[i].remove();

      } else {

        // console.log("❌ No Delete")

      }

    }

    // var deleteDomElements = domElement.querySelectorAll( itemsSelector );
    // var lengthDomElements = deleteDomElements.length;

    /* ---------------------------------------------------------- */
    /* Step 1:
    /* > Delete "itemsSelector" from "domElement" if exists
    /* ---------------------------------------------------------- */

      // console.log("⭐ lengthDomElements = " + lengthDomElements )

      // if( lengthDomElements > 0 ) {

      //   // console.log("🧼 Delete Old Dom Items")
      //   deleteDomElements.forEach(element => element.remove());

      // }


    return new Promise(resolve => {
      resolve( );
    })


  }

/* --------------------------------------------------------- */
/* Function
/* 🟩 Remove | All Labels Except ID
/* --------------------------------------------------------- */

  async function removeLabelsExceptId( removeLabels, fromElement, keepId ) {

    // console.log("🟨 removeElementsExceptId()")
    // console.log("removeElements(length): " + removeElements.length )
    // console.log("fromElement: " + fromElement )
    // console.log("keepId: " + keepId )

    for( let i=0; i < removeLabels.length; i++ ) {

      // console.log("🌵 Delete ?: " +  removeElements[i].getAttribute("for") );

      if( removeLabels[i].getAttribute("for") !== keepId ) {

        // Delete Element
        removeLabels[i].remove();

      } else {

        // console.log("❌ No Delete")

      }

    }

    // var deleteDomElements = domElement.querySelectorAll( itemsSelector );
    // var lengthDomElements = deleteDomElements.length;

    /* ---------------------------------------------------------- */
    /* Step 1:
    /* > Delete "itemsSelector" from "domElement" if exists
    /* ---------------------------------------------------------- */

      // console.log("⭐ lengthDomElements = " + lengthDomElements )

      // if( lengthDomElements > 0 ) {

      //   // console.log("🧼 Delete Old Dom Items")
      //   deleteDomElements.forEach(element => element.remove());

      // }


    return new Promise(resolve => {
      resolve( );
    })


  }
