import { Modal } from "carbon-components-react"
import { useEffect, useState } from "react"
import { SendNui } from "../hooks/SendNui"

const DeleteModal = ({ uniqueId, open, setOpen }) => {
	const [timer, setTimer] = useState(null)
	const [allowClick, setAllowClick] = useState(false)

	useEffect(() => {
		setTimer(setTimeout(() => {
			setAllowClick(true)
		}, 6000))
		return () => {
			if(timer) {
				clearTimeout(timer)
			}
		} 
	}, [])

	return (
		<Modal
			className="delete-modal"
			open={open}
			danger
			alert={true}
			modalHeading="Are you sure?"
			primaryButtonDisabled={!allowClick}
			primaryButtonText="I understand this is irreversible"
			secondaryButtonText="Cancel"
			onRequestClose={() => {
				setOpen(false)
			}}
			onRequestSubmit={() => {
				SendNui("delete-character", uniqueId)
				setOpen(false)
			}}
			size="xs"
		>
			<p style={{ textAlign: "center" }}>
				Deleting your character is irreversible, even if it is done
				accidentally. If you delete your character you will lose any
				Vehicle, Apartment, Inventory Items, Money, Boats, etc.
			</p>
		</Modal>
	)
}

export default DeleteModal
