

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

let openOverlays = document.getElementsByClassName('openOverlay');

for(let i = 0; i < openOverlays.length; i++) {
  openOverlays[i].addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
  });
}

document.getElementById('closeOverlay').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'none';
});