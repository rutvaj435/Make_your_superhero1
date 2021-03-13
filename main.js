const { fabric } = require("./fabric");

var canvas = new fabric.Canvas("myCanvas");

var block_width = 30;
var block_height = 30;
var player_x = 10;
var player_y = 10;
var playerObject = "";
var blockObject = "";



function player_update() {
    fabric.image.fromURL("player.png", function(Img){
        playerObject = Img;
        playerObject.scaleToWidth("150");
        playerObject.scaleToHeight("140");
        playerObject.set( {
            top:player_y,
            left:player_x

        });
        canvas.add(playerObject);
    });
}

function new_image(get_image) {
    fabric.image.fromURL(get_image, function(Img) {
        blockObject = Img;
        blockObject.scaleToWidth(block_width);
        blockObject.scaleToHeight(block_height);
        blockObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(blockObject);

    });
}

