import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [estado, setEstado] = useState('ENTRADA')
  const [palpite, setPalpite] = useState(150)
  const [numPalpites, setNumPalpites] = useState(1)
  const [minimo, setMinimo] = useState(0)
  const [max, setMax] = useState(300)

  const iniciarJogo = () => {
    setEstado('RODANDO')
    setMinimo(0)
    setMax(300)
    setNumPalpites(1)
    setPalpite(150)
  }
  if (estado === 'ENTRADA')
    return <button onClick={iniciarJogo}>Começar a jogar</button>
  
  const menor = () => {
    setNumPalpites(numPalpites + 1)
    setMax(palpite)
    const proxPalpite = parseInt((palpite - minimo) / 2) + minimo
    setPalpite(proxPalpite)
  }

  const maior = () => {
    setNumPalpites(numPalpites + 1)
    setMinimo(palpite)
    const proxPalpite = parseInt((max - palpite) / 2) + palpite
    setPalpite(proxPalpite)
  }

  const acertou = () => {
    setEstado('FIM')
  }
  if (estado === 'FIM'){
    return (
      <div>
        <p>Acertei o número {palpite} com {numPalpites} chutes!</p>
        <button onClick={iniciarJogo}>Reiniciar jogo!</button>
      </div>  
    )
  }  
  
  return (
    <div className="App">
      <p>O seu número é {palpite}?</p>
      <p>Min: {minimo}  / Máx: {max}</p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}