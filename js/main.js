const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// selectItem function ~ tab selector

function selectItem(e) {
  removeBorder();
  // adding border tp ctive tab
  this.classList.add('tab-border');
}

// removing board from inactive tabs

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove('tab-border'));
}
// Event Listener
tabItems.forEach((item) => item.addEventListener('click', selectItem));
