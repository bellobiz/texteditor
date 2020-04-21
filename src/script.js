const lightMode = document.querySelector('.light-mode');
const darkMode = document.querySelector('.dark-mode');
const textArea = document.querySelectorAll('textarea')

const getLightMode = () => {
    for (i = 0; i <= textArea.length; i++) {
      textArea[i].style.backgroundColor = '#fff';
      textArea[i].style.color = '#444';
    }
    lightMode.style.display = 'Light';
  }

  const getDarkMode = () => {
    for (i = 0; i <= textArea.length; i++) {
      textArea[i].style.backgroundColor = '';
      textArea[i].style.color = '';
    }
    darkMode.innerHTML = 'Dark';
  }

  lightMode.addEventListener('click', getLightMode);
  darkMode.addEventListener('click', getDarkMode);