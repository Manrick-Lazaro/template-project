import Header from "../components/Header";

export default function Home() {
	return (
		<>
			<Header />
			<div className="col-auto m-5">
				<h1>Home</h1>
				<p>
					O que é Lorem Ipsum? Lorem Ipsum é simplesmente uma
					simulação de texto da indústria tipográfica e de impressos,
					e vem sendo utilizado desde o século XVI, quando um
					impressor desconhecido pegou uma bandeja de tipos e os
					embaralhou para fazer um livro de modelos de tipos. Lorem
					Ipsum sobreviveu não só a cinco séculos, como também ao
					salto para a editoração eletrônica, permanecendo
					essencialmente inalterado.
				</p>
			</div>
		</>
	);
}
