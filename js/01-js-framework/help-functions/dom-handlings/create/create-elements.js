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
