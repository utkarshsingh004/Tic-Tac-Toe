import { useState } from "react";
import Card from "../card/card";
import "./grid.css";
import isWinner from "../../helpers/checkWinner";

function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));

  const [turn, setturn] = useState(true);

  const [winner, setWinner] = useState(null);

  const [result, setResult] = useState(false);

  const [count, setCount] = useState(0);

  const [tied, setTied] = useState(false)
  function play(index) {
    if (turn == true) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }

    setCount(count+1)


    const win = isWinner(board, turn ? "O" : "X");
    if (win == "O" || win == "X") {
      setWinner(win);
      setResult(true);
    }
    if(count==8){
        setTied(true)
        setResult(true);
    }
    setBoard([...board]);
    setturn(!turn);
  }

  function reset() {
    setturn(true);
    setWinner(null);
    setBoard(Array(numberOfCards).fill(""));
    setResult(false);
    setCount(0)
  }

  return (
    <div className="grid-wrapper">
      {
        tied  &&(
            <>
             <h1 className="turn-highlight tie">
            Match Tied 🤪
          </h1>
          <button className="reset" onClick={reset}>
            Reset
          </button>
            </>
        )
      }
      {winner && (
        <>
          <h1 className="turn-highlight winner">
            Hurray! 🎉 Winner is: <big className="win">{winner}</big>
          </h1>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </>
      )}
      {!result ? (
        <h1 className="turn-highlight result">
          Current turn: {turn ? "O" : "X"}
          {/* {count} */}
        </h1>
      ) : (
        ""
      )}
      <div className="grid">
        {board.map((el, idx) => (
          <Card
            gameEnd={winner ? true : false}
            key={idx}
            onPlay={play}
            player={el}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;
