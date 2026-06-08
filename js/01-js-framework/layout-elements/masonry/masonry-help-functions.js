// console.log("🟨 masonry-help-functions.js")


/* -------------------------------------------------------------------------- */
/* 🟩 Function
/* > Destroy Old Masonry Context
/* > important for DomContentLoad & Switch Content to create new
/* > Dont use in Resize Event because this event triggers to many actions
/* -------------------------------------------------------------------------- */

 function destroy_old_msnryCtx( msnryCtx ) {

    // destroy old msnry to let later
    // create new ones
    // because msnry calc new height of new container

    if( msnryCtx.container ) {
      msnryCtx.container.destroy();
      msnryCtx.container = null;

    }


 }
