import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { fetchData, exerciseOptions, Iexercises, fetchVideo, videoOptions } from '../utils/fetchData'
import Details from '../components/Details'
import ExerciseVideo from '../components/ExerciseVideo'
import SimilarExercise from '../components/SimilarExercise'
type Props = {}

const ExerciseDetails = (props: Props) => {
    const [detail, setDetail] = useState<Iexercises | null>(null)
    const [video, setVideo] = useState([])
    const [targetData, setTargetData] = useState<Array<Iexercises> | null>(null)
    const [equipmentData, setEquipmentData] = useState<Array<Iexercises>| null>(null)
    const { id } = useParams()

    useEffect(() => {
        const fetchDetail = async () => {
            const detailData:Iexercises = await fetchData<Iexercises>(`/exercise/${id}`, exerciseOptions)
            setDetail(detailData)

            const { contents: videoData} = await fetchVideo(`?query=${detailData.name}`, videoOptions)
            setVideo(videoData)

            const targetData = await fetchData<Array<Iexercises>>(`/target/${detailData.target}`, exerciseOptions)
            setTargetData(targetData)
            const equipmentData = await fetchData<Array<Iexercises>>(`/equipment/${detailData.equipment}`, exerciseOptions)
            setEquipmentData(equipmentData)



        }
        fetchDetail()
    }, [id])

    return (
        <Box>
            <Details detail={detail}/>
            <ExerciseVideo video={video} name={detail?.name}/>
            <SimilarExercise targetData={targetData} equipmentData={equipmentData} />
        </Box>
    )
}

export default ExerciseDetails