import { TextInput } from "carbon-components-react"

const NameInput = ({ nameType, invalid, setInvalid, setName }) => {
	const invalidName = new RegExp("^[a-zA-Z]{2,20}$")
	return (
		<TextInput
			className="name"
			id={nameType}
			required
			invalidText={`Your ${nameType} Name has to be alpha-numeric and 2-20 characters long.`}
			labelText={`${nameType} Name`}
			placeholder={`${nameType} Name`}
			helperText={`Enter the characters ${nameType.toLowerCase()} name. This cannot cannot be more than 20 characters.`}
			invalid={invalid}
			onChange={(event) => {
				let value = event.target.value
				if (value.match(invalidName) === null) {
					setInvalid(true)
				} else {
					if (invalid) {
						setInvalid(false)
					}
					setName(value)
				}
			}}
		/>
	)
}

export default NameInput
