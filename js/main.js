const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// selectItem function ~ tab selector

function selectItem(e) {
  // adding border tp ctive tab
  this.classList.add('tab-border');
}

// Event Listener
tabItems.forEach((item) => item.addEventListener('click', selectItem));
