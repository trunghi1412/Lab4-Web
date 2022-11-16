
import React, { useState} from "react";
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import AndroidIcon from "@mui/icons-material/Android"

const buttonStyle = { margin: 10};

function toggleColor(setter, value) {
  setter(value === "default" ? "primary" : "default");
}

 export default function App() {

  const [contained, setContained] = useState("default");
  const [text, setText] = useState("default");
  const [outlined, setOutline] = useState("default");
  const [ icon, setIcon] = useState("default");

  return (
    <Grid container>
      <Grid
      item
      component={Button}
      variant="contained"
      style={buttonStyle}
      color={contained}
      onClick= {() => toggleColor(setContained, contained)}
      >
        Contained
      </Grid>
      <Grid
      item
      component={Button}
      style={buttonStyle}
      color={text}
      onClick= {() => toggleColor(setContained, text)}
      >
        Text
      </Grid>
      <Grid
      item
      component={Button}
      variant="outlined"
      style={buttonStyle}
      color={outlined}
      onClick= {() => toggleColor(setContained, outlined)}
      >
        Outlined
      </Grid>
      <Grid
      item
      component={IconButton}
      variant="outlined"
      style={buttonStyle}
      color={icon}
      onClick= {() => toggleColor(setContained, icon)}
      >
        <AndroidIcon />
      </Grid>
    </Grid>
  );
}
