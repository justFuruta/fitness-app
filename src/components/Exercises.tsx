import React from 'react'
import { Iexercises } from '../utils/fetchData';

type Props = {
    exercises: Array<Iexercises>;
}

const Exercises = ({ exercises }: Props) => {
  return (
    <div>Exercises</div>
  )
}

export default Exercises