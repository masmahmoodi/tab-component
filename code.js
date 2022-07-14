let tabHeader = document.querySelector('.tabs-header');
let tabIndicator = document.querySelector('.tab-indicator');
let tabBody = document.querySelector('.tab-body');

let tabsPane = tabHeader.getElementsByTagName('div');
let tabBodyContents = tabBody.getElementsByTagName('div');

for (let i = 0; i < tabsPane.length; i++) {
  tabsPane[i].addEventListener('click', function () {
    tabHeader.getElementsByClassName('active')[0].classList.remove('active');
    tabsPane[i].classList.add('active');
    tabBody.getElementsByClassName('active')[0].classList.remove('active');
    tabBodyContents[i].classList.add('active');
  });
}
