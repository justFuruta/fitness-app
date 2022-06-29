import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import { Iexercises } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

type Props = {
    equipmentData: Array<Iexercises> | null;
    targetData: Array<Iexercises> | null
}

const SimilarExercise = ({ equipmentData, targetData }: Props) => {
    if (targetData === null || equipmentData === null) return <>loading...</>
    return (
        <Box
            sx={{
                mt: {
                    lg: "100px",
                    xs: "0"
                }
            }}
        >
            <Typography
                variant="h3"
                mb="33px"
                p="20px"
            >
                Similar <span style={{ color: "#ff2625" }}>Target Muscle</span> exercises
            </Typography>
            <Stack
                direction="row"
                sx={{
                    p: "2",
                    position: "relative"
                }}
            >
                {
                    <HorizontalScrollBar data={targetData} />
                }
            </Stack>
            <Typography
                variant="h3"
                mb="33px"
                p="20px"
            >
                Similar <span style={{ color: "#ff2625" }}>Equipment</span> exercises
            </Typography>
            <Stack
                direction="row"
                sx={{
                    p: "2",
                    position: "relative"
                }}
            >
                {
                    <HorizontalScrollBar data={equipmentData} />
                }
            </Stack>
        </Box>
        
    )
}

export default SimilarExercise