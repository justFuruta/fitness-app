import React from 'react'
import { Iexercises } from '../utils/fetchData'
import { Stack, Button, Typography } from '@mui/material'
import BodyPartImage from '../icons/body-part.png'
import TargetImage from '../icons/target.png'
import EquipmentImage from '../icons/equipment.png'


type Props = {
    detail: Iexercises | null;
}

const Details = ({ detail }: Props) => {
    if (detail) {
        const { bodyPart, equipment, gifUrl, name, target } = detail
        const extraDetail = [
            {
                icon: BodyPartImage,
                name: bodyPart
            },
            {
                icon: TargetImage,
                name: target
            },
            {
                icon: EquipmentImage,
                name: equipment
            }
        ]
        return (
            <Stack
                gap="60px"
                sx={{
                    flexDirection: {
                        lg: "row",
                    },
                    p: "20px",
                    alignItems: "center"
                }}
            >
                <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
                <Stack
                    sx={{
                        gap: {
                            lg: "35px",
                            xs: "20px"
                        }
                    }}
                >
                    <Typography
                        variant="h3"
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant="h6"
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus vestibulum lorem sed risus ultricies tristique.
                    </Typography>
                    {
                        extraDetail.map((item) => (
                            <Stack
                                key={item.name} 
                                direction="row"
                                gap="24px"
                                alignItems="center"
                            >
                                <Button
                                    sx={{
                                        background: "#fff2db",
                                        borderRadius: "50%",
                                        width: "100px",
                                        height: "100px"
                                    }}
                                >
                                    <img src={item.icon} alt="icon" width="50px" height="50px"/>
                                </Button>
                                <Typography
                                    variant="h5"
                                    textTransform="capitalize"
                                >
                                    {item.name}
                                </Typography>
                            </Stack>
                        ))
                    }
                </Stack>
            </Stack>
        )
    } else {
        return (
            <></>
        )
    }
}

export default Details