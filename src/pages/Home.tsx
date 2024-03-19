import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<div className="col-auto m-5 ">
				<Link to={"/sobre"}>
					<button className="br-button primary">Sobre nós</button>
				</Link>
			</div>
		</>
	);
}
