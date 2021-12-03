const shareBtn = document.querySelector('.arrow');
const author = document.querySelector('.author');
const tooltip = document.querySelector('.tooltip')
const tooltipBtn = document.querySelector('.tooltip-socials');
const social = document.querySelector('.social');

shareBtn.addEventListener('click', () => {
    author.classList.toggle('closed');
    tooltipBtn.classList.toggle('tooltip-closed');
    tooltip.classList.toggle('tooltip-open');
    social.classList.toggle('open');
    shareBtn.classList.toggle('clicked');
});