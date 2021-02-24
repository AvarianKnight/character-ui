import { Slider } from "carbon-components-react"

const HeightInput = ({ setHeight }) => (
	<Slider
		ariaLabelInput="Height in cm"
		id="height"
		labelText="Character Height in cm"
		max={213}
		min={128}
		step={1}
		value={170}
		onRelease={(event) => {
			setHeight(event.value)
		}}
	/>
)

export default HeightInput
