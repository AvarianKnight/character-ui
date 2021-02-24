import { useState } from "react"
import { SendNui } from "../hooks/SendNui"
import CharacterCardData from "./CharacterCardData"
import DeleteModal from "./DeleteModal"

const CharacterCard = ({ character, setCharacters }) => {
	const [deleteModalOpen, setDeleteModalOpen] = useState(false)
	
	return (
		<div className="characters">
			{deleteModalOpen && <DeleteModal uniqueId={character.id} open={deleteModalOpen} setOpen ={setDeleteModalOpen}/>}
			<CharacterCardData character={character} />
			<div className="selected-character">
				<ul>
					<li
						className="button-highlight"
						onClick={() => {
							SendNui("select-character", character.id)
							setCharacters(null)
						}}
					>
						Select Character
					</li>

					<li
						className="button-highlight delete"
						onClick={() => {
							setDeleteModalOpen(true)
						}}
					>
						Delete Character
					</li>
				</ul>
			</div>
		</div>
	)
}

export default CharacterCard
