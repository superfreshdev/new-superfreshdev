// console.log("🟨 get-random-numbers.js")


/* ----------------------------------------------------------------- */
/* Async Function
/* > Generate Random Numbers By Given Range
/* ----------------------------------------------------------------- */

async function async_get_randomNumbers_inRange( numberOfRandomValues, rangeLimit ) {

  // console.log("numberOfRandomValues = " + numberOfRandomValues );
  // console.log("rangeLimit = " + rangeLimit );

  // var randomValue = Math.floor(Math.random() * 10) + 1;
  // console.log("randomValue(Single): " + randomValue );

  var randomValues = [];
  var genRandomValue = "";

  // add unicats of random numners
  for( let i=0; i < numberOfRandomValues; i++ ) {


    // check if random values exist ?!
    if( randomValues.length === 0 ) {

      // console.log("💚 randomValues is empty")

      // add direct without checking
      randomValues.push( Math.floor(Math.random() * rangeLimit) + 1 )

    } else {

      // console.log("🍎 randomValues is not empty")

      // gen random value
      genRandomValue = Math.floor(Math.random() * rangeLimit) + 1

      // check if random values exist ?!
      if( randomValues.includes( genRandomValue ) ) {

        // random number exist, try again
        //  console.log("❌ Gibt es schon = " + genRandomValue)

        // try again
        i--;

      } else {

        // console.log("⭐ Unikat = " + genRandomValue )
        // add unicat random number
        randomValues.push( genRandomValue )

      }

    }

  }

  // console.log("🔥 Array(length) = " + randomValues.length )

  // test prinnt
  // for( let i=0; i < numberOfRandomValues; i++ ) {
  //   console.log("Array="+ i + ": Random = " + randomValues[i])
  // }



  return new Promise(resolve => {
    resolve( randomValues );
  })

}
