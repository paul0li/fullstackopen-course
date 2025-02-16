import { useState } from 'react'
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const Statistics = (props) => (

  <div>
    <h1>statistics</h1>
    good {props.good}
    <br></br>
    neutral {props.neutral}
    <br></br>
    bad {props.bad}
    <br></br>
    all {props.good + props.neutral + props.bad}
    <br></br>
    average {(props.good - props.bad)/(props.good + props.neutral + props.bad)}
    <br></br>
    positive {(props.good/(props.good + props.neutral + props.bad))*100} %
  </div>

)
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}


export default App