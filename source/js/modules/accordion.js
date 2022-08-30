const btns = document.querySelectorAll('.footer__button');

const accordion = () => {
  for (let btn of btns) {
    btn.classList.add('footer__button--mobile');

    btn.addEventListener('click', function () {
      const activeBtns = document.querySelectorAll('.footer__button--active');
      if (btn.classList.contains('footer__button--active')) {
        for (let activeBtn of activeBtns) {
          activeBtn.classList.remove('footer__button--active');
        }
      } else {
        for (let activeBtn of activeBtns) {
          activeBtn.classList.remove('footer__button--active');
        }
        btn.classList.add('footer__button--active');
      }
    });
  }
};

export {accordion};
