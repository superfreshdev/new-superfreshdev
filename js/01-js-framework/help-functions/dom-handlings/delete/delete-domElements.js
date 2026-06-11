// console.log("🟨 delete-domElements.js")


/* -------------------------------------------------------------------------- */
/* Function
/* Delete | Dom Elements
/* -------------------------------------------------------------------------- */

  async function deleteDomElements( domElement, itemsSelector ) {

    // console.log("cleanupDomElements()")

    var deleteDomElements = domElement.querySelectorAll( itemsSelector );
    var lengthDomElements = deleteDomElements.length;

    /* ---------------------------------------------------------- */
    /* Step 1:
    /* > Delete "itemsSelector" from "domElement" if exists
    /* ---------------------------------------------------------- */

      // console.log("⭐ lengthDomElements = " + lengthDomElements )

      if( lengthDomElements > 0 ) {

        // console.log("🧼 Delete Old Dom Items")
        deleteDomElements.forEach(element => element.remove());

      }


    return new Promise(resolve => {
      resolve( );
    })


  }
