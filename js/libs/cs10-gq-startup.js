/*
 * cs10 wrapper around gameQuery rev. 0.7.0 startup code
 * hides stuff to make things easier
 * load this after myprogram.js
 */

$(function(){
    PLAYGROUND_WIDTH = GQ_PLAYGROUND_WIDTH;
    PLAYGROUND_HEIGHT = GQ_PLAYGROUND_HEIGHT;
    var REFRESH_RATE = 40;
    sprite("playground").playground({height: GQ_PLAYGROUND_HEIGHT,
                                 width: GQ_PLAYGROUND_WIDTH,
                                 keyTracker: true,
                                 mouseTracker: true});
    setup();
    $.playground().registerCallback(draw, REFRESH_RATE);
    $.playground().startGame();
});
