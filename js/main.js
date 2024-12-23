// On button click  - show menu
// When menu opened - On button click => hide menu

//Btn - mobile-menu-btn
// Nav - main block

const navElement = document.querySelector('.nav');
const navBtnElement = navElement.querySelector('.mobile-menu-btn')
const showMenuActiveClassName = 'nav-visible';

console.log(`
  navElement: ${navElement},
  navBtnElement: ${navBtnElement}`);


function toggleMenuState() {
  
  // Opened state
  if (navElement.classList.contains(showMenuActiveClassName)) {
    navElement.classList.remove(showMenuActiveClassName);
    return;
  }

  //Close state
  navElement.classList.add(showMenuActiveClassName);
  }

navBtnElement.addEventListener('click', toggleMenuState);