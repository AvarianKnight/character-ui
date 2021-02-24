import { DatePicker, DatePickerInput } from "carbon-components-react"

const curYear = new Date().getFullYear()

const DateInputForm = ({ dob, dobInvalid, setDob, setDobInvalid, IsDateValid}) => (
	<DatePicker
		minDate={`1/1/${curYear - 100}`}
		maxDate={`1/1/${curYear - 18}`}
		datePickerType="single"
	>
		<DatePickerInput
			placeholder="mm/dd/yyyy"
			labelText="Characters Date of Birth (mm/dd/yyyy)"
			id="date-time-picker"
			value={dob}
			invalid={dobInvalid}
			onChange={(event) => {
				const value = event.target.value
				if (value.length === 2 || value.length === 5) {
					setDob(value + "/")
				} else {
					if (value.length !== 8 && IsDateValid(value)) {
						setDobInvalid(false)
						setDob(value)
					} else {
						setDobInvalid(true)
						setDob(value)
					}
				}
			}}
			required
		/>
	</DatePicker>
)

export default DateInputForm
