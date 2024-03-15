import './App.css';
import { useState } from 'react';

function Squares({value,onSquarClick}) {


    return (
        <button  onClick={onSquarClick} className="square">{value}</button>
    );
}


export default function Board() {
  const[mysquare,setMySquares]=useState(Array(9).fill(null)); 
  const[xIsNext,setX]=useState(true);
  const win=calWinner(mysquare);
  let status;
  if(win){
    status="The Winner  : "+win;
  }else{
    status="The Next Player : "+(xIsNext ? "X" :"O");
  }
  function handelClick(i){
    if(mysquare[i]||calWinner(mysquare)){
      return;
    }
    const  nextClick=mysquare.slice();
    if(xIsNext){
    nextClick[i]="X";
    }else{
      nextClick[i]="O";
    }
    setMySquares(nextClick);
    setX(!xIsNext);
  }
    return (
        <div className="game">
            <h1>Tic Tac Toe Game</h1>
            <div className="status">{status}</div>
            <div className="border">
                <Squares onSquarClick={()=>handelClick(0)} value={mysquare[0]} />
                <Squares onSquarClick={()=>handelClick(1)} value={mysquare[1]} />
                <Squares onSquarClick={()=>handelClick(2)} value={mysquare[2]} />
                <Squares onSquarClick={()=>handelClick(3)} value={mysquare[3]}/>
                <Squares onSquarClick={()=>handelClick(4)}value={mysquare[4]}/>
                <Squares onSquarClick={()=>handelClick(5)} value={mysquare[5]}/>
                <Squares onSquarClick={()=>handelClick(6)} value={mysquare[6]}/>
                <Squares onSquarClick={()=>handelClick(7)} value={mysquare[7]}/>
                <Squares onSquarClick={()=>handelClick(8)} value={mysquare[8]}/>
            </div>
        </div>
    );
}
function calWinner(mysquare) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (mysquare[a] && mysquare[a] === mysquare[b] && mysquare[a] === mysquare[c]) {
      return mysquare[a];
    }
  }
  return null;
}
