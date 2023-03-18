var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d4fdf6b4-bf3b-4887-8d91-9f63a04551e7","705f6d03-4d08-4b63-86de-89785a6c17ce","cc92d44f-d6ed-4c79-a923-5bdf9222d5bd","b9a03e65-9fd8-47b7-ac87-5bb414962ff1","3426c1ae-39af-4108-89e6-2e9fd20fb5db"],"propsByKey":{"d4fdf6b4-bf3b-4887-8d91-9f63a04551e7":{"name":"nenita","sourceUrl":null,"frameSize":{"x":328,"y":357},"frameCount":1,"looping":true,"frameDelay":12,"version":"UnuxnnZHwm6X_D63_hABkQcCePE8Dqss","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":328,"y":357},"rootRelativePath":"assets/d4fdf6b4-bf3b-4887-8d91-9f63a04551e7.png"},"705f6d03-4d08-4b63-86de-89785a6c17ce":{"name":"yuk","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"aD0vNotw7EohcoYA.l5mP6yotiuu3wRN","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/705f6d03-4d08-4b63-86de-89785a6c17ce.png"},"cc92d44f-d6ed-4c79-a923-5bdf9222d5bd":{"name":"sad","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"HyZ6RBjLrpH3c4ePAAEK0gGMUDdrhBO7","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/cc92d44f-d6ed-4c79-a923-5bdf9222d5bd.png"},"b9a03e65-9fd8-47b7-ac87-5bb414962ff1":{"name":"heart","sourceUrl":null,"frameSize":{"x":362,"y":336},"frameCount":1,"looping":true,"frameDelay":12,"version":"SuVeUTYPhYMglTKpqytkcIXu37JSXYTt","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":362,"y":336},"rootRelativePath":"assets/b9a03e65-9fd8-47b7-ac87-5bb414962ff1.png"},"3426c1ae-39af-4108-89e6-2e9fd20fb5db":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/T.BLfNn.3XTblWtBQ7GC1tSx4_8IsEJV/category_backgrounds/background_court.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"T.BLfNn.3XTblWtBQ7GC1tSx4_8IsEJV","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T.BLfNn.3XTblWtBQ7GC1tSx4_8IsEJV/category_backgrounds/background_court.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("b")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

hero.setAnimation("nenita");
hero.scale=.2;
enemy1.setAnimation("yuk");
enemy1.scale=.1;
enemy2.setAnimation("sad");
enemy2.scale=.1;
enemy3.setAnimation("heart");
enemy3.scale=.1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  
//fondo(b);

createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-12
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+12
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-12
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+12
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  hero.x=200
  hero.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Goals:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("death:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
