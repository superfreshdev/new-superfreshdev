console.log("🟨 Define Mansory - Coding To Dos (1/2cols)")


/* -------------------------------------------------------------------------- */
/* DOM Elements
> Define Mansory Layout for my "mansory-category-task-ist"
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/* Function
/* > Init Resp Mansory Layout | By Max 2 Cols - 100% or 50% + 50%
/* -------------------------------------------------------------------------- */

function initRespMasonry_2col_layout( columns, masonryLayout, masonryItems ) {

  const gutter = 16;
  const items = document.querySelectorAll( masonryItems );

  items.forEach( item => {

    item.style.width = columns === 1
      ? '100%'
      : `calc(50% - ${gutter / 2}px)`;

  })

  return new Masonry( masonryLayout, {

    itemSelector: masonryItems,
    columnWidth: masonryItems,
    percentPosition: true,
    gutter: gutter

  })

}




/* -------------------------------------------------------------------------- */
/* Tutorial - How to use | define
/* -------------------------------------------------------------------------- */

// static test
// var msnry = new Masonry('.mansory-category-task-list', {

//   itemSelector: '.mansory-category-task-list > div',
//   columnWidth: '.mansory-category-task-list > div',
//   percentPosition: true,
//   gutter: 16

// })
