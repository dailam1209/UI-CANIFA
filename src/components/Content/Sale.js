import { NavLink } from "react-router-dom";
import Grid from "@mui/system/Unstable_Grid/Grid";
import React from "react";

function Sale ( prors ) {
    return (
        <div className="block-uu-dai" style={{
                paddingTop: '25px',
                paddingBottom: '25px'
            }}>
            <Grid container columnSpacing={1}>
                {prors.sale.map((img, index) => (
                <Grid xs={6} columnSpacing={1} key={index} >
                    <NavLink to={img.path}>
                        <img style={{
                            width: '100%'
                        }} src={img.image} alt =''></img>
                    </NavLink>
                </Grid>
                )) }
                
            </Grid>
        </div>
    )
}

export default Sale;