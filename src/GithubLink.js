import React from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    color: "black",
    padding: 0,
  },
}));

export default function GithubLink() {
  const classes = useStyles();

  return (
    <IconButton
      aria-label="github"
      onClick={() =>
        window.open(
          "https://github.com/varunpatil/Sarcastic-Text-Generator",
          "_blank"
        )
      }
      className={classes.iconButton}
    >
      <GitHub fontSize="large" />
    </IconButton>
  );
}
