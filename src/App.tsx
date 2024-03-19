import { useState } from "react";
import Botao from "./components/Botao";
import "./App.css";

function App() {
	const [numero, setNumero] = useState(0);

	function incrementar(): void {
		setNumero(numero + 1);
	}

	function decrementar(): void {
		setNumero(numero - 1);
	}

	return (
		<>
			<Botao
				className="br-button secondary"
				action={decrementar}
				label="-"
			/>
			<span className={`${numero >= 0 ? "verde" : "vermelho"}`}>
				{numero}
			</span>
			<Botao
				className="br-button primary"
				action={incrementar}
				label="+"
			/>
			<div className="m-5">
				{numero % 2 === 0
					? "Este número é par!"
					: "Este número é ímpar!"}
			</div>

			<div>{numero < 0 && <span>Este número é negativo</span>}</div>
		</>
	);
}

export default App;
