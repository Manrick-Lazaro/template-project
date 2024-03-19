import { useState } from "react";

export default function Formulario() {
	// Estado para armazenar os valores dos campos do formulário
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");

	// Manipulador para atualizar o estado quando o campo Nome for alterado
	function handleNomeChange(event): void {
		setNome(event.target.value);
	}

	// Manipulador para atualizar o estado quando o campo Email for alterado
	function handleEmailChange(event): void {
		setEmail(event.target.value);
	}

	// Manipulador para lidar com o envio do formulário
	function handleSubmit(event): void {
		event.preventDefault();
		console.log("Nome:", nome);
		console.log("Email:", email);
		// Aqui você pode enviar os dados para o servidor ou realizar outras ações
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Nome:
				<input
					type="text"
					value={nome}
					onChange={handleNomeChange}
				/>
			</label>
			<br />
			<label>
				Email:
				<input
					type="email"
					value={email}
					onChange={handleEmailChange}
				/>
			</label>
			<br />
			<button type="submit">Enviar</button>
		</form>
	);
}
