import logic from '../../logic/index.mjs'

import Heading from '../components/Heading'
import Form from '../components/Form'
import Label from '../components/Label'
import Input from '../components/Input'
import Container from '../components/Container'
import Link from '../components/Link'
import Button from '../components/Button'

function Login() {
    const handleRegisterClick = event => {
        event.preventDefault()

        location.href = '../register'
    }

    const handleLoginSubmit = event => {
        event.preventDefault()

        const form = event.target

        const usernameInput = form['username-input']
        const passwordInput = form['password-input']

        const username = usernameInput.value
        const password = passwordInput.value

        try {
            logic.loginUser(username, password)

            location.href = '../home'
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    return <main className="view">
        <Heading level="1">Login</Heading>

        <Form onSubmit={handleLoginSubmit} className="Form--column">
            <Container className="Container--column Container--column-left">
                <Label htmlFor="username-input">Username</Label>
                <Input type="text" id="username-input" name="username" placeholder="username" />
            </Container>

            <Container className="Container--column Container--column-left">
                <Label htmlFor="password-input">Password</Label>
                <Input type="password" id="password-input" name="password" placeholder="password" />
            </Container>

            <Button type="submit">Login</Button>
        </Form>

        <Link onClick={handleRegisterClick}>Register</Link>
    </main>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Login />)