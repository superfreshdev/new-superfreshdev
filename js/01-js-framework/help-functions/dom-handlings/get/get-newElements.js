// console.log("🟨 get-newElements.js")


/* --------------------------------------------------------------------- */
/* Get New Element | Css Class + Text
/* --------------------------------------------------------------------- */

async function async_get_newElement_cssClass_text( tagName, cssClass, text ) {

  // console.log("🟨 async_get_newElement_cssClass_text")

  // create html node
  const newElement = document.createElement(tagName);

  // add css class
  newElement.classList.add(cssClass);

  // create "text node" with given text
  const newTextNode = document.createTextNode(text);

  // add "text node" to "html node"
  newElement.appendChild( newTextNode );


  return new Promise(resolve => {
    resolve( newElement );
  })

}


/* --------------------------------------------------------------------- */
/* Get New Element | Css Class
/* --------------------------------------------------------------------- */

async function async_get_newElement_cssClass( tagName, cssClass ) {

  // console.log("🟨 async_get_newElement_cssClas")

  // create html node
  const newElement = document.createElement(tagName);

  // add css class
  newElement.classList.add(cssClass);

  return new Promise(resolve => {
    resolve( newElement );
  })

}

/* --------------------------------------------------------------------- */
/* Get New Element | Tag Name
/* --------------------------------------------------------------------- */

async function async_get_newElement( tagName ) {

  // console.log("🟨 async_get_newElement")

  // create html node
  const newElement = document.createElement(tagName);

  return new Promise(resolve => {
    resolve( newElement );
  })

}

/* --------------------------------------------------------------------- */
/* Get New Element | Tag Name & Text
/* --------------------------------------------------------------------- */

async function async_get_newElement_text( tagName, text ) {

  // console.log("🟨 async_get_newElement_text")

  // create html node
  const newElement = document.createElement(tagName);

  // create "text node" with given text
  const newTextNode = document.createTextNode(text);

  // add "text node" to "html node"
  newElement.appendChild( newTextNode );


  return new Promise(resolve => {
    resolve( newElement );
  })

}

/* --------------------------------------------------------------------- */
/* Get New Img | Src + cssClass
/* --------------------------------------------------------------------- */

async function async_get_newImg_src_cssClass( srcPath, cssClass ) {

  // console.log("🟨 async_get_newImg_src_cssClass")

  // new img
  const newImg = document.createElement("img");

  // set src
  newImg.setAttribute( "src", srcPath )
  // set alt
  newImg.setAttribute( "alt", "img" )

  // add css class
  newImg.classList.add(cssClass);


  return new Promise(resolve => {
    resolve( newImg );
  })

}


/* --------------------------------------------------------------------- */
/* Get New Img | Src
/* --------------------------------------------------------------------- */

async function async_get_newImg_src( srcPath ) {

  // console.log("🟨 async_get_newImg_src")

  // new img
  const newImg = document.createElement("img");

  // set src
  newImg.setAttribute( "src", srcPath )
  // set alt
  newImg.setAttribute( "alt", "img" )


  return new Promise(resolve => {
    resolve( newImg );
  })

}

/* --------------------------------------------------------------------- */
/* Get New Link | Href, cssClass
/* --------------------------------------------------------------------- */

async function async_get_newLink_href_cssClass( hrefPath, cssClass ) {

  // console.log("🟨 async_get_newLink_href_cssClass")

  // new Link
  const newLink = document.createElement("a");

  // set href
  newLink.setAttribute( "href", hrefPath )
  // set target
  newLink.setAttribute( "target", "_blank" )

  // add css class
  newLink.classList.add(cssClass);


  return new Promise(resolve => {
    resolve( newLink );
  })

}

/* --------------------------------------------------------------------- */
/* Get New Link | Href
/* --------------------------------------------------------------------- */

async function async_get_newLink_href( hrefPath ) {

  // console.log("🟨 async_get_newLink_href_cssClass")

  // new Link
  const newLink = document.createElement("a");

  // set href
  newLink.setAttribute( "href", hrefPath )
  // set target
  newLink.setAttribute( "target", "_blank" )

  return new Promise(resolve => {
    resolve( newLink );
  })

}
