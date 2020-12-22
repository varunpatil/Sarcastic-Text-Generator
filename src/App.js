import React, { useState, useEffect } from "react";
import Alert from "@material-ui/lab/Alert";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import Options from "./Options";
import GithubLink from "./GithubLink";
import transformText from "./transformText";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [options, setOptions] = useState({
    radio1: "normal",
    radio2: "alternating",
    startLower: false,
    startUpper: false,
    disableCheckBoxes: false,
    showBackground: true,
  });

  useEffect(() => {
    setOutput(transformText(input, options));
  }, [input, options]);

  if (options.showBackground) {
    document.getElementById("root").className = "bg-image";
  } else {
    document.getElementById("root").className = "";
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };

  let alert = null;
  if (showAlert) {
    alert = (
      <Alert
        onClose={() => {
          setShowAlert(false);
        }}
      >
        Copied to clipboard
      </Alert>
    );
  }

  return (
    <Box padding={5}>
      <Typography variant="h3" align="center">
        Sarcastic Text Generator
      </Typography>

      <Box m={2} />

      <TextField
        label="Enter Text Here"
        multiline
        fullWidth
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />

      <Box m={6} />

      <TextField
        placeholder="Output will come here"
        readOnly
        multiline
        fullWidth
        value={output}
      />

      <Box m={2} />

      <Button onClick={copyToClipboard} color="primary" variant="contained">
        Copy
      </Button>

      {alert}

      <Options options={options} setOptions={setOptions} />

      <GithubLink />
    </Box>
  );
}
