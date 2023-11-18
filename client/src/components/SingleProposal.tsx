import { useState } from 'react'
import { addStudyElement } from '../api'
import { useQueryClient } from '@tanstack/react-query'

interface Props {
  proposal: string
}

interface UserDetails {
  nickname: string
  ID: string
  studying: string
}

function SingleProposal(props: Props) {
  const queryClient = useQueryClient()
  const [active, setActive] = useState(false)
  const { proposal } = props

  // add to the firestore DB
  function handleClick() {
    setActive(!active)
    const data = queryClient.getQueryData(['user_id']) as UserDetails
    addStudyElement({ data: proposal, id: data?.ID })
  }

  return (
    <div
      key={proposal}
      className={`${active ? 'study-topic_active' : ''} study-topic`}
    >
      <p>{proposal}</p>
      <button onClick={handleClick}>add</button>
    </div>
  )
}

export default SingleProposal
