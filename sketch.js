var cat;
var mouse;
var garden;
function preload() {

    //load the images here
    background_garden = loadImage("images/garden.png");

    cat_sitting = loadAnimation("images/cat1.png");
    cat_moves   = loadAnimation("images/cat2.png","images/cat3.png");
    cat_stops   = loadAnimation("images/cat4.png");

    mouse_drooling = loadAnimation("images/mouse1.png");
    mouse_teasing  = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse_stops    = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    garden = createSprite(500,500,0,0);
    garden.addImage(background_garden);
    garden.sccale = 1.3;

    cat = createSprite(800,600,0,0);
    cat.velocityX = 0;
    cat.addAnimation("sitCat",cat_sitting);
    cat.addAnimation("moveCat",cat_moves);
    cat.addAnimation("stopCat",cat_stops);
    cat.scale = 0.2;

    mouse = createSprite(300,600,0,0);
    mouse.addAnimation("droolMouse",mouse_drooling);
    mouse.addAnimation("teaseMouse",mouse_teasing);
    mouse.addAnimation("stopMouse",mouse_stops);
    mouse.scale = 0.2;

    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x <= mouse.x ){
        mouse.changeAnimation("stopMouse");
        cat.changeAnimation("stopCat");
        cat.velocityX = 0;
        mouse.x = mouse.x - 80;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyDown("left")){
        mouse.changeAnimation("teaseMouse");
        cat.changeAnimation("moveCat");
        cat.velocityX = -4;
    }

}
