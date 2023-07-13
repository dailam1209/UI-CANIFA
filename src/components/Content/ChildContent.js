import { NavLink } from "react-router-dom";
import Grid from "@mui/system/Unstable_Grid/Grid";
import React from "react";

function ChildContent(prors) {
  return (
    <div
      className="block-uu-dai"
      style={{
        paddingTop: "25px",
        paddingBottom: "25px",
      }}
    >
      <Grid container columnSpacing={1}>
        {prors.childContent
          .slice(0, prors.childContent.length - 1)
          .map((img, index) => (
            <Grid xs={6} columnSpacing={1} key={index}>
              <NavLink to={img.path}>
                <img
                  style={{
                    width: "100%",
                  }}
                  src={img.image}
                  alt=""
                ></img>
              </NavLink>
            </Grid>
          ))}
        {prors.childContent
          .slice(prors.childContent.length - 1, prors.childContent.length)
          .map((img, index) => (
            <Grid xs={12} columnSpacing={1} key={index}>
              <NavLink to={img.path}>
                <img
                  style={{
                    width: "100%",
                  }}
                  src={img.image}
                  alt=""
                ></img>
              </NavLink>
            </Grid>
          ))}
      </Grid>
      {}
    </div>
  );
}

export default ChildContent;
