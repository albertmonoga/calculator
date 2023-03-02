import { styled } from "@mui/system";

const NumPad = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateRows: "repeat(5, 1fr)",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 2,
  }));
  export default NumPad;