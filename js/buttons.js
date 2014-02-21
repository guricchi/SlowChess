var buttons = [120];
var piece, proposedTile, pieceInHandColor, pieceInHandType, pieceInHandImage, pieceInHandFEN;

function drawButtons() {
	for (x = 21; x < 99; x++) {
		var fingerX = (((chessboard.get(x).get("file") - 1) * gridSize) + margin) + (gridSize / 2);
		var fingerY = ((((8 - (chessboard.get(x).get("rank"))) * gridSize) + margin) + (gridSize / 2));
		
		buttons[x] = new createjs.Shape();
		buttons[x].graphics.beginFill("white").drawCircle(fingerX, fingerY, 16);
		buttons[x].alpha = 0.01;
		buttons[x].id = chessboard.get(x).get("id");
		
		stage.addChild(buttons[x]);
	}
	update = true;
}

function scanButtons() {
	for (x = 21; x < 99; x++) {
		buttons[x].on("mouseover", handleMouseover);
	
		buttons[x].on("mousedown", function(evt) {
			piece = chessboard.get(this.id).get("image");
			piece.offset = {x:piece.x-evt.stageX, y:piece.y-evt.stageY};
			pieceInHand = chessboard.get(this.id);
			pieceInHandColor = pieceInHand.get("color");
			pieceInHandType = pieceInHand.get("currentPiece");
			pieceInHandImage = pieceInHand.get("image");
			pieceInHandFEN = pieceInHand.get("FEN_Char");
		});

		buttons[x].on("pressmove", function(evt) {
			piece.x = evt.stageX + piece.offset.x;
			piece.y = evt.stageY+ piece.offset.y;
			update = true;
		});
		
		buttons[x].on("pressup", function(evt) {
			for (x = 21; x < 99; x++) {
				if (buttons[x].hitTest(stage.mouseX, stage.mouseY)) {
					proposedTile = chessboard.get(x);
					proposedTile.set({color: pieceInHandColor});
					proposedTile.set({currentPiece: pieceInHandType});
					proposedTile.set({image: pieceInHandImage});
					proposedTile.set({FEN_Char: pieceInHandFEN});
					
					pieceInHand.set({FEN_Char: "null"});
					pieceInHand.set({color: "null"});
					pieceInHand.set({currentPiece: "null"});
					pieceInHand.set({image: "null"});		
					
					FenSpace.generateFEN();
					FenSpace.drawFEN();
				}
			}
			drawPieces();
			update = true;
		});
	}
}

function handleMouseover() {
	//console.log(chessboard.get(this.id).get("currentPiece"));
}




