function socialMedia() {
    const socialMediaBtn = document.querySelectorAll('.display-Project');
    for (let i = 0; i < socialMediaBtn.length; i++) {
        socialMediaBtn[i].addEventListener('click', () => {
            let classContainer = socialMediaBtn[i].className;
            switch(classContainer) {
                case 'display-Project linkedin':
                    window.open('https://www.linkedin.com/in/esoja/', '_blank');
                    break;
                
               case 'display-Project github':
                    window.open('https://github.com/jdaniel-ap', '_blank');
                    break;

               case 'display-Project instagram':
                    window.open('https://www.instagram.com/jdaniel_ap/', '_blank');
                    break;

            }
        
        })
    }


}

socialMedia();