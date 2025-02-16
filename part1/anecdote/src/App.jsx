import { useState } from 'react'
const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)

const handleVotes = (votes, selected) => {
  const copy = [...votes]
  copy[selected] += 1
  return copy
}

const MostVoted = (props) => {
  let max = 0
  max = props.votes.indexOf(Math.max.apply(null, props.votes))
  console.log(max)
  return (
    <div>
      {props.anecdotes[max]}
      <br />
      has {props.votes[max]} votes
    </div>
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <Button handleClick={() => setVotes(handleVotes(votes, selected))} text = "vote" />
      <Button handleClick={() => setSelected(Math.floor(Math.random()*anecdotes.length))} text = "next anecdote" />
    
      <h1>Anecdote with most votes</h1>
      <MostVoted anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App