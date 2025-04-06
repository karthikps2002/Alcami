window.addEventListener('headerLoaded', function() {
 const searchIcon = document.querySelector('.search-icon');
 const headerItems = document.querySelector('.header-items');
 const searchField = document.querySelector('.header-search-field-hidden');

 if (searchIcon) {
   searchIcon.addEventListener('click', function() {
     headerItems.classList.toggle('header-item-hidden');
     searchField.classList.toggle('search-visible');
   });
 } else {
   console.error("searchIcon element not found.");
 }

 const hamburger = document.querySelector(".hamburger-header");
    const headerMobileItems = document.querySelector(".header-mobile-items");
    const closeIcon = document.querySelector(".close-icon");
    const linksAndButtons = document.querySelectorAll(".header-mobile-items a, .header-mobile-items button");
    
    hamburger.addEventListener("click", function () {
        headerMobileItems.classList.add("header-mobile-active");
    });
    
    function closeMenu() {
      headerMobileItems.classList.remove("header-mobile-active");
    }
    
    closeIcon.addEventListener("click", closeMenu);
    linksAndButtons.forEach(element => {
        element.addEventListener("click", closeMenu);
    });
});