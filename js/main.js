const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// selectItem function ~ tab selector

function selectItem(e) {
  removeBorder();
  removeShow();
  // adding border tp ctive tab
  this.classList.add('tab-border');
  //   get content items from the DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // add show class to content item
  tabContentItem.classList.add('show');
}

// removing board from inactive tabs

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove('tab-border'));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove('show'));
}
// Event Listener
tabItems.forEach((item) => item.addEventListener('click', selectItem));
