import React from 'react'

type Props = {
    bodyPart: string;
    setBodyPart: React.Dispatch<React.SetStateAction<string>>
}

const BodyPartCard = ({ bodyPart, setBodyPart }: Props) => {
  return (
    <div>bodyPartCard</div>
  )
}

export default BodyPartCard