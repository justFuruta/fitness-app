import React, { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import { Iexercises } from '../utils/fetchData'
type Props = {}

const Home = (props: Props) => {
    const [bodyPart, setBodyPart] = useState<string>('all')
    const [exercises, setExercises] = useState<Array<Iexercises>>([])
    return (
        <Box>
            <HeroBanner />
            <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart}  setExercises={setExercises} />
            <Exercises exercises={exercises}/>
        </Box>

    )
}

export default Home