import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AppContext } from "../App"
import Earth from '../assets/Earth.jpg'
import '../App.css'

function ContactInformation() {
    const [person, setPerson] = useState(null)
    const { id } = useParams()

    const { contacts } = useContext(AppContext)

    // Get the person from the link
    useEffect(() => {
        const contact = contacts.find(contact => contact.id === parseInt(id))

        if(contact) {
            setPerson(contact)
        }
    }, [id, contacts])

    if (!person) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div>
            <h1>{person.firstName} {person.lastName}</h1>
            <p>Street: {person.street}</p>
            <p>City: {person.city}</p>
        </div>
        </>
    )
}

export default ContactInformation