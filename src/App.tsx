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
				className=""
				action={decrementar}
				label="-"
			/>
			{numero}
			<Botao
				className=""
				action={incrementar}
				label="+"
			/>
		</>
	);
}

export default App;
