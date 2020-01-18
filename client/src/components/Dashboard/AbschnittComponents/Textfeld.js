import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

export default function Textfeld({
  text,
  styleLeft_Right,
  borderpx,
  borderColor
}) {
  return (
    <Grid
      item
      style={{
        width: "50%"
      }}
    >
      <Box border={borderpx} borderColor={borderColor} style={styleLeft_Right}>
        <Typography
          style={{
            backgroundColor: "rgba(238, 238, 238, 1)",
            padding: 8,
            paddingLeft: 12
          }}
        >
          {text}
        </Typography>
      </Box>
    </Grid>
  );
}
