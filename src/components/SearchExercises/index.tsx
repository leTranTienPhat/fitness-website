import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { ChangeEvent, useState, useEffect } from "react"
import { fetchData } from "../../utils/fetchData"
import HorizontalScrollBar from "../HorizontalScrollBar"

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState<string>("")
  const [bodyPartsList, setBodyPartsList] = useState<string[]>([])

  useEffect(() => {
    const fetchBodyPartsData = async () => {
      const bodyPartsList = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList')

      setBodyPartsList(['all', ...bodyPartsList])
    }

    fetchBodyPartsData()
  }, [])


  const handleSearchInputChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase())
  }

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises')
      const searchedResult = exerciseData.filter((exercise: any) => {
        exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
      })

      setSearch('')
      setExercises(searchedResult)
    }
  }

  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '30px' } }} fontWeight="700" mb="50px" textAlign="center">
        Awesome Exercises You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: "none", borderRadius: "4px" },
            width: { lg: '800px', xs: '350px' },
            borderRadius: '40px'
          }}
          value={search}
          onChange={(e) => handleSearchInputChange(e)}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >Search</Button>
        <HorizontalScrollBar data={bodyPartsList} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises