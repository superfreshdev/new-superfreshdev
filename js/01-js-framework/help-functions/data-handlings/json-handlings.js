// console.log("🟨 json-handlings.js ")

/* ------------------------------------------------------------------------------- */
/* Async Function
/* > get JSON File
/* ------------------------------------------------------------------------------- */

  // ❌ old
  async function async_getJsonFile( jsonFile ) {

    // console.log("async_getJsonFile")

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

  // ❇️ New
  async function getJsonObjectFromFile( pathJson ) {

    // console.log("getJsonObjectFromFile")

    /* ------------------------------------------- */
    /* Step 1/1
    /* > try to get and read jsonFile
    /* > if succesful, return jsonData
    /* ------------------------------------------- */

    try {

      const response = await fetch( pathJson )

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

  // 🟩 Get Key Data from Json Array Object
  async function getKeyDataFromJsonArrayObject( keyname, jsonArrayObject ) {

    console.log("🔩⛑️ getKeyDataFromJsonArrayObject() ")
    // console.log("🔺 keyname: " + keyname )
    // console.log("🔺 jsonArrayObject: " + jsonArrayObject )

    // look if key exist
    var keyData = jsonArrayObject[keyname] || null;

    if(keyData) {
      console.log("keyname:" + keyname + " - was found");
    }

    return new Promise(resolve => {
      resolve( keyData );
    })

  }
