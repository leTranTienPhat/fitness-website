import { Box } from "@mui/material"
import BodyParts from "../BodyParts"

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <Box
            key={item}
            title={item}
            m="0 40px">
            <BodyParts item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          </Box>
        )
      })
      }
    </div>
  )
}

export default HorizontalScrollBar