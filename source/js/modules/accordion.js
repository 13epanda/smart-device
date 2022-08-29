const btns = document.querySelectorAll('.footer_button');

const accordion = () => {
  for (let btn of btns) {
    btn.classList.add('footer_button--mobile');

    btn.addEventListener('click', function () {
      const activeBtns = document.querySelectorAll('.footer_button--active');
      if (btn.classList.contains('footer_button--active')) {
        for (let activeBtn of activeBtns) {
          activeBtn.classList.remove('footer_button--active');
        }
      } else {
        for (let activeBtn of activeBtns) {
          activeBtn.classList.remove('footer_button--active');
        }
        btn.classList.add('footer_button--active');
      }
    });
  }
};

export {accordion};
