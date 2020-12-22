import React, { useState } from "react";
import {
  Checkbox,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";

export default function Options(props) {
  const [state, setState] = useState(props.options);

  const changeState = (newState) => {
    props.setOptions(newState);
    setState(newState);
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <RadioGroup
        row
        value={state.radio1}
        onChange={(event) => {
          let stateCopy = { ...state };
          stateCopy.radio1 = event.target.value;
          changeState(stateCopy);
        }}
      >
        <FormControlLabel value="normal" control={<Radio />} label="Normal" />
        <FormControlLabel value="cursed" control={<Radio />} label="Cursed" />
      </RadioGroup>

      <RadioGroup
        row
        value={state.radio2}
        onChange={(event) => {
          let stateCopy = { ...state };
          stateCopy.radio2 = event.target.value;
          if (event.target.value === "alternating") {
            stateCopy.disableCheckBoxes = false;
          } else {
            stateCopy.startLower = false;
            stateCopy.startUpper = false;
            stateCopy.disableCheckBoxes = true;
          }
          changeState(stateCopy);
        }}
      >
        <FormControlLabel
          value="alternating"
          control={<Radio />}
          label="Alternating"
        />
        <FormControlLabel value="random" control={<Radio />} label="Random" />
      </RadioGroup>

      <FormControlLabel
        control={
          <Checkbox
            checked={state.startLower}
            disabled={state.disableCheckBoxes}
            onChange={() => {
              let stateCopy = { ...state };
              stateCopy.startLower = !stateCopy.startLower;
              stateCopy.startUpper = false;
              changeState(stateCopy);
            }}
          />
        }
        label="Words starts with Lowercase"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.startUpper}
            disabled={state.disableCheckBoxes}
            onChange={() => {
              let stateCopy = { ...state };
              stateCopy.startUpper = !stateCopy.startUpper;
              stateCopy.startLower = false;
              changeState(stateCopy);
            }}
          />
        }
        label="Words starts with Uppercase"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.showBackground}
            onChange={() => {
              let stateCopy = { ...state };
              stateCopy.showBackground = !stateCopy.showBackground;
              changeState(stateCopy);
            }}
          />
        }
        label="SpongeBob Background"
      />
    </Grid>
  );
}
