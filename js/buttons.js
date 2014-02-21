var buttons = [120];
var pieceInHand, pieceInHandColor, pieceInHandType;

function drawButtons() {
	for (x = 21; x < 99; x++) {
		var fingerX = (((chessboard.get(x).get("file") - 1) * gridSize) + margin) + (gridSize / 2);
		var fingerY = ((((8 - (chessboard.get(x).get("rank"))) * gridSize) + margin) + (gridSize / 2));
		
		buttons[x] = new createjs.Shape();
		buttons[x].graphics.beginFill("white").drawCircle(fingerX, fingerY, 16);
		buttons[x].alpha = 0.2;
		buttons[x].id = chessboard.get(x).get("id");
		
		stage.addChild(buttons[x]);
	}
	stage.update();
}

function scanButtons() {
	for (x = 21; x < 99; x++) {
		buttons[x].on("mouseover", handleMouseOver);
		
		buttons[x].on("mousedown", function(evt) {
			this.parent.addChild(chessboard.get(this.id).get("currentPiece"));
			this.offset = {x:this.x-evt.stageX, y:this.y-evt.stageY};
		});

		buttons[x].on("pressmove", function(evt) {
			this.x = evt.stageX + this.offset.x;
			this.y = evt.stageY+ this.offset.y;
				
			update = true;
		});
	}
}

function handleMouseOver() {
	console.log(chessboard.get(this.id).get("currentPiece"));
}

function pickPiece() {
/*
	console.log(this.id + " was clicked");
	
	pieceInHand = chessboard.get(this.id);
	pieceInHandColor = pieceInHand.get("color");
	pieceInHandType = pieceInHand.get("type");
	
	if (pieceInHand.get("currentPiece") != "null") {
		for (x = 21; x < 99; x++) {
			buttons[x].on("click", placePiece);
		}
	}
*/
	alert("Clickidy!");
}

function placePiece() {
	var proposedSquare = chessboard.get(this.id);
	
	proposedSquare.set({color: pieceInHandColor});
	proposedSquare.set({currentPiece: pieceInHandType});
	
	pieceInHand.set({color: "null"});
	pieceInHand.set({currentPiece: "null"});
	pieceInHandColor = pieceInHandType = "null";
	
	stage.update();
}




