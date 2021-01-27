let nav = document.querySelector('nav');

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.classList.add('nav-dark');
  }
  else if (document.body.scrollTop < 450 || document.documentElement.scrollTop < 450) {
    nav.classList.remove('nav-dark');
  }
}


function socialMediaObject() {
  const inputMap = {
    'display-Project linkedin': 'https://www.linkedin.com/in/esoja/',
    'display-Project github': 'https://github.com/jdaniel-ap',
    'display-Project instagram': 'https://www.instagram.com/jdaniel_ap/'
  };

  const socialMediaBtn = document.querySelectorAll('.display-Project');
  for (let i = 0; i < socialMediaBtn.length; i++) {
    socialMediaBtn[i].addEventListener('click', () => {
      let classContainer = socialMediaBtn[i].className;
      return window.open(inputMap[classContainer], '_blank')
    });
  }
}
socialMediaObject() 
