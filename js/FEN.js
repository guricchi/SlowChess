var FenSpace = {};

var FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

var activeColor, castlePermissions, enpassant, 
	halfMoveClock, fullMoveNumber;
	
var board64 = [64];

FenSpace.parseFEN = function() {
	var FEN_Array = FEN.split(" ", 6);
	var FEN_PositionArray = FEN_Array[0].split("");

	var x = 0;
	for (i = 0; i < FEN_PositionArray.length; i++) {
		switch (FEN_PositionArray[i]) {
			case "P": board64[x] = "P"; break;
			case "N": board64[x] = "N"; break;
			case "B": board64[x] = "B"; break;
			case "R": board64[x] = "R"; break;
			case "Q": board64[x] = "Q"; break;
			case "K": board64[x] = "K"; break;
			case "p": board64[x] = "p"; break;
			case "n": board64[x] = "n"; break;
			case "b": board64[x] = "b"; break;
			case "r": board64[x] = "r"; break;
			case "q": board64[x] = "q"; break;
			case "k": board64[x] = "k"; break;
			case "1": board64[x] = "null"; break;
			case "2": 
				for (y = 0; y < 2; y++) {
					board64[x] = "null"; 
					if (y < 1) {
						x++;
					}
				}
			break;
			case "3": 
				for (y = 0; y < 3; y++) {
					board64[x] = "null"; 
					if (y < 2) {
						x++;
					}
				}
			break;
			case "4": 
				for (y = 0; y < 4; y++) {
					board64[x] = "null"; 
					if (y < 3) {
						x++;
					}
				}
			break;
			case "5": 
				for (y = 0; y < 5; y++) {
					board64[x] = "null"; 
					if (y < 4) {
						x++;
					}
				}
			break;
			case "6": 
				for (y = 0; y < 6; y++) {
					board64[x] = "null"; 
					if (y < 5) {
						x++;
					}
				}
			break;
			case "7": 
				for (y = 0; y < 7; y++) {
					board64[x] = "null"; 
					if (y < 6) {
						x++;
					}
				}
			break;
			case "8": 
				for (y = 0; y < 8; y++) {
					board64[x] = "null"; 
					if (y < 7) {
						x++;
					}
				}
			break;
			case "/": 
				x--;
			break;
			default:
				alert("fenParser switch handler error: " + FEN_PositionArray[i]);
			break;
		}
		x++;
	}
	
	if (x != 64) {
		alert("fenParser string length error: " + x);
	}
	
	if (FEN_Array[1] == "w") {
		activeColor = "white";
	}
	else if (FEN_Array[1] == "b") {
		activeColor = "black";
	} else {
		alert("Oops.");
	}
	
	castlePermissions = FEN_Array[2];
	enpassant = FEN_Array[3];
	halfMoveClock = FEN_Array[4];
	fullMoveNumber = FEN_Array[5];
}

FenSpace.populateBoard = function() {
	var boardCurser = 21;

	for (x = 0; x < 64; x++) {
		switch (board64[x]) {
			case "P": 
				chessboard.get(boardCurser).set({currentPiece: "pawn", color: "white"}); 
				chessboard.get(boardCurser).set({pieceImage: whitePawn});
			break;
			case "N": chessboard.get(boardCurser).set({currentPiece: "knight", color: "white"}); break;
			case "B": chessboard.get(boardCurser).set({currentPiece: "bishop", color: "white"}); break;
			case "R": chessboard.get(boardCurser).set({currentPiece: "rook", color: "white"}); break;
			case "Q": chessboard.get(boardCurser).set({currentPiece: "queen", color: "white"}); break;
			case "K": chessboard.get(boardCurser).set({currentPiece: "king", color: "white"}); break;
			case "p": chessboard.get(boardCurser).set({currentPiece: "pawn", color: "black"}); break;
			case "n": chessboard.get(boardCurser).set({currentPiece: "knight", color: "black"}); break;
			case "b": chessboard.get(boardCurser).set({currentPiece: "bishop", color: "black"}); break;
			case "r": chessboard.get(boardCurser).set({currentPiece: "rook", color: "black"}); break;
			case "q": chessboard.get(boardCurser).set({currentPiece: "queen", color: "black"}); break;
			case "k": chessboard.get(boardCurser).set({currentPiece: "king", color: "black"}); break;
		}
		
		boardCurser++;
		if ((boardCurser % 10) == 9) {
			boardCurser += 2;
		}
	}
}




