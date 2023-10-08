// Pro funkčnost Popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// Zkopíruje text buttonu
function copyIp() {
  let copyIp = document.getElementById("serverIP");
  navigator.clipboard.writeText(copyIp.innerText)
  // Popover zmizí za 5s
  setTimeout(function() {
    const popover = bootstrap.Popover.getInstance(copyIp);
    if (popover) {
      popover.hide();
    }
  }, 5000);
}



// const navLinks = document.querySelectorAll('.dropdown-item')
// const menuToggle = document.getElementById('navbarTogglerDemo01')
// const navBtnToggler = document.getElementById('nav-btn-toggler')
// if (navBtnToggler.ariaExpanded === "true") {
//   const bsCollapse = new bootstrap.Collapse(menuToggle)
//   navLinks.forEach((l) => {
//       l.addEventListener('click', () => { bsCollapse.toggle() })
//   })
// }




$('#btnInformace,#btnInformaceMain').click(function(e){
  $("#pravidla,#download,#kontakt").addClass("d-none")
  $("#informace").removeClass("d-none")
})
$('#btnPravidla').click(function(){
    $("#informace,#download,#kontakt").addClass("d-none")
    $("#pravidla").removeClass("d-none")
})
$('#btnDownload').click(function(){
    $("#informace,#pravidla,#kontakt").addClass("d-none")
    $("#download").removeClass("d-none")
})
$('#btnKontakt').click(function(){
    $("#informace,#pravidla,#download").addClass("d-none")
    $("#kontakt").removeClass("d-none")
})

// Dropwodn se zavře
$('.dropdown-item').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});
$(document).ready(function(){
})






//! Dropdowb on hover
// $(document).ready(function(){
//   $('.dropdown').hover(function(){
//     $(this).find('.dropdown-menu')
//     .stop(true, true).delay(100).fadeIn(200);
//   }, function(){
//     $(this).find('.dropdown-menu')
//     .stop(true, true).delay(100).fadeOut(200);
//   });
// });