import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'
import { PaperPlaneRight } from "phosphor-react"


export function Status() {
    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState([
      'Boa!',
      'Continue!',
      'Parabéns pelo progresso.'
    ])
  
    function createNewAnswer(event: FormEvent) {
      event.preventDefault()
      
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }

  return (
    <main className="status">
          <Header title="Tweet"/>

          <Tweet content="Cara, estou estudando muito, sinto que estou melhorando!"/>

          <Separator />

          <form onSubmit={createNewAnswer} className="answer-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/jeeonglee1.png" alt="Jeong Lee" />
              <textarea 
                placeholder="Tweet your answer"
                value={newAnswer}
                onChange={(event => {
                  setNewAnswer(event.target.value)
                })} 
              />
            </label>

            <button type="submit">
              <PaperPlaneRight />
              <span>Answer</span> 
            </button>
          </form>

          {answers.map(answer => {
            return <Tweet key={answer} content={answer} />
          })}
        
        </main>
  )
}