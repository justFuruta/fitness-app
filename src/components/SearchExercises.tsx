import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { fetchData, exerciseOptions, Iexercises } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

type Props = {
    bodyPart: string;
    setBodyPart: React.Dispatch<React.SetStateAction<string>>;
    setExercises: React.Dispatch<React.SetStateAction<Array<Iexercises>>>
}

const SearchExercises = ({ bodyPart, setBodyPart, setExercises }: Props) => {
    
    const [search, setSearch] = useState<string>('')
    const [bodyParts, setBodyParts] = useState<Array<string>>([])

    useEffect(() => {
        const fetchExercisesDate = async () => {
            const bodyPartData:Array<string> = await fetchData('bodyPartList', exerciseOptions)
            setBodyParts(['all', ...bodyPartData])
        }

        fetchExercisesDate()
    }, [])

    const searchTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value.toLowerCase())
    }

    const searchHandle = async () => {
        if (search) {
            const data:Array<Iexercises> = await fetchData('', exerciseOptions)
            const searchedExercises = data.filter((item): boolean => {
                return item.name.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
            })
            setExercises(searchedExercises)
            setSearch('')
        }
    }

    return (
        <Stack
            alignItems={'center'}
            mt={'37px'}
            justifyContent={'center'}
            p={'20px'}
        >
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: {
                        lg: '44px',
                        xs: '30px'
                    }
                }}
                mb={'50px'}
                textAlign={'center'}
            >
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box
                position={'relative'}
                mb={'72px'}
            >
                <TextField

                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px'
                        },
                        width: {
                            lg: '800px',
                            xs: '350px'
                        },
                        backgroundColor: '#fff',
                        borderRadius: '40px'
                    }}

                    value={search}
                    onChange={searchTextHandler}
                    placeholder={'Search Exercises'}
                    type={'text'}

                />
                <Button
                    className='search-btn'
                    sx={{
                        bgcolor: '#ff2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: {
                            lg: '175px',
                            xs: '80px'
                        },
                        fontSize: {
                            lg: '20px',
                            xs: '14px'
                        },
                        height: '56px',
                        position: 'absolute',
                        right: '0'
                    }}
                    onClick={searchHandle}
                >
                    Search
                </Button>
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    p: '20px'
                }}
            >
                <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </Box>
        </Stack>
    )
}

export default SearchExercises