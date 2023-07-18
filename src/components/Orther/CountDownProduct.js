import React, { useEffect, useState } from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import NextPreProduct from "../Product/NextPreProduct";
import { CircularProgress } from '@mui/material';

import { useDispatch, useSelector } from "react-redux";
import { lastResult } from "../../data/dataImage";

function CountDownProduct ( listProduct ) {

    const newListProduct = useSelector((state) => state.product.product);
    const isSuccess = useSelector((state) => state.product.isSuccess);
    const [list, setList] = useState([])
    const isLoading = useSelector((state) => state.product.isLoading);
    const newArrProduct = lastResult('code', newListProduct)

    const PerViewDetail = [2,2,3,4];
    useEffect(() =>{
        if(newArrProduct) {
            setList(newArrProduct)
        }
    },[])
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
            { isLoading === false && isSuccess && newListProduct ? (
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
                     <NextPreProduct products={list} PerView={PerViewDetail} progressbuy={true} />
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