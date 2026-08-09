// console.log("🟨 get-radio-infos.js")


/* ---------------------------------------------------------------- */
/* Async Function
/* > Get checked Radio Index or Get Zero Index 0
/* ---------------------------------------------------------------- */

  // ❌ bad style
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

  // ❌ bad style
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


/* ---------------------------------------------------------------- */
/* Async Function
/* > Get Checked Status
/* ---------------------------------------------------------------- */

  // 🟩
  async function getCheckedStatus( checkElement ) {

    // console.log("getCheckedStatus()")
    // console.log( "checkElement: " + checkElement )

    var checkedStatus = -1;
    checkedStatus = checkElement.checked;

    return new Promise(resolve => {
      resolve( checkedStatus );
    })

  }

/* ---------------------------------------------------------------- */
/* Async Function
/* > isOneRadioChecked( radios)
/* ---------------------------------------------------------------- */

  // 🟩
  async function isAnyRadioChecked( radios ) {

    // console.log("isAnyRadioChecked()")
    // console.log( "radios: " + radios )

    var checked = false;

    for( let i=0; i < radios.length; i++ ) {

      if( radios[i].checked == true ) {

        checked = true;
        i = radios.length;

      }

    }

    return new Promise(resolve => {
      resolve( checked );
    })

  }
