const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', button.getAttribute('data-theme'));
  });
});