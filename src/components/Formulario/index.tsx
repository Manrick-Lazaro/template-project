import { useForm } from "react-hook-form";

export default function Form() {
	const { register, handleSubmit, getValues, reset } = useForm();

	function onSubmit(data: any): void {
		console.log(data); // Aqui estão os dados do formulário
	}

	function mostrarValor(): void {
		const { nome, email } = getValues();

		// Realize a validação dinâmica com os valores dos campos
		// Exemplo de validação simples
		console.log("valor de nome: ", nome);
		console.log("valor de email: ", email);
	}

	function limparValor(): void {
		console.log("Antes de limpar", getValues());
		reset();
		console.log("Depois de limpar", getValues());
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>
				Nome:
				<input
					type="text"
					{...register("nome")}
				/>
			</label>
			<br />
			<label>
				E-mail:
				<input
					type="email"
					{...register("email")}
				/>
			</label>
			<br />

			<button
				type="button"
				onClick={mostrarValor}
			>
				Mostrar valores
			</button>
			<button type="submit">Enviar</button>
			<button
				type="button"
				onClick={limparValor}
			>
				Limpar valores
			</button>
		</form>
	);
}
