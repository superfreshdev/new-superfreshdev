// console.log("🟨 delete-domElements.js")


/* -------------------------------------------------------------------------- */
/* Function
/* Delete | Dom Elements
/* ⁉️⁉️⁉️
/* -------------------------------------------------------------------------- */

  // ❌
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

  // 🟩 Delete Tag Elements
  async function deleteTagElements( tagName, container ) {

    // console.log("deleteTagElements()")
    // console.log("➡️ tagName: " + tagName )
    // console.log("➡️ container: " + container )

    // Delete All if minimum one dom element exist
    return new Promise(resolve => {

      if(container) {

        // only direct children from container
        const selector = `:scope > ${tagName}`;
        const elements = container.querySelectorAll(selector);

        // try to delete if exist
        if( elements.length > 0) {

           console.log("🧹Delete all tag-names from container ")

          elements.forEach(element => {
           element.remove();
          })

        } else {
          console.log("✋ No Delete Process Necessary (tagNames from container) - ")
        }

      }

      resolve( );
    })

  }

   // 🟩 Delete Tag Elements by Css Class
  async function deleteTagElementsByCssClass( cssClass, container ) {

    // console.log("deleteTagElementsByCssClass()")
    // console.log("➡️ tagName: " + tagName )
    // console.log("➡️ container: " + container )

    // Delete All if minimum one dom element exist
    return new Promise(resolve => {

      if(container) {

        // only direct children from container
        const selector = `:scope > .${cssClass}`;
        const elements = container.querySelectorAll(selector);

        // try to delete if exist
        if( elements.length > 0) {

           console.log("🧹Delete all css class from container ")

          elements.forEach(element => {
           element.remove();
          })

        } else {
          console.log("✋ No Delete Process Necessary (tagNames css class from container) - ")
        }

      }

      resolve( );
    })

  }
