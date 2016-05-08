/*
 * cs10 wrapper around gameQuery rev. 0.7.0
 * makes things more procedural
 * load this after gameQuery
 */

var GQ_PLAYGROUND_HEIGHT = 480;
var GQ_PLAYGROUND_WIDTH = 640;
setGqPlaygroundDimensions = function(width, height){
    // this must be executed outside of setup and draw functions
    GQ_PLAYGROUND_HEIGHT = height;
    GQ_PLAYGROUND_WIDTH = width;
}

var currentDate = function(){
    return Date.now();
}

var consolePrint = function(txt){
    // might work only in Chrome or if some development add-ons are installed
    console.log(txt);
}

var newGQAnimation = function(urlOrMap, numberOfFrame, delta, rate, type){
    if (arguments.length === 5){
        return new $.gQ.Animation({
            imageURL: urlOrMap,
            numberOfFrame: numberOfFrame,
            delta: delta,
            rate: rate,
            type: type
        });
    } else if (typeof(urlOrMap) === "string"){
        return new $.gQ.Animation({imageURL: urlOrMap});
    } else {
        return new $.gQ.Animation(urlOrMap);
    }
}

var createGroupInPlayground = function(groupName, theWidth, theHeight, thePosx, thePosy){
    if (arguments.length === 1){
         $.playground().addGroup(groupName, {width: $.playground().width(),
                                             height: $.playground().height()});
    } else if (arguments.length === 3){
         $.playground().addGroup(groupName, {width: theWidth,
                                             height: theHeight});
    } else if (arguments.length === 5){
         $.playground().addGroup(groupName, {width: theWidth,
                                             height: theHeight,
                                            posx: thePosx,
                                            posy: thePosy});
    } else if (arguments.length === 2){ // treats arguments[1] as a standard options map
         $.playground().addGroup(groupName, arguments[1]);
    }
}
 

var createSpriteInGroup = function(groupName, spriteName, theAnimation, theWidth, theHeight, thePosx, thePosy){
    if (arguments.length === 5){
        $("#"+groupName).addSprite(spriteName, {animation: theAnimation,
                                            width: theWidth,
                                            height: theHeight});
    } else if (arguments.length === 7){
        $("#"+groupName).addSprite(spriteName, {animation: theAnimation,
                                            width: theWidth,
                                            height: theHeight,
                                            posx: thePosx,
                                            posy: thePosy});
    } else if (arguments.length === 3){ // treats arguments[2] as a standard options map
        $("#"+groupName).addSprite(spriteName, arguments[2]);
    }
}

var removeSprite = function(spriteNameOrObj){
    if (typeof(spriteNameOrObj) !== "object"){
        $("#"+spriteNameOrObj).remove();
    } else {
        $(spriteNameOrObj).remove();
    }
}



var sprite = function(spriteName){
    return $("#"+spriteName);
}

var spriteObject = function(spriteNameOrObj){
    if (typeof(spriteNameOrObj) !== "object"){
        return $("#"+spriteNameOrObj);
    } else {
        return $(spriteNameOrObj);
    }
}

var spriteId = function(spriteNameOrObj){
    if (typeof(spriteNameOrObj) !== "object"){
        return $("#"+spriteNameOrObj).attr("id");
    } else {
        return $(spriteNameOrObj).attr("id");
    }
}


var spriteGetX = function(spriteName){
    return $("#"+spriteName).x();
}
var spriteGetY = function(spriteName){
    return $("#"+spriteName).y();
}
var spriteGetZ = function(spriteName){
    return $("#"+spriteName).z();
}
var spriteSetX = function(spriteName, xval){
    $("#"+spriteName).x(xval);
}
var spriteSetY = function(spriteName, yval){
    $("#"+spriteName).y(yval);
}
var spriteSetZ = function(spriteName, zval){
    $("#"+spriteName).z(zval);
}
var spriteSetXY = function(spriteName, xval, yval){
    $("#"+spriteName).xy(xval, yval);
}
var spriteSetXYZ = function(spriteName, xval, yval, zval){
    $("#"+spriteName).xyz(xval, yval, zval);
}


var spriteGetWidth = function(spriteName){
    return $("#"+spriteName).w();
}
var spriteGetHeight = function(spriteName){
    return $("#"+spriteName).h();
}
var spriteSetWidth = function(spriteName, wval){
    $("#"+spriteName).w(wval);
}
var spriteSetHeight = function(spriteName, hval){
    $("#"+spriteName).h(hval);
}
var spriteSetWidthHeight = function(spriteName, wval, hval){
    $("#"+spriteName).wh(wval, hval);
}


var spriteRotate = function(spriteName, angleDegrees){
    $("#"+spriteName).rotate(angleDegrees);
}

var spriteScale = function(spriteName, ratio){
    $("#"+spriteName).scale(ratio);
}


var spriteSetAnimation = function(spriteNameOrObj, aGQAnimation, callbackFunction){
    if (arguments.length === 2){
        spriteObject(spriteNameOrObj).setAnimation(aGQAnimation);
    } else if (arguments.length === 3){
        spriteObject(spriteNameOrObj).setAnimation(aGQAnimation, callbackFunction);
    }
}
var spritePauseAnimation = function(spriteName){
    $("#"+spriteName).pauseAnimation();
}
var spriteResumeAnimation = function(spriteName){
    $("#"+spriteName).resumeAnimation();
}


var forEachSpriteSpriteCollisionDo = function(sprite1Name, sprite2Name, collisionHandlingFunction){
    $("#"+sprite1Name).collision(".gQ_group, #"+sprite2Name).each(collisionHandlingFunction);
    // collisionHandlingFunction can optionally take two arguments: collIndex, hitSprite
    // see http://api.jquery.com/jQuery.each
}

var forEachSpriteGroupCollisionDo = function(sprite1Name, groupName, collisionHandlingFunction){
    $("#"+sprite1Name).collision("#"+ groupName + ", .gQ_sprite").each(collisionHandlingFunction);
    // collisionHandlingFunction can optionally take two arguments: collIndex, hitSprite
    // see http://api.jquery.com/jQuery.each
}

var forEachSpriteFilteredCollisionDo = function(sprite1Name, filterStr, collisionHandlingFunction){
    $("#"+sprite1Name).collision(filterStr).each(collisionHandlingFunction);
    // see http://gamequeryjs.com/documentation/api/#collision for filterStr spec
    // collisionHandlingFunction can optionally take two arguments: collIndex, hitSprite
    // see http://api.jquery.com/jQuery.each
}

var getKeyState = function(key){
    return $.gQ.keyTracker[key];
}

var getMouseX = function(){
    return $.gQ.mouseTracker.x;
}
var getMouseY = function(){
    return $.gQ.mouseTracker.y;
}
var getMouseButton1 = function(){
    return $.gQ.mouseTracker[1];
}
var getMouseButton2 = function(){
    return $.gQ.mouseTracker[2];
}
var getMouseButton3 = function(){
    return $.gQ.mouseTracker[3];
}
