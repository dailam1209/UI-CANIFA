import React from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import NextPreProduct from "../Product/NextPreProduct";
import { CircularProgress } from '@mui/material';

import { useDispatch, useSelector } from "react-redux";
import { lastResult } from "../../data/dataImage";

function CountDownProduct ( listProduct ) {

    const newListProduct = useSelector((state) => state.product.product);
    const isLoading = useSelector((state) => state.product.isLoading);
    const newArrProduct = lastResult('code', newListProduct)

    const PerViewDetail = [2,2,3,4];
    return (
        <>
            <Grid 
                sx={{
                    display: 'flex',
                    alignIterm: 'center',
                    textAlign: 'center',
                    mx: 5,
                    mt: 5,
                    width: 'calc(100% - 80px)',
                    height: 'auto'
                }}
                 spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 'container'}}
            >
                {/* <TimeCountDown/> */}
            </Grid>
            { isLoading === false ? (
                 <div className="res">
                 <Grid sx={{
                         display: 'flex',
                         alignIterm: 'center',
                         textAlign: 'center',
                         mt: 5,
                         py: 4,
                         width: '100%',
                         maxHeight: '100%',
                     }}>
                     <NextPreProduct products={newArrProduct} PerView={PerViewDetail} progressbuy={true} />
                 </Grid>
             </div>

            ) : (
                <>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress />
                    </div>
                </>
            )

            }
           
        </>
    )
}

export default CountDownProduct;