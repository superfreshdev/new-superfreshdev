// console.log("🟨 create-elements.js")


/* ---------------------------------------------------------------- */
/* 🟩 Async Function
/* > Create Dom Element Css Class
/* ---------------------------------------------------------------- */

  async function createDomElementCssClass( domTagName, cssClass ) {

    // Create Dom Element
    var newDomElement = document.createElement( domTagName );

    // Set Attribut - class
    newDomElement.setAttribute( "class", cssClass )

    return new Promise(resolve => {
      resolve( newDomElement );
    })

  }

/* ---------------------------------------------------------------- */
/* 🟨 Async Function
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
/* ➡️🟨🟥 Async Function
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
/* 🟨🟩 Async Function
/* > Create Div
/* ---------------------------------------------------------------- */

 // ❌
 async function asyncCreateDiv() {

  // Create Radio Element
  var newDiv = document.createElement("div");

  return new Promise(resolve => {
    resolve( newDiv );
  })

 }

 // 🟩
 async function createDiv() {

  // Create Radio Element
  var newDiv = document.createElement("div");

  return new Promise(resolve => {
    resolve( newDiv );
  })

 }

/* ---------------------------------------------------------------- */
/* 🟨🟩 Async Function
/* > Create Div Css Class
/* ---------------------------------------------------------------- */

 // ❌
 async function asyncCreateDivWithCssClass( cssClass) {

    // Create Radio Element
    var newDiv = document.createElement("div");

    // Set Attribut - class
    newDiv.setAttribute( "class", cssClass )

    return new Promise(resolve => {
      resolve( newDiv );
    })

 }

 // 🟩
 async function createDivClass( cssClass) {

    // Create Radio Element
    var newDiv = document.createElement("div");

    // Set Attribut - class
    newDiv.setAttribute( "class", cssClass )

    return new Promise(resolve => {
      resolve( newDiv );
    })

 }

 // 🟩
 async function createDivClassText( cssClass, text) {

    // Create Radio Element
    var newDiv = document.createElement("div");

    // Set Attribut - class
    newDiv.setAttribute( "class", cssClass )

    // Set Text
    newDiv.innerText = text;

    return new Promise(resolve => {
      resolve( newDiv );
    })

 }


/* ---------------------------------------------------------------- */
/* 🟨🟩 Async Function
/* > Create Div with DivText
/* ---------------------------------------------------------------- */

 // ❌
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

 // 🟩
 async function createDivDivText( text ) {

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

 // 🟩
 async function createDivCssClassDivText( cssClass, text ) {

  // Create Div
  var newDiv = document.createElement("div");

  // Add css class
  newDiv.setAttribute( "class", cssClass )

  // 2nd Div (inside with text)
  var newDivText = document.createElement("div");

  // Add Text to newDivText
  newDivText.innerText = text;

  // Add "newDivText" to "newDiv"
  newDiv.appendChild(newDivText);

  return new Promise(resolve => {
    resolve( newDiv );
  })

 }

 // 🟩
 async function createDivCssClassWithImgAndDivText( cssClass, imgSrc, imgCssClass, divText ) {

    // Create Div
    var newDiv = document.createElement("div");
    newDiv.setAttribute( "class", cssClass )

    // Create Img
    var newImg = document.createElement("img");
    newImg.setAttribute( "src" , imgSrc )
    newImg.setAttribute( "class" , imgCssClass )
    newImg.setAttribute( "alt" , "img" )

    // Add "img" to "newDiv"
    newDiv.appendChild( newImg );

    // 2nd Div (inside with text)
    var newDivText = document.createElement("div");
    newDivText.innerText = divText;

    // Add "newDivText" to "newDiv"
    newDiv.appendChild( newDivText );

    return new Promise(resolve => {
      resolve( newDiv );
    })

 }

 // 🟩 - Create Div with CSS Class & Attribute + IMG
  async function createDivCssClassAttributeWithImg( cssClass, attrTitle, imgSrc, imgCssClass ) {

    // Create Div
    var newDiv = document.createElement("div");
    newDiv.setAttribute( "class", cssClass )

    // Set Attribute Title
    newDiv.setAttribute( "title", attrTitle )

    // Create Img
    var newImg = document.createElement("img");
    newImg.setAttribute( "src" , imgSrc )
    newImg.setAttribute( "class" , imgCssClass )
    newImg.setAttribute( "alt" , "img" )

    // Add "img" to "newDiv"
    newDiv.appendChild( newImg );

    return new Promise(resolve => {
      resolve( newDiv );
    })

 }


/* ---------------------------------------------------------------- */
/* 🟩 Async Function
/* > Create Div with Text
/* ---------------------------------------------------------------- */

  // ❌
  async function asyncCreateDivWithText( text ) {

  // Create Radio Element
  var newDiv = document.createElement("div");

  // Add Text to Div
  newDiv.innerText = text;

  return new Promise(resolve => {
    resolve( newDiv );
  })

  }

  // 🟩 - Create Div with CSS Class & Attribute + IMG
  async function createDivText( text ) {

  // Create Radio Element
  var newDiv = document.createElement("div");

  // Add Text to Div
  newDiv.innerText = text;

  return new Promise(resolve => {
    resolve( newDiv );
  })

  }

/* ---------------------------------------------------------------- */
/* 🟩 Async Function
/* > Create Div with SpanText
/* ---------------------------------------------------------------- */

  // 🟩 - Create Span With CSS Class + Text
  async function createSpanCssClassText( cssClass, text ) {

  // Create Element
  var newSpan = document.createElement("span");

  // Add CSS Class
  newSpan.setAttribute( "class", cssClass );

  // Add Text to Div
  newSpan.innerText = text;

  return new Promise(resolve => {
    resolve( newSpan );
  })

  }

/* ---------------------------------------------------------------- */
/* 🟩 Async Function
/* > Create Text Node
/* ---------------------------------------------------------------- */

  // 🟩 - Create Text Node Text
  async function createTextNode( text ) {

  // Create Element
  var newTextNode = document.createTextNode( text )

  return new Promise(resolve => {
    resolve( newTextNode );
  })

  }


/* ---------------------------------------------------------------- */
/* 🟩 Async Function
/* > Create Div with Img
/* ---------------------------------------------------------------- */

 // ❌
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
/* 🟩 Async Function
/* > Create Img
/* ---------------------------------------------------------------- */

 // 🟩 - Create - Img Css Class
 async function createImgCssClass( imgPath, cssClass ) {

  // Create Img Element
  var newImg = document.createElement("img");

  // Add Attribute - src
  newImg.setAttribute( "src", imgPath );

  // Add Attribute - alt
  newImg.setAttribute( "alt", "img" );

  // Add Attribute - class
  newImg.setAttribute( "class", cssClass );


  return new Promise(resolve => {
    resolve( newImg );
  })

 }

 // 🟩 - Create - Img
 async function createImg( imgPath ) {

  // Create Img Element
  var newImg = document.createElement("img");

  // Add Attribute - src
  newImg.setAttribute( "src", imgPath );

  // Add Attribute - alt
  newImg.setAttribute( "alt", "img" );


  return new Promise(resolve => {
    resolve( newImg );
  })

 }


/* ---------------------------------------------------------------- */
/* 🟩 Async Function
/* > Create Links
/* ---------------------------------------------------------------- */

 // 🟩 - Create - Link
 async function createLink( href, text ) {

  // Create Link Element
  var newLink = document.createElement("a");

  // Add Attribute - href
  newLink.setAttribute( "href", href );

  // Add Attribute - target
  newLink.setAttribute( "target", "_blank" );

  // Set Text
  newLink.innerText = text;


  return new Promise(resolve => {
    resolve( newLink );
  })

 }


 // 🟩 - Create - Link Css Class
 async function createLink( href, cssClass, text ) {

  // Create Link Element
  var newLink = document.createElement("a");

  // Add Attribute - href
  newLink.setAttribute( "href", href );

  // Add Attribute - target
  newLink.setAttribute( "target", "_blank" );

  // Add Attribute - class
  newLink.setAttribute( "class", cssClass );

  // Set Text
  newLink.innerText = text;


  return new Promise(resolve => {
    resolve( newLink );
  })

 }

 // 🟩 - Create - Link with Img and Div Text
 async function createLinkImgDivText( href, imgSrc, imgCssClass, divText ) {

  // Create Link Element
  var newLink = document.createElement("a");

  // Add Attribute - href
  newLink.setAttribute( "href", href );

  // Add Attribute - target
  newLink.setAttribute( "target", "_blank" );

  // Add New Img
  var newImg = document.createElement("img");
  newImg.setAttribute("src", imgSrc );
  newImg.setAttribute("alt", "img");
  newImg.setAttribute("class", imgCssClass );

  // Add "newImg" to "newLink"
  newLink.appendChild(newImg);

  // Add New Div Text
  var newDivText = document.createElement("div");
  newDivText.innerText = divText;

  // Add "newDivText" to "newLink"
  newLink.appendChild(newDivText)

  return new Promise(resolve => {
    resolve( newLink );
  })

 }
