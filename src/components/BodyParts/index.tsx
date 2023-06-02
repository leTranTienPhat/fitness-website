import { Stack, Typography } from "@mui/material"

import Icon from "../../assets/icons/gym.png"
import "./styles.css"

const BodyParts = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card">
      <img src={Icon} alt="dumbbell" className="scrollbar-icon" />
    </Stack>
  )
}

export default BodyParts