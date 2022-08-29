import IMask from 'imask';

const inputElements = document.querySelectorAll('input[type="tel"]');
const getPhoneMask = () => {
  for (let inputElement of inputElements) {
    document.addEventListener('DOMContentLoaded', () => {
      const maskOptions = {
        mask: '+{7}(000)000-00-00',
      };
      IMask(inputElement, maskOptions);
    });
  }
};

export {getPhoneMask};
