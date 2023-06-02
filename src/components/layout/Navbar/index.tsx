import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import Logo from "../../../assets/images/Logo.png"
import "./styles.css"

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{ gap: { sm: '122px', xs: "40px" }, mt: { sm: "32px", xs: "20px" } }}
      px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="logo" className="navbar-logo" />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" className="navbar-link navbar-border-bottom">Home</Link>
        <a href="#exercise" className="navbar-link">Exercises</a>
      </Stack>
    </Stack >
  )
}

export default Navbar