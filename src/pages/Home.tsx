import { useEffect, useState } from "react";
import HPService from "../services/HPService";

export default function Home() {
	const [HP, setHP] = useState([]);

	useEffect(() => {
		handleHP();
	}, []);

	async function handleHP() {
		try {
			const response = await HPService.allCharacters();
			setHP(response);
			console.log("response", response);
		} catch (error) {
			console.log("Erro", error);
		}
	}

	return (
		<>
			<div className="row m-5">
				{HP.map((character: any, index: number) => (
					<div
						key={index}
						className="col-sm-6 col-md-4 col-lg-3"
						style={{ width: "15rem", height: "25rem" }}
					>
						<div className="br-card">
							<div className="card-content d-flex justify-content-center">
								<img
									src={
										character.image
											? character.image
											: "https://miro.medium.com/v2/resize:fit:680/1*xxpmeQ7q5LzV0s2no2QAmg.png"
									}
									alt={character.name}
									style={{
										height: "10rem",
									}}
								/>
							</div>
							<h2 className="d-flex justify-content-center">
								{character.name}
							</h2>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
