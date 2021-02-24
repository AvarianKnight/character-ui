import {
	FormGroup,
	RadioButton,
	RadioButtonGroup,
} from "carbon-components-react"

const GenderInput = ({ setSex }) => (
	<FormGroup className="radio-buttons" legendText="Gender">
		<RadioButtonGroup
			defaultSelected="m"
			legend="Gender Group"
			name="radio-button-group"
			valueSelected="m"
			onChange={(value) => setSex(value)}
		>
			<RadioButton id="male" labelText="Male" value="m" />
			<RadioButton id="female" labelText="Female" value="f" />
		</RadioButtonGroup>
	</FormGroup>
)

export default GenderInput
