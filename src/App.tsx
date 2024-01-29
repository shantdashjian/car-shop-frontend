import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";

function App() {
  return (
    <Container maxWidth="x1">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Car Shop</Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default App;
