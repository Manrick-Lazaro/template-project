import "./styles.css";

export default function Botao({ action, label, className }) {
	return (
		<>
			<button
				className={className}
				onClick={action}
			>
				{label}
			</button>
		</>
	);
}
