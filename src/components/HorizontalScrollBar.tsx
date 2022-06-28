import React from 'react'
import { Box } from '@mui/material'
import BodyPartCard from './BodyPartCard'

type Props = {
    data: Array<string>;
    bodyPart: string;
    setBodyPart: React.Dispatch<React.SetStateAction<string>>
}

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }: Props) => {
    return (
        <div>
            {
                data.map((item) =>
                    <Box
                        key={item}
                        
                    >
                        <BodyPartCard bodyPart={bodyPart} setBodyPart={setBodyPart} />
                    </Box>
                )
            }
        </div>
    )
}

export default HorizontalScrollBar