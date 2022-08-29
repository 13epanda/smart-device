const changeVisibility = () => {
  const buttons = document.querySelectorAll('.btn-full');
  for (let button of buttons) {
    button.addEventListener('click', function () {
      const elementClass = button.dataset.visibilityClass;
      const elements = document.querySelectorAll(`.${elementClass}`);
      for (let element of elements) {
        if (element.style.display === 'none') {
          element.style.display = 'block';
          button.innerHTML = 'Свернуть';
        } else {
          element.style.display = 'none';
          button.innerHTML = 'Подробнее';
        }
      }
    });
  }
};

export {changeVisibility};
