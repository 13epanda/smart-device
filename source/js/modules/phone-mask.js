import IMask from 'imask';

const getPhoneMask = () => {
  const inputElements = document.querySelectorAll('input[type="tel"]');
  console.log(inputElements);
  for (let inputElement of inputElements) {
    const maskOptions = {
      mask: '+{7}(000)000-00-00',
    };
    IMask(inputElement, maskOptions);
  }
};

export {getPhoneMask};
