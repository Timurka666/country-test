import {useNavigate } from "react-router-dom"
import Button from "../../shared/button"

export default function GoBackToRoot() {
    const navigate = useNavigate()

    return (
        <Button onClick={() => {navigate('/')}}>Go back</Button>
    )
}