/* -------------------------------------------------------------------- */
// console.log("🟨 format-stylings.js")
/* -------------------------------------------------------------------- */

/* --------------------------------------------------------- */
/*  Get Format 2 Numer Styles
/* > e.g 1 = 01 , 2 = 02 , ...
/* --------------------------------------------------------- */

  // ❌ old
  async function asyncGetTwoNumbersFormat( number ) {

    // set 0-Prefix by 1-9
    if( number > 0 && number < 10 ) {

      number = "0"+number;

    }

    return new Promise(resolve => {
      resolve( number );
    })

  }

  // 🟩 format 1-9 = 01,02,...
  async function formatCountingNumberZeroPadded( number ) {

    // set 0-Prefix by 1-9
    if( number > 0 && number < 10 ) {

      number = "0"+number;

    }

    return new Promise(resolve => {
      resolve( number );
    })

  }
