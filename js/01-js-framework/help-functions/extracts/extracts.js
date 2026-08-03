console.log("🟨 extracts.js")


/* -------------------------------------------------------------------- */
/* 🔩⛑️ Help Functions
/* -------------------------------------------------------------------- */

  // ➡️🟥 Get - Last Group Segment
 function getLastGroupSegment( text, delimiter ) {

    // console.log("🔩⛑️ getLastGroupSegment()")
    // console.log("🔺 text: " + text)
    // console.log("🔺 delimiter: " + delimiter)

    var lastIndex = text.lastIndexOf(delimiter)
    var lastSegment = "";

    // Fallback if delimiter dont exist
    if(lastIndex === -1) return text;

    // Return Last Group Segment
    lastSegment = text.substring( lastIndex + 1 )
    return lastSegment;

  }
