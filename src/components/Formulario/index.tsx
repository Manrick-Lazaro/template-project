import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function Form(): JSX.Element {
	const schema = yup.object().shape({
		nome: yup
			.string()
			.required("O nome é obrigatório.")
			.min(3, "O nome deve ter no mínimo 3 caracteres."),
		email: yup
			.string()
			.max(30, "O email deve ter no máximo 30 caracteres.")
			.required("O email é obrigatório.")
			.email("Informe um e-mail válido."),
		telefone: yup
			.string()
			.test(
				"type",
				"O telefone deve ser composto apenas de números.",
				(value) => !value || /^\d+$/.test(value),
			)
			.test(
				"len",
				"O telefone deve ter exatamente 11 caracteres.",
				(value) => !value || value.length === 11,
			),

		idade: yup
			.number()
			.transform((value) => (Number.isNaN(value) ? null : value))
			.positive("A idade deve ser maior que zero.")
			.integer("A idade deve ser um valor inteiro.")
			.required("A idade é obrigatória."),
	});

	const {
		reset,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	function resetValues(): void {
		reset();
	}

	function onSubmit(): void {
		console.log("tudo certo!");
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
					<span className="text-red-vivid-40 text-weight-extra-bold d-flex justify-content-start">
						{errors.nome?.message}
					</span>

					<label className="d-flex flex-column mt-3">
						E-mail:
						<input
							type="email"
							className="p-1 border-gray-20 rounder-sm border-solid-md"
							{...register("email")}
						/>
					</label>
					<span className="text-red-vivid-40 text-weight-extra-bold d-flex justify-content-start">
						{errors.email?.message}
					</span>

					<label className="d-flex flex-column mt-3">
						Telefone:
						<input
							type="text"
							className="p-1 border-gray-20 rounder-sm border-solid-md"
							{...register("telefone")}
						/>
					</label>
					<span className="text-red-vivid-40 text-weight-extra-bold d-flex justify-content-start">
						{errors.telefone?.message}
					</span>

					<label className="d-flex flex-column mt-3">
						Idade:
						<input
							type="number"
							className="p-1 border-gray-20 rounder-sm border-solid-md"
							{...register("idade")}
						/>
					</label>
					<span className="text-red-vivid-40 text-weight-extra-bold d-flex justify-content-start">
						{errors.idade?.message}
					</span>
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
