import { Paper, Typography } from "@mui/material";

function Screen({ value }) {
 
  return (
    <>
      <Paper sx={{ mb: 1, pr: 1, height: 30, textAlign: "right", width: 255 }}>
        <Typography variant="h5">{value}</Typography>
      </Paper>
    </>
  );
}
export default Screen;
