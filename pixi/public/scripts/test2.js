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

function setup() {

  var texture = TextureCache["images/09.png"];

  //Create a rectangle object that defines the position and
  //size of the sub-image you want to extract from the texture
  var rectangleFloor = new Rectangle(32, 160, 32, 32);
  var rectangleWall = new Rectangle(0, 160, 32, 32);

  //Create the sprite from the texture
  for(var x = 0; x < 8; ++x){
    for(var y = 0; y < 8; ++y){
      //Tell the texture to use that rectangular section
      texture.frame = rectangleFloor;
      var sprite = new Sprite(texture);

      //Position the rocket sprite on the canvas
      sprite.x = 0 + 32 * x;
      sprite.y = 0 + 32 * y;

      //Add the rocket to the stage
      stage.addChild(sprite);
    }
  }

  //Render the stage   
  renderer.render(stage);
}