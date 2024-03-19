import { useState } from "react";
import "./App.css";

function App() {
	const [numero, setNumero] = useState(0);

	function decrementar(): void {
		setNumero(numero - 1);
	}

	function incrementar(): void {
		setNumero(numero + 1);
	}

	return (
		<>
			<button
				onClick={() => {
					decrementar();
				}}
			>
				-
			</button>
			{numero}
			<button
				onClick={() => {
					incrementar();
				}}
			>
				+
			</button>
		</>
	);
}

export default App;
