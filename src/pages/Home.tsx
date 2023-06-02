import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  const [exercises, setExercises] = useState<any>([])
  const [bodyPart, setBodyPart] = useState<string>('all')

  return (
    <Box>
      <HeroBanner />
      <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises} />
      <Exercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises} />
    </Box>
  )
}

export default Home