var chesspieceSheet = new createjs.SpriteSheet({
		animations: {
			whitePawn:[0],
			whiteRook:[1],
			whiteKnight:[2],
			whiteBishop:[3],
			whiteQueen:[4],
			whiteKing:[5],
			blackPawn:[6],
			blackRook:[7],
			blackKnight:[8],
			blackBishop:[9],
			blackQueen:[10],
			blackKing:[11]
			},
			images: ["img/chess-sprites.png"],
			frames: {width:36, height:36, regX:0, regY:0, count: 12 },
		});
		
	var whitePawn = ({
		1: new createjs.Sprite(chesspieceSheet),
		2: new createjs.Sprite(chesspieceSheet),
		3: new createjs.Sprite(chesspieceSheet),
		4: new createjs.Sprite(chesspieceSheet),
		5: new createjs.Sprite(chesspieceSheet),
		6: new createjs.Sprite(chesspieceSheet),
		7: new createjs.Sprite(chesspieceSheet),
		8: new createjs.Sprite(chesspieceSheet)
	});
	var whiteKnight = ({
		1: new createjs.Sprite(chesspieceSheet),
		2: new createjs.Sprite(chesspieceSheet)
	});
	var whiteBishop = ({
		1: new createjs.Sprite(chesspieceSheet),
		2: new createjs.Sprite(chesspieceSheet)
	});
	var whiteRook = ({
		1: new createjs.Sprite(chesspieceSheet),
		2: new createjs.Sprite(chesspieceSheet)
	});
	var whiteQueen = ({
		1: new createjs.Sprite(chesspieceSheet),
		2: new createjs.Sprite(chesspieceSheet)
	});
	var whiteKing = ({
		1: new createjs.Sprite(chesspieceSheet),
		2: new createjs.Sprite(chesspieceSheet)
	});
	
	var blackPawn = ({
		1: new createjs.Sprite(chesspieceSheet),
		2: new createjs.Sprite(chesspieceSheet),
		3: new createjs.Sprite(chesspieceSheet),
		4: new createjs.Sprite(chesspieceSheet),
		5: new createjs.Sprite(chesspieceSheet),
		6: new createjs.Sprite(chesspieceSheet),
		7: new createjs.Sprite(chesspieceSheet),
		8: new createjs.Sprite(chesspieceSheet)
	});
	var blackKnight = ({
		1: new createjs.Sprite(chesspieceSheet),
		2: new createjs.Sprite(chesspieceSheet)
	});
	var blackBishop = ({
		1: new createjs.Sprite(chesspieceSheet),
		2: new createjs.Sprite(chesspieceSheet)
	});
	var blackRook = ({
		1: new createjs.Sprite(chesspieceSheet),
		2: new createjs.Sprite(chesspieceSheet)
	});
	var blackQueen = ({
		1: new createjs.Sprite(chesspieceSheet),
		2: new createjs.Sprite(chesspieceSheet)
	});
	var blackKing = ({
		1: new createjs.Sprite(chesspieceSheet),
		2: new createjs.Sprite(chesspieceSheet)
	});
	
	function drawPieces() {
		var whitePawn_i = 1, blackPawn_i = 1,
		whiteKnight_i = 1, blackKnight_i = 1,
		whiteBishop_i = 1, blackBishop_i = 1,
		whiteRook_i = 1, blackRook_i = 1,
		whiteQueen_i = 1, blackQueen_i = 1,
		whiteKing_i = 1, blackKing_i = 1;
		
		for (x = 0; x < 120; x++) {
		var fingerX = (((chessboard.get(x).get("file") - 1) * gridSize) + margin);
		var fingerY =  ((((8 - (chessboard.get(x).get("rank"))) * gridSize) + margin) - zOffset); 
		var currentPiece = chessboard.get(x).get("currentPiece");
		var pieceColor = chessboard.get(x).get("color");
			if (currentPiece == "pawn") {
				if (pieceColor == "white"){
					whitePawn[whitePawn_i].x = fingerX;
					whitePawn[whitePawn_i].y = fingerY;
					whitePawn[whitePawn_i].gotoAndStop("whitePawn");
					chessboard.get(x).set({image: whitePawn[whitePawn_i]});
					stage.addChild(whitePawn[whitePawn_i]);
					whitePawn_i++;
				} else if (pieceColor == "black") {
					blackPawn[blackPawn_i].x = fingerX;
					blackPawn[blackPawn_i].y = fingerY;
					blackPawn[blackPawn_i].gotoAndStop("blackPawn");
					chessboard.get(x).set({image: blackPawn[blackPawn_i]});
					stage.addChild(blackPawn[blackPawn_i]);
					blackPawn_i++;
				} 
			}
			if (currentPiece == "knight") {
				if (pieceColor == "white"){
					whiteKnight[whiteKnight_i].x = fingerX;
					whiteKnight[whiteKnight_i].y = fingerY;
					whiteKnight[whiteKnight_i].gotoAndStop("whiteKnight");
					chessboard.get(x).set({image: whiteKnight[whiteKnight_i]});
					stage.addChild(whiteKnight[whiteKnight_i]);
					whiteKnight_i++;
				} else if (pieceColor == "black") {
					blackKnight[blackKnight_i].x = fingerX;
					blackKnight[blackKnight_i].y = fingerY;
					blackKnight[blackKnight_i].gotoAndStop("blackKnight");
					chessboard.get(x).set({image: blackKnight[blackKnight_i]});
					stage.addChild(blackKnight[blackKnight_i]);
					blackKnight_i++;
				} 
			}
			if (currentPiece == "bishop") {
				if (pieceColor == "white"){
					whiteBishop[whiteBishop_i].x = fingerX;
					whiteBishop[whiteBishop_i].y = fingerY;
					whiteBishop[whiteBishop_i].gotoAndStop("whiteBishop");
					chessboard.get(x).set({image: whiteBishop[whiteBishop_i]});
					stage.addChild(whiteBishop[whiteBishop_i]);
					whiteBishop_i++;
				} else if (pieceColor == "black") {
					blackBishop[blackBishop_i].x = fingerX;
					blackBishop[blackBishop_i].y = fingerY;
					blackBishop[blackBishop_i].gotoAndStop("blackBishop");
					chessboard.get(x).set({image: blackBishop[blackBishop_i]});
					stage.addChild(blackBishop[blackBishop_i]);
					blackBishop_i++;
				} 
			}
			if (currentPiece == "rook") {
				if (pieceColor == "white"){
					whiteRook[whiteRook_i].x = fingerX;
					whiteRook[whiteRook_i].y = fingerY;
					whiteRook[whiteRook_i].gotoAndStop("whiteRook");
					chessboard.get(x).set({image: whiteRook[whiteRook_i]});
					stage.addChild(whiteRook[whiteRook_i]);
					whiteRook_i++;
				} else if (pieceColor == "black") {
					blackRook[blackRook_i].x = fingerX;
					blackRook[blackRook_i].y = fingerY;
					blackRook[blackRook_i].gotoAndStop("blackRook");
					chessboard.get(x).set({image: blackRook[blackRook_i]});
					stage.addChild(blackRook[blackRook_i]);
					blackRook_i++;
				} 
			}
			if (currentPiece == "queen") {
				if (pieceColor == "white"){
					whiteQueen[whiteQueen_i].x = fingerX;
					whiteQueen[whiteQueen_i].y = fingerY;
					whiteQueen[whiteQueen_i].gotoAndStop("whiteQueen");
					chessboard.get(x).set({image: whiteQueen[whiteQueen_i]});
					stage.addChild(whiteQueen[whiteQueen_i]);
					whiteQueen_i++;
				} else if (pieceColor == "black") {
					blackQueen[blackQueen_i].x = fingerX;
					blackQueen[blackQueen_i].y = fingerY;
					blackQueen[blackQueen_i].gotoAndStop("blackQueen");
					chessboard.get(x).set({image: blackQueen[blackQueen_i]});
					stage.addChild(blackQueen[blackQueen_i]);
					blackQueen_i++;
				} 
			}
			if (currentPiece == "king") {
				if (pieceColor == "white"){
					whiteKing[whiteKing_i].x = fingerX;
					whiteKing[whiteKing_i].y = fingerY;
					whiteKing[whiteKing_i].gotoAndStop("whiteKing");
					chessboard.get(x).set({image: whiteKing[whiteKing_i]});
					stage.addChild(whiteKing[whiteKing_i]);
					whiteKing_i++;
				} else if (pieceColor == "black") {
					blackKing[blackKing_i].x = fingerX;
					blackKing[blackKing_i].y = fingerY;
					blackKing[blackKing_i].gotoAndStop("blackKing");
					chessboard.get(x).set({image: blackKing[blackKing_i]});
					stage.addChild(blackKing[blackKing_i]);
					blackKing_i++;
				} 
			}
		}
		update = true;
	}