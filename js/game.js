var canvas = document.getElementById("gameCanvas");
var stage = new createjs.Stage(canvas);

var margin = 6, gridSize = 36, zOffset = 2;
var white = "#CCCCCC", black = "#333333";

var update = true;
var gameInit = true;

var ApplicationSetting = Backbone.Model.extend({
    defaults: {
        manifest: [
            {src:"img/chess-sprites.png", id:"chessSprites"}
        ]
    }
});

createjs.Ticker.addEventListener("tick", updateScreen);
createjs.Ticker.setInterval(25);
stage.enableMouseOver(20);

FenSpace.parseFEN();
FenSpace.populateBoard();

function loadResources() {
	var applicationSetting = new ApplicationSetting();
	var loader = new createjs.LoadQueue(false);
	loader.onFileLoad = this.fileLoadHandler;
	loader.onComplete = this.completeHandler;
	loader.loadManifest(applicationSetting.get("manifest"));
}

function init() {
	if (gameInit) {	
		gameInit = false;
		loadResources();
		drawChessboard();
		drawPieces();
		drawButtons();
		scanButtons();
		FenSpace.drawFEN();
		stage.update();
	}
}

function updateScreen(event) { 
	if (update) {
		update = false;
		stage.update();
	}
	if (gameInit) {
		setTimeout(init, 1000);
	}
}
	


