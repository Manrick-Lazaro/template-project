import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./pages/Sobre.tsx";
import Home from "./pages/Home.tsx";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/sobre"
						element={<Sobre />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
