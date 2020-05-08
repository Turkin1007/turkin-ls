const parallax =  document.querySelector('.parallax-mountain');
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {

  Array.from(layers).forEach(layers => {

    const divider = layers.dataset.speed;
    const strafe = wScroll * divider / 10;

    layers.style.transform = `transleteY(-${strafe}%)`;

  })
}

window.addEventListener("scroll", e => {
  const wScroll =window.pageYOffset;
  moveLayersDependsOnScroll(wScroll);
});