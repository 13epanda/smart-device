const btns = document.querySelectorAll('.footer_button');

const accordion = () => {
  for (let btn of btns) {
    btn.classList.add('footer_button--mobile');
    btn.classList.add('footer_button--closed');

    btn.addEventListener('click', function() {
      if (btn.classList.contains('footer_button--closed')) {
        btn.classList.remove('footer_button--closed');
        btn.classList.add('footer_button--opened');
      } else {
        btn.classList.add('footer_button--closed');
        btn.classList.remove('footer_button--opened');
      }
    });
  }
};

export {accordion};
