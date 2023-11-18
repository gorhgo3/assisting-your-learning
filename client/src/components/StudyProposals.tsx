import { useEffect, useState } from 'react'
import SingleProposal from './SingleProposal'

interface Props {
  study: string[]
}

function StudyProposals(props: Props) {
  return (
    <>
      <h4>
        Select which of these topics you would like to add to your study plan
      </h4>
      {props.study.map((proposal: string) => (
        <SingleProposal proposal={proposal} />
      ))}
    </>
  )
}

export default StudyProposals

// {/* <h4>Want to work with this response?</h4>
// <button onClick={addToStudyHistory}>
// Store this as a completed topic
// </button>
// <button onClick={() => questionResponse}>
// Question this response
// </button> */}
