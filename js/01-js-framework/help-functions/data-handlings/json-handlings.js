// console.log("🟨 json-handlings.js ")

/* ------------------------------------------------------------------------------- */
/* Async Function
/* > get JSON File
/* ------------------------------------------------------------------------------- */

async function async_getJsonFile( jsonFile ) {

  console.log("async_getJsonFile")

  /* ------------------------------------------- */
  /* Step 1/1
  /* > try to get and read jsonFile
  /* > if succesful, return jsonData
  /* ------------------------------------------- */

  try {

    const response = await fetch( jsonFile )

    if( !response.ok ) {
      throw new Error(`Failed to load file: ${response.status}`)
    }

    const jsonData = await response.json();

    return new Promise(resolve => {
      resolve( jsonData );
    })

  } catch (error) {
    console.error('Error reading JSON File: ', error);
    throw error;
  }



}
