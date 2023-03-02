import { Button, Typography } from "@mui/material";
import { useCallback, useEffect } from "react";
import NumPad from "../styled/numpad";

const buttonCollection = {
  Backspace: { value: "C", type: "C", order: 0 },
  "/": { value: "/", type: "op", order: 1, key: "/" },
  "*": { value: "*", type: "op", order: 2 },
  "-": { value: "-", type: "op", order: 3 },
  7: { value: "7", type: "number", order: 4 },
  8: { value: "8", type: "number", order: 5 },
  9: { value: "9", type: "number", order: 6 },
  "+": { value: "+", type: "op", order: 7, span: { row: 2 } },
  4: { value: "4", type: "number", order: 8 },
  5: { value: "5", type: "number", order: 9 },
  6: { value: "6", type: "number", order: 10 },
  1: { value: "1", type: "number", order: 11 },
  2: { value: "2", type: "number", order: 12 },
  3: { value: "3", type: "number", order: 13 },
  Enter: { value: "=", type: "op", order: 14, span: { row: 2 } },
  0: { value: "0", type: "number", order: 15, span: { col: 2 } },
  ".": { value: ".", type: "number", order: 16 },
};
const buttons = Object.values(buttonCollection).sort(
  (a, b) => a.order - b.order
);

function PanelButton({ onClick }) {
  const handlerCreator = useCallback(
    (button) => () => onClick(button),
    [onClick]
  );
  useEffect(() => {
    function keyListener(event) {
      const button = buttonCollection[event.key];
      if (button) {
         const handler = handlerCreator(button);
         handler();
      }
    }
    document.addEventListener("keydown", keyListener);
    return () => {
      document.removeEventListener("keydown", keyListener);
    };
  }, [handlerCreator]);

  return (
    <>
      <NumPad>
        {buttons.map((button) => (
          <Button
            key={button.value}
            sx={{
              gridColumn: "span " + button.span?.col ?? 1,
              gridRow: "span " + button.span?.row ?? 1,
            }}
            variant={button.type === "op" ? "contained" : "outlined"}
            onClick={handlerCreator(button)}
          >
            <Typography variant="h5" fontWeight={900}>
              {button.value}
            </Typography>
          </Button>
        ))}
      </NumPad>
    </>
  );
}
export default PanelButton;
