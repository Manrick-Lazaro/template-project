import { useForm } from "react-hook-form";

export default function Form(): JSX.Element {
	const { getValues, reset, handleSubmit, register } = useForm();

	function resetValues(): void {
		reset();
	}

	function onSubmit(): void {
		const { nome, email, telefone, idade } = getValues();

		if (nome != "" && email != "" && telefone != "" && idade != "") {
			console.log("ebaaaa tudo certo com os dados!");
		} else {
			console.log("deu errado aí, faltou preencher algum dado!");
		}
	}

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="d-flex flex-column rounder-sm shadow-sm container-md"
			>
				<section className="d-flex flex-column mt-5">
					<label className="d-flex flex-column">
						Nome:
						<input
							type="text"
							className="p-1 border-gray-20 rounder-sm border-solid-md"
							{...register("nome")}
						/>
					</label>
					<label className="d-flex flex-column mt-3">
						E-mail:
						<input
							type="email"
							className="p-1 border-gray-20 rounder-sm border-solid-md"
							{...register("email")}
						/>
					</label>
					<label className="d-flex flex-column mt-3">
						Telefone:
						<input
							type="text"
							className="p-1 border-gray-20 rounder-sm border-solid-md"
							{...register("telefone")}
						/>
					</label>
					<label className="d-flex flex-column mt-3">
						Idade:
						<input
							type="number"
							className="p-1 border-gray-20 rounder-sm border-solid-md"
							{...register("idade")}
						/>
					</label>
				</section>

				<div className="d-flex flex-row justify-content-center mt-5 mb-5">
					<button
						type="button"
						onClick={resetValues}
						className="br-button secondary mr-1"
					>
						Limpar valores
					</button>
					<button
						type="submit"
						className="br-button primary ml-1"
					>
						Enviar
					</button>
				</div>
			</form>
		</>
	);
}
