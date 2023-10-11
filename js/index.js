// Pro funkčnost Popovers
function nactiPopovers() {
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
}

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


// Dropwodn se zavře
$('.dropdown-item').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});
$(document).ready(function(){
})


const cilovyDiv = document.getElementById('obsahStranky');

//todo Nastavit
// Přidáme stav do historie prohlížeče a aktualizujeme URL
function addHistoryState(pageUrl) {
  window.history.pushState({ url: pageUrl }, "", pageUrl);
}

// Obsluha události popstate
window.addEventListener("popstate", function (event) {
  if (event && event.state && event.state.url) {
    const pageUrl = event.state.url;
    // Pokračujte v kódě, protože event a event.state jsou definované a mají vlastnost 'url'
  } else {
    // Zde můžete obsloužit situaci, kdy event nebo event.state nejsou definované nebo mají chybnou strukturu.
    console.error('Neplatný event nebo event.state');
  }
  
  // Načtěte obsah stránky na základě URL
  nacistHistoryObsah(pageUrl);
});

// Použijte tuto funkci pro načtení obsahu a aktualizaci historie prohlížeče
function nacistHistoryObsah(pageUrl) {

  // Pokud cílový div existuje, smažeme jeho stávající obsah
  if (cilovyDiv) {
    cilovyDiv.innerHTML = ''; // Vymaže obsah divu
 } else {
    console.error('Cílový div nebyl nalezen.');
    return;
 }
  // Zde načtěte obsah stránky podle URL
  fetch(pageUrl)
    .then(response => response.text())
    .then(data => {
      cilovyDiv.innerHTML = data;
      // Aktualizujte historii a URL až po úspěšném načtení obsahu
      addHistoryState(pageUrl);
    })
    .catch(error => {
      console.error('Chyba při načítání obsahu stránky:', error);
    });
}
//todo ========================



//! Funkce pro načtení obsahu z hlavni.html
function nacistObsah(idDivu) {
  // Najdeme cílový div na této stránce
  // const cilovyDiv = document.getElementById('obsahStranky');

  
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
            cilovyDiv.appendChild(obsahCilevehoDivu);
            nactiPopovers()
          } else {
              console.error(`Div s id "${idDivu}" nebyl nalezen ve stránce "index.html".`);
          }
      })
      .catch(error => {
          console.error('Nelze načíst obsah stránky "hlavni.html":', error);
      });

    }

//! Funkce pro načtení obsahu ze servers.html
function nacistObsahServers(idDivu) {
  // Najdeme cílový div na této stránce
  // const cilovyDiv = document.getElementById('obsahStranky');
  
  // Pokud cílový div existuje, smažeme jeho stávající obsah
  if (cilovyDiv) {
      cilovyDiv.innerHTML = ''; // Vymaže obsah divu
  } else {
      console.error('Cílový div nebyl nalezen.');
      return;
  }

  // Načteme obsah stránky "index.html" pomocí AJAX nebo fetch
  fetch('servers.html')
  .then(response => response.text())
  .then(data => {
      // Vytvoříme dočasný element pro zpracování HTML obsahu
      const tempElement = document.createElement('div');
      tempElement.innerHTML = data;

      // Najdeme obsah cílového divu ze stránky "index.html" a vložíme ho do cílového divu na této stránce
      const obsahCilevehoDivu = tempElement.querySelector(`#${idDivu}`);
      if (obsahCilevehoDivu) {
        cilovyDiv.appendChild(obsahCilevehoDivu);
        nactiPopovers()
      } else {
          console.error(`Div s id "${idDivu}" nebyl nalezen ve stránce "servers.html".`);
      }
  })
  .catch(error => {
      console.error('Nelze načíst obsah stránky "servers.html":', error);
  });   
}

//! Funkce pro načtení obsahu ze ateam.html
function nacistObsahATeam(idDivu) {
  // Najdeme cílový div na této stránce
  // const cilovyDiv = document.getElementById('obsahStranky');
  
  // Pokud cílový div existuje, smažeme jeho stávající obsah
  if (cilovyDiv) {
      cilovyDiv.innerHTML = ''; // Vymaže obsah divu
  } else {
      console.error('Cílový div nebyl nalezen.');
      return;
  }

  // Načteme obsah stránky "index.html" pomocí AJAX nebo fetch
  fetch('ateam.html')
  .then(response => response.text())
  .then(data => {
      // Vytvoříme dočasný element pro zpracování HTML obsahu
      const tempElement = document.createElement('div');
      tempElement.innerHTML = data;

      // Najdeme obsah cílového divu ze stránky "index.html" a vložíme ho do cílového divu na této stránce
      const obsahCilevehoDivu = tempElement.querySelector(`#${idDivu}`);
      if (obsahCilevehoDivu) {
        cilovyDiv.appendChild(obsahCilevehoDivu);
        nactiPopovers()
      } else {
          console.error(`Div s id "${idDivu}" nebyl nalezen ve stránce "ateam.html".`);
      }
  })
  .catch(error => {
      console.error('Nelze načíst obsah stránky "ateam.html":', error);
  });   
}


 
//* Když je obsahStranky prázdný, načte sekci "informace"
if (cilovyDiv.innerHTML === "") {
  // nacistObsah("informace")
  nacistObsahATeam('aTeam')
}


//? Dropdowb on hover
// $(document).ready(function(){
//   $('.dropdown').hover(function(){
//     $(this).find('.dropdown-menu')
//     .stop(true, true).delay(100).fadeIn(200);
//   }, function(){
//     $(this).find('.dropdown-menu')
//     .stop(true, true).delay(100).fadeOut(200);
//   });
// });

//? Staré načítání stránek
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