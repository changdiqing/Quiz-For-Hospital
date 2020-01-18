import React from "react";
import Grid from "@material-ui/core/Grid";
import ColumnLeft from "./ColumnLeft";
import ColumnRight from "./ColumnRight";

export default function App({ answers }) {
  return (
    <div>
      <Grid
        container
        direction="row"
        spacing={2}
        style={{ backgroundColor: "#F5F5F5", marginTop: 20 }}
      >
        <Grid
          item
          xs={6}
          style={{
            paddingTop: 20,
            paddingLeft: 50,
            paddingRight: 15
          }}
        >
          <ColumnLeft answers={answers} />
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            paddingTop: 20,
            paddingRight: 50,
            paddingLeft: 15,
            width: "50vw"
          }}
        >
          <ColumnRight answers={answers} />
        </Grid>
      </Grid>
    </div>
  );
}
