import { useState } from 'react'

import QUESTIONS from '../questions'

const Quiz = () => {

    const [userAnswers, setUserAnswers] = useState([])

    const question = userAnswers.length
    const currentQuestion = QUESTIONS[question]

    const clickHandler = answer => {
        setUserAnswers(prevState => {
            return [...prevState, answer]
        }

        )
    }

    console.log(question)

    return (
        <div id='quiz'>
            <div id='question'>

                <h2>{currentQuestion.text}</h2>
                <ul id='answers'>
                    {currentQuestion.answers.map(item =>
                        <li className='answer' key={item}>
                            <button onClick={question < 6 ? () => clickHandler(item) : null}>{item}</button>
                        </li>
                    )}
                </ul>

            </div>
        </div>
    )
}

export default Quiz