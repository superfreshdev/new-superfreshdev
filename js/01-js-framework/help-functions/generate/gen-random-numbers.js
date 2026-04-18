// console.log("🟨 get-random-numbers.js")


/* ----------------------------------------------------------------- */
/* 🟪 Universeller
/* Async Function
/* > Inkrement Array Numbers
/* ----------------------------------------------------------------- */

async function async_inkrement_arrayNumbers( arrayNumbers ) {


  for( let i=0; i < arrayNumbers.length; i++ ) {

    arrayNumbers[i] = arrayNumbers[i]+1;

  }

   return new Promise(resolve => {
    resolve( arrayNumbers );
  })

}

/* ----------------------------------------------------------------- */
/* 🟪 Universeller
/* Async Function
/* > Dekrement Array Numbers
/* ----------------------------------------------------------------- */

async function async_dekrement_arrayNumbers( arrayNumbers ) {


  for( let i=0; i < arrayNumbers.length; i++ ) {

    arrayNumbers[i] = arrayNumbers[i]-1;

  }

   return new Promise(resolve => {
    resolve( arrayNumbers );
  })

}

/* ----------------------------------------------------------------- */
/* Async Function
/* > Generate Random Number By Given Range Limit
/* ----------------------------------------------------------------- */

// e.g rangeLimit = 10, 1-10
async function async_get_randomNumber_from_rangeLimit( rangeLimit ) {

  var randomValue =  Math.floor(Math.random() * rangeLimit) + 1;

   return new Promise(resolve => {
    resolve( randomValue );
  })

}

/* ----------------------------------------------------------------- */
/* 🟪 Universeller
/* Async Function
/* > Exist Value in Array
/* ----------------------------------------------------------------- */

async function exist_value_in_array( value, givenArray ) {

  // console.log("exist_value_in_array");

  // default false
  var exist_status = false;

  if( givenArray.includes( value )  ) {

    exist_status = true;

  }

   return new Promise(resolve => {
    resolve( exist_status );
  })


}

/* ----------------------------------------------------------------- */
/* Async Function
/* > Get random Indizies by ignoring startIndizies
/* > and only get unique random indizies
/* ----------------------------------------------------------------- */

async function async_get_randomIndizies_from_rangeLimit_by_ignoring_startIndizies( ignoringIndizies, rangeLimit ) {


  var ignoreNumbers = [];

  // default
  var exist_ignoreNumber = true;
  var status_uniqueNumber = false;

  var new_randomNumber = "";
  var new_randomNumbers = [];

  var new_randomIndizies = [];


  /* ----------------------------------------------- */
  /* Given | Test Print
  /* ----------------------------------------------- */

    // console.log("⚠️⚠️⚠️| Given")
    // console.log("rangeLimit= " + rangeLimit);
    // for( let i=0; i < ignoringIndizies.length; i++ ) {
    //   console.log(i+": ignore Index= " + ignoringIndizies[i])
    // }
    // console.log("⚠️⚠️⚠️⚠️⚠️⚠️")

  /* ----------------------------------------------- */
  /* Step 1
  /* > Inkrement ignoring indizies (array indexing)
  /* > to numbers by +1 to calc random numbers
  /* > later dekrement to array index again
  /* ----------------------------------------------- */

    ignoreNumbers = await async_inkrement_arrayNumbers( ignoringIndizies )

  /* ----------------------------------------------- */
  /* Inkrement (num) | Test Print
  /* ----------------------------------------------- */

    // console.log("⚠️⚠️⚠️| Ignore Numbers ")
    // for( let i=0; i < ignoreNumbers.length; i++ ) {
    //   console.log(i+": ignore Numbers (num)= " + ignoreNumbers[i])
    // }
    // console.log("⚠️⚠️⚠️⚠️⚠️⚠️")


  /* ----------------------------------------------- */
  /* Step 2
  /* > generate random values by
  /* > ignoring given "ignoreNumbers"
  /* > and check on unique random values
  /* ----------------------------------------------- */

    for( let i=0; i < ignoreNumbers.length; i++ ) {

      // generate random Values
      new_randomNumber = await async_get_randomNumber_from_rangeLimit( rangeLimit )

      // exist "new_randomNumber" in "ignoreNumbers" ?
      exist_ignoreNumber = await exist_value_in_array( new_randomNumber, ignoreNumbers )

      // check if exist "ignoreNumbers" is false
      if( !exist_ignoreNumber ) {

        // console.log("❇️ Dont Exist in ignore = " + new_randomNumber )

        /* ----------------------------------------------------------------------- */
        // Step 2:
        // check if it is unique in "new_randomNumber"
        // because we dont like duplicate random values
        /* ----------------------------------------------------------------------- */

        // check if it is empty
        if( new_randomNumbers.length > 0 ) {

          status_uniqueNumber = await exist_value_in_array( new_randomNumber, new_randomNumbers )

          if( !status_uniqueNumber ) {

            // console.log("🔥 uniqueNumber = " + new_randomNumber )

            // add unique
           new_randomNumbers.push( new_randomNumber );

          } else {

            // try again
            // radnom value is not part of ignore
            // but random value is duplicate
            i--;

          }

        } else {

          // if it is empty add first random number
         new_randomNumbers.push( new_randomNumber );

        }

      } else {

        // try again
        // generate random value exist in ignore array
        i--;
      }


    }


    /* ----------------------------------------------- */
    /* Random Numbers | Test Print
    /* > not part of ignore numbers
    /* > ony unique randome numebrs
    /* ----------------------------------------------- */

      // console.log("⚠️⚠️⚠️⚠️⚠️⚠️")

      // for( let i=0; i < new_randomNumbers.length; i++ ) {
      //   console.log(i+": new_randomNumbers (unique)= " + new_randomNumbers[i])
      // }
      // console.log("⚠️⚠️⚠️⚠️⚠️⚠️")


  /* ----------------------------------------------- */
  /* Step 3
  /* > dekrement random values back to array indizies
  /* > to get correct datas
  /* ----------------------------------------------- */

    new_randomIndizies = await async_dekrement_arrayNumbers( new_randomNumbers )


    /* ----------------------------------------------- */
    /* Random Numbers | Test Print
    /* > not part of ignore numbers
    /* > ony unique randome numebrs
    /* ----------------------------------------------- */

      // console.log("⚠️⚠️⚠️|Final")

      // for( let i=0; i <  new_randomIndizies.length; i++ ) {
      //   console.log(i+":  new_randomIndizies= " +  new_randomIndizies[i])
      // }
      // console.log("⚠️⚠️⚠️⚠️⚠️⚠️")



  return new Promise(resolve => {
    resolve( new_randomIndizies );
  })

}


/* ----------------------------------------------------------------- */
/* Async Function
/* > Generate Random Indizes by given maxRandomIndizies
/* > with an range limit
/* ----------------------------------------------------------------- */

// e.g maxRandomIndizies = 3, rangeLimit = 10 (1-10) | 1,4,8 = dekrement to indizies | 0,3,7
async function async_get_randomIndizies_from_rangeLimit( maxRandomValues, rangeLimit ) {


  var status_uniqueNumber = false;

  var new_randomNumber = "";
  var new_randomNumbers = [];

  var new_randomIndizies = [];


  /* -------------------------------------------------------- */
  /* Step 1:
  /* > generate random numbers
  /* -------------------------------------------------------- */

  // add unicats of random numners
  for( let i=0; i < maxRandomValues; i++ ) {


    // check if random values exist ?!
    if( new_randomNumbers.length === 0 ) {

      // console.log("💚 randomValues is empty")

      // add direct without checking
      new_randomNumbers.push( Math.floor(Math.random() * rangeLimit) + 1 )

    } else {

      // console.log("🍎 new_randomNumber is not empty")

      // gen random value
      new_randomNumber = Math.floor(Math.random() * rangeLimit) + 1

      // check if random values exist ?!
      if( new_randomNumbers.includes( new_randomNumber ) ) {

        // random number exist, try again
        //  console.log("❌ Gibt es schon = " + new_randomNumber)

        // try again
        i--;

      } else {

        // console.log("⭐ Unikat = " + new_randomNumber )
        // add unicat random number
        new_randomNumbers.push( new_randomNumber )

      }

    }

  }

  // console.log("🔥 Array(length) = " + randomValues.length )

  // test prinnt
  // for( let i=0; i < numberOfRandomValues; i++ ) {
  //   console.log("Array="+ i + ": Random = " + randomValues[i])
  // }

  /* -------------------------------------------------------- */
  /* Step 2:
  /* > dekrement random numbers to array indexing
  /* -------------------------------------------------------- */

  new_randomIndizies = await async_dekrement_arrayNumbers( new_randomNumbers )

    /* -------------------------------------------------------- */
    /* Final | Test Print
    /* > dekrement random numbers to array indexing
    /* -------------------------------------------------------- */
    //  console.log("🔥🔥🔥|Final")

    //   for( let i=0; i <  new_randomIndizies.length; i++ ) {
    //     console.log(i+":  new_randomIndizies= " +  new_randomIndizies[i])
    //   }
    //   console.log("🔥🔥🔥🔥🔥🔥")



  return new Promise(resolve => {
    resolve( new_randomIndizies );
  })

}
