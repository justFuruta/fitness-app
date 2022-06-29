import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

type Props = {
    video: Array<any>;
    name: string | undefined;
}

const ExerciseVideo = ({ video, name }: Props) => {
    if (!video.length) return <>"loading..."</>

    return (
        <Box
            sx={{
                marginTop: {
                    lg: "200px",
                    xs: "20px"
                }
            }}
            p="20px"
        >
            <Typography
                variant="h3"
                mb="33px"
            >
                Watch <span style={{ color: "#ff2625", textTransform: "capitalize" }}>{name}</span> exercise video
            </Typography>
            <Stack
                flexWrap="wrap"
                justifyContent="flex-start"
                alignItems="center"
                sx={{
                    flexDirection: {
                        lg: "row"
                    },
                    gap: {
                        lg: "110px",
                        xs: "0"
                    }
                }}
            >
                {
                    video?.slice(0, 3).map((item) => (
                        <a
                            key={item.video.videoId}
                            className="exercise-video"
                            href={`https://www.youtube.come/watch?v=${item.video.videoId}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                            <Typography
                                variant="h5"
                                color="#000"
                            >
                                {item.video.title}
                            </Typography>
                            <Typography
                                variant="h6"
                                color="#000"
                            >
                                {item.video.channelName}
                            </Typography>
                        </a>
                    ))
                }
            </Stack>
        </Box>
    )
}

export default ExerciseVideo