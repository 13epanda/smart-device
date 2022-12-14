const changeVisibility = () => {
  const buttons = document.querySelectorAll('.btn-full');
  for (let button of buttons) {
    const elementClass = button.dataset.visibilityClass;
    const elements = document.querySelectorAll(`.${elementClass}`);
    const elementsMobile = document.querySelectorAll(`.${elementClass}-tablet`);
    elements.forEach((el) => {
      el.classList.add(`${elementClass}--closed`);
    });
    elementsMobile.forEach((el) => {
      el.classList.add(`${elementClass}-tablet--closed`);
    });
    button.addEventListener('click', function () {
      for (let element of elements) {
        if (element.classList.contains(`${elementClass}--closed`)) {
          element.classList.remove(`${elementClass}--closed`);
          element.classList.add(`${elementClass}--opened`);
          button.innerHTML = 'Свернуть';
          elementsMobile.forEach((el) => {
            el.classList.remove(`${elementClass}-tablet--closed`);
            el.classList.add(`${elementClass}-tablet--opened`);
          });
        } else {
          element.classList.add(`${elementClass}--closed`);
          element.classList.remove(`${elementClass}--opened`);
          button.innerHTML = 'Подробнее';
          elementsMobile.forEach((el) => {
            el.classList.remove(`${elementClass}-tablet--opened`);
            el.classList.add(`${elementClass}-tablet--closed`);
          });
        }
      }
    });
  }
};

export {changeVisibility};
