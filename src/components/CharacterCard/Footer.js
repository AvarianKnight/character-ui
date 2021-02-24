const Footer = ({ characters, setCreating }) => (
	characters.length < 15 ? (
		<div
			className="create-character"
			onClick={() => setCreating(true)}
		>
			<h1 className="button-highlight">
				Create a new Character
			</h1>
		</div>
	) : (
		<div className="create-character">
			<h1 className="button-highlight delete">
				The maximum character count is currently 15.
			</h1>
		</div>
	)
);

 
export default Footer;