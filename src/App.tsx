import { useState } from "react";
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
		</>
	);
}

export default App;
