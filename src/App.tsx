import { Box, Button, Grid2 } from "@mui/material";

export default function App() {
  return (
    <Box border={1} width={400} padding={4}>
      <Grid2 container spacing={2}>
        <Grid2 container spacing={2}>
          <Button variant="contained">Hello</Button>
          <Button variant="outlined">Hello</Button>
          <Button variant="outlined">Hello</Button>
          <Button variant="contained">Hello</Button>
          <Button variant="contained">Hello</Button>
          <Button variant="contained">Hello</Button>
        </Grid2>
        <Button variant="outlined">Hello</Button>
        <Button variant="contained">Hello</Button>
        <Button variant="contained">Hello</Button>
      </Grid2>
    </Box>
  );
}
