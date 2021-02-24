import {
	Modal,
	Form,
} from "carbon-components-react"
import { useState } from "react"
import { SendNui } from "../hooks/SendNui"
import GenderInput from "./GenderInput"
import NameInput from "./NameInput"
import DateInputForm from "./DateInputForm"
import IsDateValid from "../hooks/IsDateValid"
import HeightInput from "./HeightInput"

const CreateCharacter = ({ open, setOpen, setCharacters }) => {
	// manage all invalid states
	const [fNameInvalid, setFNameInvalid] = useState(true)
	const [lNameInvalid, setLNameInvalid] = useState(true)
	const [dobInvalid, setDobInvalid] = useState(true)

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [sex, setSex] = useState("m")
	const [dob, setDob] = useState("")
	const [height, setHeight] = useState(170)
	

	return (
		<Modal
			className="create-modal"
			open={open}
			modalHeading="Create your character!"
			primaryButtonText="Create Character"
			secondaryButtonText="Cancel"
			onRequestClose={(event) => {
				setOpen(false)
			}}
			onRequestSubmit={(event) => {
				if (
					firstName !== "" &&
					lastName !== "" &&
					!fNameInvalid &&
					!lNameInvalid &&
					dob !== "" &&
					IsDateValid(dob) &&
					height !== 0 &&
					height >= 128 &&
					height <= 213 &&
					(sex == "m" || sex == "f")
				) {
					SendNui("create-character", {
						firstName,
						lastName,
						sex,
						dob,
						height,
					})
					setCharacters(null)
					setOpen(false)
				}
			}}
			size="lg"
		>
			<Form>
				<NameInput nameType="First" invalid={fNameInvalid} setInvalid={setFNameInvalid} setName={setFirstName}/>
				<br />
				<NameInput nameType="Last" invalid={lNameInvalid} setInvalid={setLNameInvalid} setName={setLastName}/>
				<br />
				<GenderInput setSex={setSex} />

				<DateInputForm dob={dob} dobInvalid={dobInvalid} setDob={setDob} setDobInvalid={setDobInvalid} IsDateValid={IsDateValid} />
				
				<br />
				<HeightInput setHeight={setHeight} />
			</Form>
		</Modal>
	)
}

export default CreateCharacter