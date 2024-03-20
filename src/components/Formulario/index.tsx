import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Form() {
	const schema = yup.object().shape({
		nome: yup.string().required("O nome é obrigatório."),
		email: yup
			.string()
			.required("O e-mail é obrigatório.")
			.email("Informe um e-mail válido."),
	});

	const {
		register,
		handleSubmit,
		getValues,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

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
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>
						Nome:
						<input
							type="text"
							{...register("nome")}
						/>
					</label>
					<span>{errors.nome?.message}</span>
				</div>

				<br />

				<div>
					<label>
						E-mail:
						<input
							type="email"
							{...register("email")}
						/>
					</label>
					<span>{errors.email?.message}</span>
				</div>
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
		</>
	);
}
