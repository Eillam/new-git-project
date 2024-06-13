

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

document.getElementById('openOverlay').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'block';
});

document.getElementById('closeOverlay').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'none';
});