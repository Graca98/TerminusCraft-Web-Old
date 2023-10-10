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




// $('#btnInformace,#btnInformaceMain').click(function(e){
//   $("#pravidla,#download,#kontakt").addClass("d-none")
//   $("#informace").removeClass("d-none")
// })
// $('#btnPravidla').click(function(){
//     $("#informace,#download,#kontakt").addClass("d-none")
//     $("#pravidla").removeClass("d-none")
// })
// $('#btnDownload').click(function(){
//     $("#informace,#pravidla,#kontakt").addClass("d-none")
//     $("#download").removeClass("d-none")
// })
// $('#btnKontakt').click(function(){
//     $("#informace,#pravidla,#download").addClass("d-none")
//     $("#kontakt").removeClass("d-none")
// })


// window.addEventListener("DOMContentLoaded", (e) => {
//   const buttons = ["btnInformace", "btnPravidla", "btnDownload", "btnKontakt"];
//   const sections = ["informace", "pravidla", "download", "kontakt"];
  
//   buttons.forEach((button, index) => {
//       document.getElementById(button).addEventListener("click", function(e) {
//           sections.forEach((section) => {
//               document.getElementById(section).classList.add("d-none");
//           });
//           document.getElementById(sections[index]).classList.remove("d-none");
//       });
//   });

// })

// function nacistPravidla() {
//   // Načteme obsah stránky 1 pomocí AJAX nebo fetch
//   fetch('index.html')
//       .then(response => response.text())
//       .then(data => {
//           // Vložíme obsah stránky 1 do divu na stránce 2
//           document.getElementById('test1').innerHTML = data;
//       })
//       .catch(error => {
//           console.error('Nelze načíst obsah stránky 1:', error);
//       });
// }

//* Funkce pro načtení obsahu divu obsahStranky1 ze stránky 1
// function nacistPravidla() {
//   // Načteme obsah stránky 1 pomocí AJAX nebo fetch
//   fetch('hlavni.html')
//       .then(response => response.text())
//       .then(data => {
//           // Vytvoříme dočasný element pro zpracování HTML obsahu
//           const tempElement = document.createElement('div');
//           tempElement.innerHTML = data;

//           // Najdeme obsah divu obsahStranky1 a vložíme ho do divu na stránce 2
//           const obsahDivuStranky1 = tempElement.querySelector('#pravidla');
//           if (obsahDivuStranky1) {
//               let div = document.getElementById('obsahStranky')
//               div.innerHTML = ""
//               div.innerHTML = obsahDivuStranky1.innerHTML;
//           } else {
//               console.error('Div s id "obsahStranky1" nebyl nalezen ve stránce 1.');
//           }
//       })
//       .catch(error => {
//           console.error('Nelze načíst obsah stránky 1:', error);
//       });
// }

// Dropwodn se zavře
$('.dropdown-item').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});
$(document).ready(function(){
})


// Funkce pro načtení obsahu do cílového divu
function nacistObsah(idDivu) {
  // Najdeme cílový div na této stránce
  const cilovyDiv = document.getElementById('obsahStranky');
  
  // Pokud cílový div existuje, smažeme jeho stávající obsah
  if (cilovyDiv) {
      cilovyDiv.innerHTML = ''; // Vymaže obsah divu
  } else {
      console.error('Cílový div nebyl nalezen.');
      return;
  }

  // Načteme obsah stránky "index.html" pomocí AJAX nebo fetch
  fetch('hlavni.html')
      .then(response => response.text())
      .then(data => {
          // Vytvoříme dočasný element pro zpracování HTML obsahu
          const tempElement = document.createElement('div');
          tempElement.innerHTML = data;

          // Najdeme obsah cílového divu ze stránky "index.html" a vložíme ho do cílového divu na této stránce
          const obsahCilevehoDivu = tempElement.querySelector(`#${idDivu}`);
          if (obsahCilevehoDivu) {
              cilevyDiv.appendChild(obsahCilevehoDivu);
          } else {
              console.error(`Div s id "${idDivu}" nebyl nalezen ve stránce "index.html".`);
          }
      })
      .catch(error => {
          console.error('Nelze načíst obsah stránky "hlavni.html":', error);
      });
}







// const buttons = ["btnInformace", "btnInformaceMain", "btnPravidla", "btnDownload", "btnKontakt"];
// const sections = ["informace", "pravidla", "download", "kontakt"];

// buttons.forEach((button, index) => {
//     document.getElementById(button).addEventListener("click", function(e) {
//         sections.forEach((section) => {
//             document.getElementById(section).classList.add("d-none");
//         });
//         document.getElementById(sections[index]).classList.remove("d-none");
//     });
// });

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