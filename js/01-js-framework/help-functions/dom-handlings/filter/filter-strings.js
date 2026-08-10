// console.log("🟨 filter-strings.js")


/* ---------------------------------------------------------------- */
/* Async Function
/* > Substring Element from String Element
/* ---------------------------------------------------------------- */

  // 🟩
  async function substringAfter( stringIndicator, text ) {

    // console.log("substringAfter()")
    // console.log("stringIndicator:" + stringIndicator);
    // console.log("text:" + text)

    // codings-docs-radios-nav-web-dev

    var newSubstring = "";

    // Get Position from Start Index Indicator from text
    var startIndexIndicator = text.indexOf(stringIndicator);
    // console.log("startIndexIndicator: " + startIndexIndicator)

    // Get Position from End Index Indicator from text
    var endIndexIndicator = stringIndicator.length;
    // console.log("endIndexIndicator: " + endIndexIndicator )

    // Start Indicator should be exist
    if( startIndexIndicator !== -1 ) {
      // cut from indexIndicator in newSubstring
      newSubstring = text.substring( startIndexIndicator + endIndexIndicator )
    }


    return new Promise(resolve => {
        resolve( newSubstring );
    })

  }
