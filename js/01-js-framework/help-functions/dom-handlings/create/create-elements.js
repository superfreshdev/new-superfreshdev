// console.log("🟨 create-elements.js")


/* ---------------------------------------------------------------- */
/* Async Function
/* > Create Radio
/* ---------------------------------------------------------------- */

 async function asyncCreateRadio( id, name, checked ) {

    // console.log("🟪 asyncCreateRadio()")
    // console.log("id: " + id)
    // console.log("name: " + name)
    // console.log("checked: " + checked)

    // Create Radio Element
    var newRadio = document.createElement("input");

    // Add Values
    newRadio.type = "radio";
    newRadio.id = id;
    newRadio.name = name;

    // add checked index if it isnt -1
    if( checked == true ) {

      newRadio.checked = true;

    }


  return new Promise(resolve => {
      resolve( newRadio );
    })

 }

/* ---------------------------------------------------------------- */
/* ➡️🟥 Async Function
/* > Create Label
/* ---------------------------------------------------------------- */

  async function asyncCreateLabel( strFor, strCssClass ) {

    console.log("⭐ strFor: " + strFor )
    console.log("⭐ strCssClass : " + strCssClass  )

    // Create Radio Element
    var newLabel = document.createElement("label");

    // Set Attribut for
    newLabel.setAttribute( "for", strFor )

    // Set Attribut class
    newLabel.setAttribute( "class", strCssClass )

    return new Promise(resolve => {
      resolve( newLabel );
    })

 }

/* ---------------------------------------------------------------- */
/* 🟩 Async Function
/* > Create Div
/* ---------------------------------------------------------------- */

 async function asyncCreateDiv() {

  // Create Radio Element
  var newDiv = document.createElement("div");

  return new Promise(resolve => {
    resolve( newDiv );
  })

 }

/* ---------------------------------------------------------------- */
/* 🟩 Async Function
/* > Create Div Css Class
/* ---------------------------------------------------------------- */

  async function asyncCreateDivWithCssClass( cssClass) {

    // Create Radio Element
    var newDiv = document.createElement("div");

    // Set Attribut - class
    newDiv.setAttribute( "class", cssClass )

    return new Promise(resolve => {
      resolve( newDiv );
    })

 }


/* ---------------------------------------------------------------- */
/* 🟩 Async Function
/* > Create Div with DivText
/* ---------------------------------------------------------------- */

 async function asyncCreateDivWithDivText( text ) {

  // Create Radio Element
  var newDiv = document.createElement("div");

  var newDivText = document.createElement("div");

  // Add Text to newDivText
  newDivText.innerText = text;

  // Add "newDivText" to "newDiv"
  newDiv.appendChild(newDivText);

  return new Promise(resolve => {
    resolve( newDiv );
  })

  }

/* ---------------------------------------------------------------- */
/* 🟩 Async Function
/* > Create Div with Text
/* ---------------------------------------------------------------- */

  async function asyncCreateDivWithText( text ) {

  // Create Radio Element
  var newDiv = document.createElement("div");

  // Add Text to Div
  newDiv.innerText = text;

  return new Promise(resolve => {
    resolve( newDiv );
  })

  }

/* ---------------------------------------------------------------- */
/* 🟥 Async Function
/* > Create Div with SpanText
/* ---------------------------------------------------------------- */

/* ---------------------------------------------------------------- */
/* 🟩 Async Function
/* > Create Div with Img
/* ---------------------------------------------------------------- */

  async function asyncCreateDivWithImg( imgPath, cssClass ) {

    // Create Radio Element
    var newDiv = document.createElement("div");

    // Create Img Element
    var newImg = document.createElement("img");

    // Add Attribute - src
    newImg.setAttribute( "src", imgPath );

    // Add Attribute - alt
    newImg.setAttribute( "alt", "img" );

    // Add Attribute - class
    newImg.setAttribute( "class", cssClass );


    // Final: Combine Div & Img
    newDiv.appendChild( newImg );


  return new Promise(resolve => {
    resolve( newDiv );
  })

 }



/* ---------------------------------------------------------------- */
/* 🟥 Async Function
/* > Create Img
/* ---------------------------------------------------------------- */
