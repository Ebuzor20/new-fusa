const hamburger = document.querySelector('#header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('#header .nav-bar .nav-list ul');
const menu_item = document.querySelector('#header .nav-bar .nav-list .ul li a');
const header = document.querySelector('header.container');

hamburger.addEventListener('click',() =>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  function myFunctions() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }