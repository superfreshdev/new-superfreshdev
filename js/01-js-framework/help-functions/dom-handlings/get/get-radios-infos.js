// console.log("🟨 get-radio-infos.js")


/* ---------------------------------------------------------------- */
/* Async Function
/* > Get checked Radio Index or Get Zero Index 0
/* ---------------------------------------------------------------- */

async function async_get_checked_radioIndex_or_zeroIndex( radios ) {

  // console.log("🟪 async_get_checked_radioIndex_or_zeroIndex()")

  // default by any radio checked
  var checkedRadioIndex = 0;

    for( let i=0; i < radios.length; i++ ) {

      if( radios[i].checked == true ) {

        // console.log("➡️ radioIndex = " + i + " | is checked ")

        // update checked radio index
        checkedRadioIndex = i;

        // end of for
        i = radios.length;

      }

    }

    return new Promise(resolve => {
    resolve( checkedRadioIndex );
  })


}

/* ---------------------------------------------------------------- */
/* Async Function
/* > Get checked Radio Index
/* ---------------------------------------------------------------- */

async function async_get_checked_radioIndex( radios ) {

  var checked_index = null;

   for( let i=0; i < radios.length; i++ ) {

    if( radios[i].checked == true ) {

      // update checked radio index
      checked_index = i;

      // end of for
      i = radios.length;

    }

  }

  return new Promise(resolve => {
    resolve( checked_index );
  })

}
