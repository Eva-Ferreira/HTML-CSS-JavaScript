var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let form = document.querySelector('form')
  form.addEventListener('submit', function (event) {
      event.preventDefault();
      console.log('Envoi du form detecté !')
  
      let email = document.querySelector('#email')
  
      if (email.value == '') {
          console.log("invalide")
      } else {
          email.classList.add('success')
      }
  
      let errorContainer = document.querySelector('.message-error')
      let errorList = document.querySelector('.message-error ul')
  
      errorList.innerHTML = ""
      errorContainer.classList.remove('visible')
  
      if (email.value == '') {
          errorContainer.classList.add('visible')
          email.classList.remove('success')
  
          let err = document.createElement('li')
          err.innerText = "Le champ email ne peut pas être vide"
          errorList.appendChild(err)
      } else {
          email.classList.add('success')
      }
  
      let pseudo = document.querySelector('#pseudo')
  
      if(pseudo.value.length < 6) {
  
          errorContainer.classList.add('visible')
          pseudo.classList.remove('success')
  
          let err = document.createElement('li')
          err.innerText = "Le champ pseudo doit contenir au moins 6 caractères"
  
          errorList.appendChild(err)
  
      } else {
          pseudo.classList.add('success')
      }
  
  })

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  alert('les citrons sont acide')
  let title = document.getElementById('title')
  title.innerHTML = "Contenu des commercants"
  
  let maintitle = document.querySelector('#main-title')
  console.log(title)
  maintitle.addEventListener('click', function () {
      if (this.classList.contains('red')) {
          this.classList.remove('red')
          console.log('classe retirée')
      } else {
          this.classList.add('red')
          console.log('classe ajoutée')
      }
  
  })

  let accordions = document.querySelectorAll(".accordeon")
console.log('a')
accordions.forEach(function (item) {
    console.log('b')
    item.addEventListener('click', function () {
        this.classList.toggle('open')
        console.log('c')
    })
})


function toggleMode(){
  const body = document.querySelector('body');
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')){
    localStorage.setItem('mode','dark');
  }else{
    localStorage.setItem('mode', 'white');
  }
}

const saveMode = localStorage.getItem('mode');
if (saveMode === 'dark'){
  document.querySelector('body').classList.add('dark-mode');
}