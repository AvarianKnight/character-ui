const CharacterCardData = ({ character }) => (
	<div>
		<h1 className="character-name">
			{character.firstname} {character.lastname}
		</h1>
		<h4 className="item">
			Job:{" "}
			{character.job.charAt(0).toUpperCase() + character.job.slice(1)}
		</h4>
		<h4 className="item">SSN: {character.id}</h4>
		<h4 className="item">Cash: {JSON.parse(character.accounts).money}</h4>
		<h4 className="item">Bank: {JSON.parse(character.accounts).bank}</h4>
		<h4 className="item">DoB: {character.dateofbirth}</h4>
		<h4 className="item">
			Gender: {character.sex === "m" ? "Male" : "Female"}
		</h4>
	</div>
)

export default CharacterCardData
