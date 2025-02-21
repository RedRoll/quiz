import img from '../assets/quiz-logo.png'

const Header = () => {
    return (
        <header>
            <img src={img} alt="logo" />
            <h1>REACTQUIZ</h1>
        </header>
    )
}

export default Header