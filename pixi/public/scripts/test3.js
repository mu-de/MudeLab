'use strict';

//Aliases
var TextureCache = PIXI.utils.TextureCache;
var Rectangle = PIXI.Rectangle;
var Container = PIXI.Container,
  autoDetectRenderer = PIXI.autoDetectRenderer,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  Sprite = PIXI.Sprite;

//Create a Pixi stage and renderer and add the 
//renderer.view to the DOM
var stage = new Container(),
  renderer = autoDetectRenderer(256, 256);
$("#right").append(renderer.view);

//load an image and run the `setup` function when it's done
loader.add("images/09.png").load(setup);

var sprite;

function setup() {

  var texture = TextureCache["images/09.png"];

  //Create a rectangle object that defines the position and
  //size of the sub-image you want to extract from the texture
  var rectangleFloor = new Rectangle(0, 0, 32, 32);

  //Create the sprite from the texture
  //Tell the texture to use that rectangular section
  texture.frame = rectangleFloor;
  sprite = new Sprite(texture);

  //Position the rocket sprite on the canvas
  sprite.x = 0;
  sprite.y = 0;

  //Add the rocket to the stage
  stage.addChild(sprite);

  //Render the stage   
  renderer.render(stage);

  gameLoop();
}

function gameLoop(){

  //Loop this function 60 times per second
  requestAnimationFrame(gameLoop);

  //Move the cat 1 pixel per frame
  sprite.x += 1;

  //Render the stage
  renderer.render(stage);
}