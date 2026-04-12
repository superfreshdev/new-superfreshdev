// console.log("🟨 year-footer.js")


/* ---------------------------------------------------------------------- */
/* Dom Element
/* ---------------------------------------------------------------------- */

var div_year_footer = document.getElementById("copyright-year-footer")


/* ---------------------------------------------------------------------- */
/* Update acutally Year
/* ---------------------------------------------------------------------- */

var txtYear = getYear();
set_text_to_element( txtYear, div_year_footer )
