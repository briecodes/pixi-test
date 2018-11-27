document.addEventListener('DOMContentLoaded', () => {

  console.log('alert! loaded!');

  //Create a Pixi Application
  let app = new PIXI.Application({
    width: 800,
    height: 600,
    antialias: true,
    transparent: true,
    resolution: 2
  });

  //Add the canvas that Pixi automatically created for you to the HTML document
  document.body.appendChild(app.view);

});