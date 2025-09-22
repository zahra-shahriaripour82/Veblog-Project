import { Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Typography
      component="a"
      variant="body1"
      bgcolor="#f7f7f7"
      color="primary"
      padding="10px"
      textAlign="center"
      mt={10}
      display="block"
      href="https://github.com/zahra-shahriaripour82/Veblog-Project"
      sx={{ textDecoration: "none" }}
    >
      Develope by Zahra Shahriaripour | GitHub
    </Typography>
  );
}

export default Footer;
