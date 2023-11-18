import { useState } from 'react'

interface Props {
  proposal: string
}

function SingleProposal(props: Props) {
  const [active, setActove] = useState(false)
  const { proposal } = props

  return (
    <div key={proposal} className={`${active ? 'study-topic_active' : ''} study-topic`}>
      <p>{proposal}</p>
      <button onClick={() => setActove(!active)}>add</button>
    </div>
  )
}

export default SingleProposal
