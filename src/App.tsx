import { useState } from "react";
import "./App.css";

function App() {
	const [numero, setNumero] = useState(0);

	function incrementar(): void {
		setNumero(numero + 1);
	}

	return (
		<>
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
