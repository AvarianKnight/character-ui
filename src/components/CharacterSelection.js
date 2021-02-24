import { useEffect, useState } from "react"
import { SendNui } from "./hooks/SendNui"
import CharacterCard from "./CharacterCard/CharacterCard"
import CreateCharacter from "./CreateCharacter/CreateCharacter"
import Footer from "./CharacterCard/Footer"

const CharacterSelection = () => {
	const [characters, setCharacters] = useState(null)
	// const [characters, setCharacters] = useState([{"sex":"m","accounts":"{\"bank\":609293,\"money\":20330,\"black_money\":672939}","lastname":"Knight","job":"lawyer","firstname":"Avarian","id":22107,"dateofbirth":"1999-08-07","identifier":"discord:157679982653472768"},{"sex":"m","accounts":"{\"black_money\":0,\"money\":2775,\"bank\":-2035061}","lastname":"Bolt","job":"police","firstname":"Chase","id":23353,"dateofbirth":"1975-5-3","identifier":"Char2:157679982653472768"},{"sex":"m","accounts":"{\"bank\":609293,\"money\":20330,\"black_money\":672939}","lastname":"Knight","job":"lawyer","firstname":"Avarian","id":22101,"dateofbirth":"1999-08-07","identifier":"discord:157679982653472768"},{"sex":"m","accounts":"{\"black_money\":0,\"money\":2775,\"bank\":-2035061}","lastname":"Bolt","job":"police","firstname":"Chase","id":23354,"dateofbirth":"1975-5-3","identifier":"Char2:157679982653472768"},{"sex":"m","accounts":"{\"bank\":609293,\"money\":20330,\"black_money\":672939}","lastname":"Knight","job":"lawyer","firstname":"Avarian","id":22108,"dateofbirth":"1999-08-07","identifier":"discord:157679982653472768"},{"sex":"m","accounts":"{\"black_money\":0,\"money\":2775,\"bank\":-2035061}","lastname":"Bolt","job":"police","firstname":"Chase","id":2339,"dateofbirth":"1975-5-3","identifier":"Char2:157679982653472768"}])

	const [creating, setCreating] = useState(false)

	useEffect(() => {
		window.addEventListener("message", (event) => {
			if (event.data.type === "loadCharacters") {
				setCharacters(event.data.characters)
			}
		})
		setTimeout(() => {
			SendNui("enable-selection", true)
		}, 250)
	}, [])

	return (
		<div className="home">
			<div>
				<div className="character-list">
					{characters !== null &&
						characters.map((character) => (
							<div
								className="character-preview"
								key={character.id}
							>
								<CharacterCard character={character} setCharacters={setCharacters} />
							</div>
						))}
				</div>
				{characters !== null && <Footer characters={characters} setCreating={setCreating} />}
				{creating &&  <CreateCharacter open={creating} setOpen={setCreating} setCharacters={setCharacters} />}
			</div>
		</div>
	)
}

export default CharacterSelection
