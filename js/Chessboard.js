Tile = Backbone.Model.extend({
	defaults: {
        file: 'null',
        rank: 'null',
		currentPiece: 'null',
		color: 'null',
		id: 'null',
		threatenedByBlack: 'null',
		threatenedByWhite: 'null',
		pieceImage: 'null'
    },
    initialize: function() {
        //
    }
});
   
var Chessboard = Backbone.Collection.extend({
	model: Tile
});

//====create chessboard====

var chessboard = new Chessboard;
var rankCounter = 10, fileCounter, fileLetter;

for (x = 0; x < 120; x++) {
	var tile = new Tile; 
	tile.set({id: x});
	
	fileCounter = (x%10);
		
	if ((x > 20) && (x < 101)) { 
		if ((fileCounter != 0) && (fileCounter != 9)) {
			tile.set({rank: rankCounter});
			tile.set({file: fileCounter});
			if ((tile.get("file") % 2) == (tile.get("rank") % 2)) {
				tile.set({color: "black"});
			} else {
				tile.set({color: "white"});
			}
		}
	}
		
	if (fileCounter == 9) { rankCounter--; }
	fileCounter++;
	
	chessboard.push(tile);
}
//=========================
function drawChessboard() {
	var chessboardBorder = new createjs.Shape();
	var tileImage = new createjs.Shape();
		
	chessboardBorder.graphics.beginFill("black").drawRect(margin - 1, margin - 1, ((gridSize * 8) + 2), ((gridSize * 8) + 2));
	stage.addChild(chessboardBorder);
		
	for (x = 0; x < 120; x++) {
		var tileImageObject = chessboard.get(x);
			
		var posX = ((tileImageObject.get("file") - 1) * gridSize) + margin;
		var posY = ((8 * gridSize) - (tileImageObject.get("rank") * gridSize)) + margin;
			
		if ((chessboard.get(x).get("file") % 2) != (chessboard.get(x).get("rank") % 2)) { 
				tileImage.graphics.beginFill(white).drawRect(posX, posY, gridSize, gridSize);
				stage.addChild(tileImage);
		} else {
				tileImage.graphics.beginFill(black).drawRect(posX, posY, gridSize, gridSize);
				stage.addChild(tileImage);
		}
	}
	stage.update();
}

console.log(chessboard.models);
