import { useEffect, useState } from "react";
import "./App.css";
import Botao from "./components/Botao";

function App() {
	const [numero, setNumero] = useState(0);

	function incrementar(): void {
		setNumero(numero + 1);
	}

	function decrementar(): void {
		setNumero(numero - 1);
	}

	useEffect(() => {
		console.log(
			"É acionado sempre que houver qualquer alteração no componente.",
		);
	});

	useEffect(() => {
		console.log(
			"É acionado uma única vez quando o componente é renderizado.",
		);
	}, []);

	useEffect(() => {
		console.log(
			"É acionado quando houver alteração em qualquer estado ou variável especificada dentro dos colchetes.",
		);
	}, [numero]);

	return (
		<>
			<Botao
				className="br-button primary"
				action={decrementar}
				label="-"
			/>
			<span className="numero">{numero}</span>
			<Botao
				className="br-button secondary"
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
