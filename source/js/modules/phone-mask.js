import IMask from 'imask';

const getPhoneMask = () => {
  const inputElements = document.querySelectorAll('input[type="tel"]');
  for (let inputElement of inputElements) {
    const maskOptions = {
      mask: '+{7}(000)000-00-00',
    };
    // eslint-disable-next-line new-cap
    IMask(inputElement, maskOptions);
  }
};

export {getPhoneMask};
