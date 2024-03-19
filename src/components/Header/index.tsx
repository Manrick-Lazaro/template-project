import { Link } from "react-router-dom";

export default function Header() {
	return (
		<>
			<header className="br-header d-flex justify-content-center">
				<div className="header-actions">
					<div className="header-links dropdown">
						<div className="br-list">
							<Link
								to={"/"}
								className="br-item"
							>
								Home
							</Link>
							<Link
								to={"/sobre"}
								className="br-item"
							>
								Sobre nós
							</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
