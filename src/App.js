import {
  createTheme,
  Paper,
  Switch,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useCallback, useState } from "react";
import PanelButton from "./component/panelButton";
import Screen from "./component/screen";
import operator from "./hooks/operator";
import ContentCalculator from "./styled/contentCalculator";

function App() {
  const [total, setTotal] = useState(" ");
  const [isDark, setIsDark] = useState(false);

  const handleClick = useCallback((button) => {
    if (button.value === "C") {
      setTotal("");
      return;
    }

    if (button.type === "number") {
      setTotal((value) => {
        const lastCharIsNaN = isNaN(value.charAt(-1));
        if (button.value === "." && lastCharIsNaN) return value + "0.";
        return value + button.value;
      });
      return;
    }
    if (button.type !== "op") return;
    if (button.value === "=") {
      setTotal(operator);
      return;
    }
    setTotal((value) => {
      const isEmpty = value.length === 0;
      if (isEmpty) return `0 ${button.value} `;
      const endsWithOp = value.endsWith(" ");
      if (endsWithOp) {
        const n = value.split(" ").at(0);
        return `${n} ${button.value} `;
      }
      return `${value} ${button.value} `;
    });
  }, []);

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      background: {
        default: "#424242",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper>
          <ContentCalculator>
            <Typography variant="h6">Calculate</Typography>
            <Switch checked={isDark} onChange={(e) => setIsDark(!isDark)} />
            <Screen value={total} />
            <PanelButton onClick={handleClick} />
          </ContentCalculator>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
