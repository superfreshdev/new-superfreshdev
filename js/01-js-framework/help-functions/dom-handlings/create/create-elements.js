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
/* 🟥 Async Function
/* > Create Div Css Class
/* ---------------------------------------------------------------- */

/* ---------------------------------------------------------------- */
/* 🟥 Async Function
/* > Create Div with DivText
/* ---------------------------------------------------------------- */

/* ---------------------------------------------------------------- */
/* 🟥 Async Function
/* > Create Div with SpanText
/* ---------------------------------------------------------------- */

/* ---------------------------------------------------------------- */
/* 🟥 Async Function
/* > Create Div with Img
/* ---------------------------------------------------------------- */
