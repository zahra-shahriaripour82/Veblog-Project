import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BookIcon from "@mui/icons-material/Book";
import { Container } from "@mui/material";
function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="700" flex={1}>
            پروژه وبلاگ
          </Typography>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
