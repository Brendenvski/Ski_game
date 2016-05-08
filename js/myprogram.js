// There are a bunch of special variables and functions.
// Here are some notable ones, but there are many more:
// setup, draw, PLAYGROUND_WIDTH, PLAYGROUND_HEIGHT

//Programmer Name : Brenden Villeneuve
//************************************

var skierSpriteInfo = {
    "name": "skier1",
    "x": 150,
    "y": 390,
    "xspd": 0,
    "yspd": 0,
    "regularAnim": 0,
    "jumpAnim": 0,
    "jumpCounter": 0
    
};

var clipSizeInfo = {
    "name": "rocketClip",
    "picWidth": 30,
    "picHeight": 200,
    "x": 0,
    "y": 280,
    "xspd": 0,
    "yspd": 0,
    "change": 20
}

var rocketSpriteInfo1 = {
    "name": "rocket",
    "x": -200,
    "y": -100,
    "xspd": 0,
    "yspd": 0,
    "spx": -70,
    "spy": 0
    
};

var setup = function() {
    var starsPicWidth = 1000;
    var starsPicHeight = 480;
    var starAnim = newGQAnimation("img/daynight.png");
    var mountainAnim = newGQAnimation("img/background.png");

    var backgroundGroupName = "backgroundGroup";
    createGroupInPlayground(backgroundGroupName);
    createSpriteInGroup(backgroundGroupName, "star1", {
        animation: starAnim,
        width: starsPicWidth,
        height: starsPicHeight
    });
    createSpriteInGroup(backgroundGroupName, "brendyBoa", {
        width: 640,
        height: 480
    });
    createSpriteInGroup(backgroundGroupName, "star2", {
        animation: starAnim,
        width: starsPicWidth,
        height: starsPicHeight
    });
    spriteSetX("star2", 1000);
    createSpriteInGroup(backgroundGroupName, "mountain1", {
        animation: mountainAnim,
        width: 640,
        height: 480
    });

    var cloudsPicWidth = 200;
    var cloudsPicHeight = 80;
    var cloudsAnim = newGQAnimation("img/cloud_multiframe_200_400.png", 5, 80, 200, $.gQ.ANIMATION_VERTICAL);
    var cloudsAnim1 = newGQAnimation("img/cloud_multiframe_200_400.png", 5, 80, 150, $.gQ.ANIMATION_VERTICAL);
    var cloudsAnim2 = newGQAnimation("img/cloud_multiframe_200_400.png", 5, 80, 265, $.gQ.ANIMATION_VERTICAL);

    var cloudGroupName = "cloudGroup";
    createGroupInPlayground(cloudGroupName);

    createSpriteInGroup(cloudGroupName, "cloud1", {
        animation: cloudsAnim,
        width: cloudsPicWidth,
        height: cloudsPicHeight
    });

    createSpriteInGroup(cloudGroupName, "cloud2", {
        animation: cloudsAnim1,
        width: cloudsPicWidth,
        height: cloudsPicHeight
    });
    spriteSetY("cloud2", 60);

    createSpriteInGroup(cloudGroupName, "cloud3", {
        animation: cloudsAnim2,
        width: cloudsPicWidth,
        height: cloudsPicHeight
    });
    spriteSetY("cloud3", 120);

    var treesPicWidth = 80;
    var treesPicHeight = 100;
    var snowyTreeAnim = newGQAnimation("img/SnowyTree.png");
    var treeAnim = newGQAnimation("img/Tree.png");
    var treesGroupName = "treesGroup";
    createGroupInPlayground(treesGroupName);

    createSpriteInGroup(treesGroupName, "snowyTree1", {
        animation: snowyTreeAnim,
        width: treesPicWidth,
        height: treesPicHeight
    });
    spriteSetY("snowyTree1", 380);
    spriteSetX("snowyTree1", 1000);

    createSpriteInGroup(treesGroupName, "tree1", {
        animation: treeAnim,
        width: treesPicWidth,
        height: treesPicHeight
    });
    spriteSetY("tree1", 380);
    spriteSetX("tree1", 1000);

    createSpriteInGroup(treesGroupName, "snowyTree2", {
        animation: snowyTreeAnim,
        width: treesPicWidth,
        height: treesPicHeight
    });
    spriteSetY("snowyTree2", 380);
    spriteSetX("snowyTree2", 1000);

    var rockPicWidth = 35;
    var rockPicHeight = 35;
    var rockAnim = newGQAnimation("img/newRock35.png");
    var rockGroupName = "rockGroup";
    createGroupInPlayground(rockGroupName);

    createSpriteInGroup(rockGroupName, "rock1", {
        animation: rockAnim,
        width: rockPicWidth,
        height: rockPicHeight
    });
    spriteSetX("rock1", -100);
    spriteSetY("rock1", 430);
    
    createSpriteInGroup(rockGroupName, "rock2", {
        animation: rockAnim,
        width: rockPicWidth,
        height: rockPicHeight
    });
    spriteSetX("rock2", -100);
    spriteSetY("rock2", 430);
    
    createSpriteInGroup(rockGroupName, "rock3", {
        animation: rockAnim,
        width: rockPicWidth,
        height: rockPicHeight
    });
    spriteSetX("rock3", -100);
    spriteSetY("rock3", 430);
    
    var starPicWidth = 50;
    var starPicHeight = 50;
    var starsAnim = newGQAnimation("img/goldenStar.png");
    var starGroupName = "starGroup";
    createGroupInPlayground(starGroupName);
    
    createSpriteInGroup(starGroupName, "gstar1", {
        animation: starsAnim,
        width: starPicWidth,
        height: starPicHeight
    });
    spriteSetX("gstar1", -100);
    spriteSetY("gstar1", 430);
    
    createSpriteInGroup(starGroupName, "gstar2", {
        animation: starsAnim,
        width: starPicWidth,
        height: starPicHeight
    });
    spriteSetX("gstar2", -100);
    spriteSetY("gstar2", 430);
    
    createSpriteInGroup(starGroupName, "gstar3", {
        animation: starsAnim,
        width: starPicWidth,
        height: starPicHeight
    });
    spriteSetX("gstar3", -100);
    spriteSetY("gstar3", 430);
    
    
    var birdPicWidth = 50;
    var birdPicHeight = 36;
    var birdAnim = newGQAnimation("img/birds_50_144.png", 4, 36, 200, $.gQ.ANIMATION_VERTICAL);
    var birdGroupName = "birdGroup";
    createGroupInPlayground(birdGroupName);
    
    createSpriteInGroup(birdGroupName, "bird1", {
        animation: birdAnim,
        width: birdPicWidth,
        height: birdPicHeight
    });
    spriteSetX("bird1", -200);
    spriteSetY("bird1", 100);
    
    createSpriteInGroup(birdGroupName, "bird2", {
        animation: birdAnim,
        width: birdPicWidth,
        height: birdPicHeight
    });
    spriteSetX("bird2", -100);
    spriteSetY("bird2", 115);
    
    createSpriteInGroup(birdGroupName, "bird3", {
        animation: birdAnim,
        width: birdPicWidth,
        height: birdPicHeight
    });
    spriteSetX("bird3", -399);
    spriteSetY("bird3", 130);
    
    var boomPicWidth = 50;
    var boomPicHeight = 60;
    var boomAnim = newGQAnimation("img/boomswag.png", 5, 60, 199, $.gQ.ANIMATION_VERTICAL);
    var oneHunnaAnim = newGQAnimation("img/plus1hunna.png", 4, 100, 50, $.gQ.ANIMATION_VERTICAL);
    var boomGroupName = "boomGroup";
    createGroupInPlayground(boomGroupName);
    
    createSpriteInGroup(boomGroupName, "boom1", {
        animation: boomAnim,
        width: boomPicWidth,
        height: boomPicHeight
    });
    spriteSetX("boom1", -200);
    spriteSetY("boom1", 289);
    
    createSpriteInGroup(boomGroupName, "boom2", {
        animation: boomAnim,
        width: boomPicWidth,
        height: boomPicHeight
    });
    spriteSetX("boom2", -200);
    spriteSetY("boom2", 300);
    
    createSpriteInGroup(boomGroupName, "boom3", {
        animation: boomAnim,
        width: boomPicWidth,
        height: boomPicHeight
    });
    spriteSetX("boom3", -200);
    spriteSetY("boom3", 310);
    
    createSpriteInGroup(boomGroupName, "onehunna", {
        animation: oneHunnaAnim,
        width: 100,
        height: 100
    });
    spriteSetY("onehunna", -3000);
    
    var clipAnim = newGQAnimation("img/fullyloadedclip.png");
    var scoreAnim = newGQAnimation("img/scoreGood.png");
    var clipGroupName = "clipGroup";
    createGroupInPlayground(clipGroupName);
    
    createSpriteInGroup(clipGroupName, "score",{
        animation: scoreAnim,
        width: 150,
        height: 60
    });
    
    createSpriteInGroup(clipGroupName, "rocketClip",{
        animation: clipAnim,
        width: clipSizeInfo["picWidth"],
        height: clipSizeInfo["picHeight"]
    });

    var bearPicWidth = 100;
    var bearPicHeight = 80;
    var skierPicWidth = 71;
    var skierPicHeight = 85;
    var rocketPicWidth = 60;
    var rocketPicHeight = 40;
    var skierAnim = newGQAnimation("img/skier_jump_355_85.png", 5, 71, 50, $.gQ.ANIMATION_HORIZONTAL);
    var skierAnim1 = newGQAnimation("img/skierSide.png");
    var bearsAnim = newGQAnimation("img/bearSequence.png", 4, 100, 500, $.gQ.ANIMATION_HORIZONTAL);
    var rocketAnim = newGQAnimation("img/rocketSequence_60_160.png", 4, 40, 200, $.gQ.ANIMATION_VERTICAL);
    var bearGroupName = "bearsGroup";
    createGroupInPlayground(bearGroupName);
    
    skierSpriteInfo["jumpAnim"] = skierAnim;
    skierSpriteInfo["regularAnim"] = skierAnim1;

    createSpriteInGroup(bearGroupName, "skier1", {
        animation: skierAnim1,
        width: skierPicWidth,
        height: skierPicHeight
    });
    spriteSetX("skier1", 150);
    spriteSetY("skier1", 380);

    createSpriteInGroup(bearGroupName, "bears1", {
        animation: bearsAnim,
        width: bearPicWidth,
        height: bearPicHeight
    });
    spriteSetY("bears1", 390);
    spriteSetX("bears1", 20);

    createSpriteInGroup(bearGroupName, "rocket", {
        animation: rocketAnim,
        width: rocketPicWidth,
        height: rocketPicHeight
    });
    spriteSetY("rocket", -100);
    spriteSetX("rocket", -100);
    
    //    createSpriteInGroup(bearGroupName, "scoreBoard", {
    //        width: 480,
    //        height: 30
    //    });
    //    spriteSetX("scoreBoard", 150);
    

    var splashScreenWidth = 640;
    var splashScreenHeight = 480;
    var splashScreen = newGQAnimation("img/splashScreen.png");
    var clickHere = newGQAnimation("img/clickHere.png");
    var endScreen = newGQAnimation("img/gameOver.png")
    
    createGroupInPlayground("splashScreenGroup");
    
    createSpriteInGroup("splashScreenGroup", "endScreen", {
        animation: endScreen,
        width: 640,
        height: 480
    })
    
    createSpriteInGroup("splashScreenGroup", "splashScreen", {
        animation: splashScreen,
        width: splashScreenWidth,
        height: splashScreenHeight
    })
    
    createSpriteInGroup("splashScreenGroup", "clickHere", {
        animation: clickHere,
        width: 286,
        height: 26
    })
    spriteSetX("clickHere", 354)
    spriteSetY("clickHere", 300)
    
    createSpriteInGroup("splashScreenGroup", "scoreBoard", {
        width: 480,
        height: 30
    });
    spriteSetX("scoreBoard", 150);

}; // end of setup() function. Notice the braces match!

//
///
////
///
//
var splashScreenInfo = {
    "name": "splashScreen",
    "x": 0,
    "y": 0,
    "xspd": 0,
    "yspd": 0
}

var endScreenInfo = {
    "name": "endScreen",
    "x": 10000,
    "y": 10000,
    "xspd": 0,
    "yspd": 0
}

var moveStar1 = function() {
    newPos = spriteGetX("star1") - 0.1;
    if (newPos < -1 * spriteGetWidth("star1")) {
        newPos = 1000;
    }
    spriteSetX("star1", newPos);
};

var moveStar2 = function() {
    newPos = spriteGetX("star2") - 0.1;
    if (newPos < -1 * spriteGetWidth("star2")) {
        newPos = 1000;
    }
    spriteSetX("star2", newPos);
};



var moveSkierWithKeyboard = function(){
    
    if( getKeyState(65) ){ /// left
        skierSpriteInfo["x"] = skierSpriteInfo["x"] - 2;
    }
    if( getKeyState(68)){//right
        skierSpriteInfo["x"] = skierSpriteInfo["x"] + 2;
    }
    if ( getKeyState(32) && skierSpriteInfo["y"] == 390){//jump
        skierSpriteInfo["yspd"] = -6;
        spriteSetAnimation(skierSpriteInfo["name"], skierSpriteInfo["jumpAnim"]);
    }else if(skierSpriteInfo["y"] < 310){
        skierSpriteInfo["y"] = 310;
        skierSpriteInfo["yspd"] = +6;
    }
    if ( skierSpriteInfo["y"] < 350 ){
        spriteSetAnimation(skierSpriteInfo["name"], skierSpriteInfo["regularAnim"])
    }
    if(skierSpriteInfo["y"] > 390){
        skierSpriteInfo["y"] = 390;
        skierSpriteInfo["yspd"] = 0;
        skierSpriteInfo["jumpCounter"] = 0;
    }
    
    
    
};
var moveSkierSprite = function( spriteInfo ){
    spriteInfo["x"] = spriteInfo["x"] + spriteInfo["xspd"];
    if(spriteInfo["x"] > PLAYGROUND_WIDTH){
        spriteInfo["xspd"] = spriteInfo["xspd"] * 1;
    }
    if(spriteInfo["x"] < 0){
        spriteInfo["xspd"] = spriteInfo["xspd"] * 1;
    }
    spriteSetX(spriteInfo["name"], spriteInfo["x"]);
    
    spriteInfo["y"] = spriteInfo["y"] + spriteInfo["yspd"];
    if(spriteInfo["y"] > PLAYGROUND_HEIGHT){
        spriteInfo["yspd"] = spriteInfo["yspd"] * 1;
    }
    spriteSetY(spriteInfo["name"], spriteInfo["y"]);
};




var cloudSpriteInfo1 = {
    "name": "cloud1",
    "x": Math.random() * 640,
    "y": 0,
    "xspd": -1,
    "yspd": 0,
    "spx": 640,
    "spy": 0
    
};

var cloudSpriteInfo2 = {
    "name": "cloud2",
    "x": Math.random() * 640,
    "y": 60,
    "xspd": -1.5,
    "yspd": 0,
    "spx": 640,
    "spy": 0
    
};

var cloudSpriteInfo3 = {
    "name": "cloud3",
    "x": Math.random() * 640,
    "y": 120,
    "xspd": -2,
    "yspd": 0,
    "spx": 640,
    "spy": 0
    
};

var treeSpriteInfo1 = {
    "name": "snowyTree1",
    "x": -200,
    "y": 380,
    "xspd": -7,
    "yspd": 0,
    "spx": 1500,
    "spy": 0,
    "gameTime": 0
    
};



var treeSpriteInfo2 = {
    "name": "tree1",
    "x": -200,
    "y": 380,
    "xspd": -7,
    "yspd": 0,
    "spx": 1750,
    "spy": 0,
    "gameTime": 0
    
};


var treeSpriteInfo3 = {
    "name": "snowyTree2",
    "x": -200,
    "y": 380,
    "xspd": -7,
    "yspd": 0,
    "spx": 2130,
    "spy": 0,
    "gameTime": 0
    
};

var onehunnaInfo = {
    "name": "onehunna",
    "x": 0,
    "y": -3000,
    "yspd": 0,
    "xspd": 0,
    "lastShown": 0
}

var spriteNameToInfo = {
    "snowyTree1": treeSpriteInfo1,
    "tree1": treeSpriteInfo2,
    "snowyTree2": treeSpriteInfo3,
    "rock1": rockSpriteInfo1,
    "rock2": rockSpriteInfo2,
    "rock3": rockSpriteInfo3
}


var treeCollision = function(collIndex, hitSprite){
    var spriteName = spriteId(hitSprite);
    var hitSpriteInfo = spriteNameToInfo[spriteName]
    
    boomSpriteInfo1["x"] = hitSpriteInfo["x"];
    boomSpriteInfo1["y"] = hitSpriteInfo["y"] + 50;
    boomSpriteInfo1["lastExploded"] = currentDate();
    
    onehunnaInfo["x"] = hitSpriteInfo["x"];
    onehunnaInfo["y"] = hitSpriteInfo["y"] - 50;
    onehunnaInfo["lastShown"] = currentDate();
    
    hitSpriteInfo["x"] = Math.random() * 5000 + 640
    rocketSpriteInfo1["x"] = -200;
    rocketSpriteInfo1["y"] = -300;
    rocketSpriteInfo1["xspd"] = 0;
    
    scoreCounter["score"] = scoreCounter["score"] + 100;
    
}




var fireRocket = function(){
    if (getKeyState(13) && rocketSpriteInfo1["x"] < -100 && clipSizeInfo["picHeight"] > 0){
        rocketSpriteInfo1["x"] = skierSpriteInfo["x"]
        rocketSpriteInfo1["y"] = skierSpriteInfo["y"] + 50
        rocketSpriteInfo1["xspd"] = 9;
        clipSizeInfo["picHeight"] = clipSizeInfo["picHeight"] - 20;
    }else if(getKeyState(13) && rocketSpriteInfo1["x"] > PLAYGROUND_WIDTH && clipSizeInfo["picHeight"] > 0){
        rocketSpriteInfo1["x"] = skierSpriteInfo["x"]
        rocketSpriteInfo1["y"] = skierSpriteInfo["y"] + 50
        rocketSpriteInfo1["xspd"] = 9;
        clipSizeInfo["picHeight"] = clipSizeInfo["picHeight"] - 20;
    }
    $("#"+clipSizeInfo["name"]).h(clipSizeInfo["picHeight"]);
}

var birdSpriteInfo1 = {
    "name": "bird1",
    "x": Math.random()*640,
    "y": 100,
    "xspd": 4,
    "yspd": 0,
    "spx": Math.random()* -100,
    "spy": 0
    
};

var birdSpriteInfo2 = {
    "name": "bird2",
    "x": Math.random()*640,
    "y": 115,
    "xspd": 2,
    "yspd": 0,
    "spx": Math.random()* -100,
    "spy": 0
    
};

var birdSpriteInfo3 = {
    "name": "bird3",
    "x": Math.random()*640,
    "y": 130,
    "xspd": 3,
    "yspd": 0,
    "spx": Math.random()* -100,
    "spy": 0
    
};





var gStarSpriteInfo1 = {
    "name": "gstar1",
    "x": -100,
    "y": 430,
    "xspd": -7,
    "yspd": 0,
    "spx": 5000,
    "spy": 0,
    "gameTime": 0
    
};
var gStar1Collision = function(){
    gStarSpriteInfo1["x"] = Math.random() * 5000 + 640;
    scoreCounter["score"] = scoreCounter["score"] + 100
    clipSizeInfo["picHeight"] = clipSizeInfo["picHeight"] + 20;   
    $("#"+clipSizeInfo["name"]).h(clipSizeInfo["picHeight"]);
}

var gStarSpriteInfo2 = {
    "name": "gstar2",
    "x": -100,
    "y": 430,
    "xspd": -7,
    "yspd": 0,
    "spx": 4000,
    "spy": 0,
    "gameTime": 0
    
};
var gStar2Collision = function(){
    gStarSpriteInfo2["x"] = Math.random() * 5000 + 640;
    scoreCounter["score"] = scoreCounter["score"] + 100
    clipSizeInfo["picHeight"] = clipSizeInfo["picHeight"] + 20;
    $("#"+clipSizeInfo["name"]).h(clipSizeInfo["picHeight"]);
}

var gStarSpriteInfo3 = {
    "name": "gstar3",
    "x": -100,
    "y": 430,
    "xspd": -7,
    "yspd": 0,
    "spx": 3000,
    "spy": 0,
    "gameTime": 0
    
};
var gStar3Collision = function(){
    gStarSpriteInfo3["x"] = Math.random() * 5000 + 640;
    scoreCounter["score"] = scoreCounter["score"] + 100
    if(clipSizeInfo["picHeight"] < 200){
        clipSizeInfo["picHeight"] = clipSizeInfo["picHeight"] + 20;   
        $("#"+clipSizeInfo["name"]).h(clipSizeInfo["picHeight"]);
    }
}

var rockSpriteInfo1 = {
    "name": "rock1",
    "x": -100,
    "y": 460,
    "xspd": -7,
    "yspd": 0,
    "spx": Math.random() * 5000 + 640,
    "spy": 0,
    "gameTime": 0
    
};

var rockSpriteInfo2 = {
    "name": "rock2",
    "x": -500,
    "y": 460,
    "xspd": -7,
    "yspd": 0,
    "spx": Math.random() * 5000 + 640,
    "spy": 0,
    "gameTime": 0
    
};

var rockSpriteInfo3 = {
    "name": "rock3",
    "x": -1000,
    "y": 460,
    "xspd": -7,
    "yspd": 0,
    "spx": Math.random() * 5000 + 640,
    "spy": 0,
    "gameTime": 0
    
};

var rockFix = function(){
    if(rockSpriteInfo1["x"] - rockSpriteInfo2["x"] < 200 && rockSpriteInfo1["x"] - rockSpriteInfo2["x"] > -200){
        rockSpriteInfo1["x"] = rockSpriteInfo1["x"] + 400;
    }
    if(rockSpriteInfo1["x"] - rockSpriteInfo3["x"] < 200 && rockSpriteInfo1["x"] - rockSpriteInfo3["x"] > -200){
        rockSpriteInfo1["x"] = rockSpriteInfo1["x"] + 400;
    }
    if(rockSpriteInfo2["x"] - rockSpriteInfo1["x"] < 200 && rockSpriteInfo2["x"] - rockSpriteInfo1["x"] > -200){
        rockSpriteInfo2["x"] = rockSpriteInfo2["x"] + 400;
    }
    if(rockSpriteInfo2["x"] - rockSpriteInfo3["x"] < 200 && rockSpriteInfo2["x"] - rockSpriteInfo3["x"] > -200){
        rockSpriteInfo2["x"] = rockSpriteInfo2["x"] + 400;
    }
    if(rockSpriteInfo3["x"] - rockSpriteInfo1["x"] < 200 && rockSpriteInfo3["x"] - rockSpriteInfo1["x"] > -200){
        rockSpriteInfo3["x"] = rockSpriteInfo3["x"] + 400;
    }
    if(rockSpriteInfo3["x"] - rockSpriteInfo2["x"] < 200 && rockSpriteInfo3["x"] - rockSpriteInfo2["x"] > -200){
        rockSpriteInfo3["x"] = rockSpriteInfo3["x"] + 400;
    }
}

var scoreBoard = {
    "name": "scoreBoard",
    "x": 150,
    "y": 0,
    "xspd": 0,
    "yspd": 0
}

var rockCollision = function(){
    boomSpriteInfo2["x"] = skierSpriteInfo["x"];
    boomSpriteInfo2["y"] = skierSpriteInfo["y"];
    skierSpriteInfo["x"] = 10000;
    endScreenInfo["x"] = 640;
    endScreenInfo["y"] = 480;
    endScreenInfo["xspd"] = -9;
    endScreenInfo["yspd"] = -6;
    if(endScreenInfo["x"] < 0){
        endScreenInfo["x"] = 0;
        endScreenInfo["xspd"] = 0;
    }
    if(endScreenInfo["y"] < 0){
        endScreenInfo["y"] = 0;
        endScreenInfo["yspd"] = 0;
    }
    scoreCounter["plusOne"] = 0
    
    spriteObject(scoreBoard["name"]).text(scoreCounter["score"])
    spriteObject(scoreBoard["name"]).css("color", "pink");
    spriteObject(scoreBoard["name"]).css("font", "30px arial, sans-serif");
    
    scoreBoard["xspd"] = 4.2;
    scoreBoard["yspd"] = 3;
    if(scoreBoard["x"] > 430){
        scoreBoard["x"] = 430;
        scoreBoard["xspd"] = 0;
    }
    if(scoreBoard["y"] > 230){
        scoreBoard["y"] = 230;
        scoreBoard["yspd"] = 0;
    }
    
    
    
    
//    spriteSetX(scoreBoard["name"], 430);
//    spriteSetY(scoreBoard["name"], 230);
    
        
    
    
    
}

var boomSpriteInfo1 = {
    "name": "boom1",
    "x": 2000,
    "y": 289,
    "xspd": 0,
    "yspd": 0,
    "spx": 0,
    "spy": -100,
    "lastExploded": 0
    
};


var boomSpriteInfo2 = {
    "name": "boom2",
    "x": 2000,
    "y": 300,
    "xspd": 0,
    "yspd": 0,
    "spx": 0,
    "spy": -100
    
};


var boomSpriteInfo3 = {
    "name": "boom3",
    "x": 2000,
    "y": 310,
    "xspd": 0,
    "yspd": 0,
    "spx": 0,
    "spy": -100
    
};


var moveWrapSpriteLeft = function( spriteInfo ){
    spriteInfo["x"] = spriteInfo["x"] + spriteInfo["xspd"];
    if(spriteInfo["x"] < -400){
        spriteInfo["x"] = spriteInfo["spx"];
    }
    spriteSetX(spriteInfo["name"], spriteInfo["x"]);
    
    spriteInfo["y"] = spriteInfo["y"] + spriteInfo["yspd"];
    if(spriteInfo["y"] < 0){
        spriteInfo["y"] = spriteInfo["spy"];
    }
    spriteSetY(spriteInfo["name"], spriteInfo["y"]);
};

var moveWrapSpriteRight = function( spriteInfo ){
    spriteInfo["x"] = spriteInfo["x"] + spriteInfo["xspd"];
    if(spriteInfo["x"] > PLAYGROUND_WIDTH){
        spriteInfo["x"] = spriteInfo["spx"];
    }
    spriteSetX(spriteInfo["name"], spriteInfo["x"]);
    
    spriteInfo["y"] = spriteInfo["y"] + spriteInfo["yspd"];
    if(spriteInfo["y"] > 230){
        spriteInfo["y"] = 230;
    }
    spriteSetY(spriteInfo["name"], spriteInfo["y"]);
};

var moveEndScreen = function( spriteInfo ){
    spriteInfo["x"] = spriteInfo["x"] + spriteInfo["xspd"];
    if(spriteInfo["x"] < 0){
        spriteInfo["x"] = spriteInfo["spx"];
    }
    spriteSetX(spriteInfo["name"], spriteInfo["x"]);
    
    spriteInfo["y"] = spriteInfo["y"] + spriteInfo["yspd"];
    if(spriteInfo["y"] < 0){
        spriteInfo["y"] = spriteInfo["spy"];
    }
    spriteSetY(spriteInfo["name"], spriteInfo["y"]);
};

var moveScore = function( spriteInfo ){
    spriteInfo["x"] = spriteInfo["x"] + spriteInfo["xspd"];
    if(spriteInfo["x"] > 430){
        spriteInfo["x"] = 430;
    }
    spriteSetX(spriteInfo["name"], spriteInfo["x"]);
    
    spriteInfo["y"] = spriteInfo["y"] + spriteInfo["yspd"];
    if(spriteInfo["y"] > 230){
        spriteInfo["y"] = 230;
    }
    spriteSetY(spriteInfo["name"], spriteInfo["y"]);
};

var moveSplashScreen = function( spriteInfo ){
    spriteInfo["x"] = spriteInfo["x"] + spriteInfo["xspd"];
    if(spriteInfo["x"] > 3000){
        spriteInfo["xspd"] = 0;
    }
    spriteSetX(spriteInfo["name"], spriteInfo["x"]);
    
    spriteInfo["y"] = spriteInfo["y"] + spriteInfo["yspd"];
    if(spriteInfo["y"] < -3000){
        spriteInfo["yspd"] = 0;
    }
    spriteSetY(spriteInfo["name"], spriteInfo["y"]);
};

var moveBoom = function(){
    var now = currentDate();
    if( now - boomSpriteInfo1["lastExploded"] > 501){
        boomSpriteInfo1["x"] = 2000;
    }
}

var moveonehunna = function(){
    var now = currentDate();
    if( now - onehunnaInfo["lastShown"] > 501){
        onehunnaInfo["yspd"] = -3;
        if(onehunnaInfo["y"] < 250){
            onehunnaInfo["y"] = 3000
        }
    }
}

var scoreCounter = {
    "score": 0,
    "plusOne": 1,
    "timeStopped": 0,
    "gameTime": currentDate()
}

var scoreMulti = function(){
    now = currentDate();
    if(now - scoreCounter["gameTime"] > 15000){
        scoreCounter["plusOne"] = scoreCounter["plusOne"] * 2;
        scoreCounter["gameTime"] = now;
    }
}


var updateScore = function(){
    scoreCounter["score"] = scoreCounter["score"] + scoreCounter["plusOne"]
    spriteObject("scoreBoard").text(scoreCounter["score"])
    spriteObject("scoreBoard").css("color", "green");
    spriteObject("scoreBoard").css("font", "30px arial, sans-serif");
}


treeSpriteInfo1["gameTime"] = currentDate();



var increaseSpeed = function(){
    var now = currentDate();
    if(now - treeSpriteInfo1["gameTime"] > 3750){
        treeSpriteInfo1["xspd"] = treeSpriteInfo1["xspd"] - 0.25;
        treeSpriteInfo2["xspd"] = treeSpriteInfo2["xspd"] - 0.25;
        treeSpriteInfo3["xspd"] = treeSpriteInfo3["xspd"] - 0.25;
        gStarSpriteInfo1["xspd"] = gStarSpriteInfo1["xspd"] - 0.25;
        gStarSpriteInfo2["xspd"] = gStarSpriteInfo2["xspd"] - 0.25;
        gStarSpriteInfo3["xspd"] = gStarSpriteInfo3["xspd"] - 0.25;
        rockSpriteInfo1["xspd"] = gStarSpriteInfo1["xspd"] - 0.25;
        rockSpriteInfo2["xspd"] = gStarSpriteInfo2["xspd"] - 0.25;
        rockSpriteInfo3["xspd"] = gStarSpriteInfo3["xspd"] - 0.25;
        treeSpriteInfo1["gameTime"] = now
    }
}


var draw = function(){
    swappableDraw();
}

var swappableDraw = function(){
    consolePrint("draw")
    mouseClick();
}



var realDraw = function() {
    consolePrint("real draw")
    var newPos; // declaring newPos variable without initializing it

    updateScore();
    moveSkierSprite(skierSpriteInfo);
    moveSkierWithKeyboard();
    fireRocket();
    moveSkierSprite(rocketSpriteInfo1);
    
    moveBoom();
    moveScore(scoreBoard);
    moveonehunna();
    scoreMulti();
    
    
    moveSplashScreen(splashScreenInfo);
    moveEndScreen(endScreenInfo);
    moveWrapSpriteLeft(onehunnaInfo);
   
    increaseSpeed();
    rockFix();
    
    
    moveWrapSpriteLeft(boomSpriteInfo1);
    moveWrapSpriteLeft(boomSpriteInfo2);
    moveWrapSpriteLeft(boomSpriteInfo3);
    
    moveWrapSpriteLeft(rockSpriteInfo1);
    moveWrapSpriteLeft(rockSpriteInfo2);
    moveWrapSpriteLeft(rockSpriteInfo3);
    
    moveWrapSpriteLeft(gStarSpriteInfo1);
    moveWrapSpriteLeft(gStarSpriteInfo2);
    moveWrapSpriteLeft(gStarSpriteInfo3);
    
    moveWrapSpriteLeft(cloudSpriteInfo1);
    moveWrapSpriteLeft(cloudSpriteInfo2);
    moveWrapSpriteLeft(cloudSpriteInfo3);
    
    moveWrapSpriteLeft(clipSizeInfo);
    
    moveWrapSpriteLeft(treeSpriteInfo1);
    moveWrapSpriteLeft(treeSpriteInfo2);
    moveWrapSpriteLeft(treeSpriteInfo3);
    
    moveWrapSpriteRight(birdSpriteInfo1);
    moveWrapSpriteRight(birdSpriteInfo2);
    moveWrapSpriteRight(birdSpriteInfo3);
    
    forEachSpriteGroupCollisionDo(
        rocketSpriteInfo1["name"],
        "treesGroup",
        treeCollision)
    forEachSpriteGroupCollisionDo(
        skierSpriteInfo["name"],
        "rockGroup",
        rockCollision) 
    forEachSpriteGroupCollisionDo(
        skierSpriteInfo["name"],
        "treesGroup",
        rockCollision)
     
    forEachSpriteSpriteCollisionDo(
        "bears1",
        skierSpriteInfo["name"],
        rockCollision)
    
    forEachSpriteSpriteCollisionDo(
        gStarSpriteInfo1["name"],
        skierSpriteInfo["name"],
        gStar1Collision)
    forEachSpriteSpriteCollisionDo(
        gStarSpriteInfo2["name"],
        skierSpriteInfo["name"],
        gStar2Collision)
    forEachSpriteSpriteCollisionDo(
        gStarSpriteInfo3["name"],
        skierSpriteInfo["name"],
        gStar3Collision)
    
    moveStar1();
    moveStar2();
    
}; // end of draw() function. Notice the braces match!
// Hello to everyone that has read to the bottom of the code. 



var mouseClick = function(){
    if(getMouseButton1()){
        splashScreenInfo["xspd"] = 3;
        splashScreenInfo["yspd"] = -3;
        
        swappableDraw = realDraw;
    }
}

