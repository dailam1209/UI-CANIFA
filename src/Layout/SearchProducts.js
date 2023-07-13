import { useEffect, useState } from "react";
import DefaultLayout from "./Defaulayout/DefaultLayout";
import { useSelector } from "react-redux";
import { lastResult } from "../data/dataImage";
import Products from "../components/Product/ViewProduct/Products";
import { useLocation } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import NextPreProduct from "../components/Product/NextPreProduct";

function SearchProducts () {

    const [listImage, setListImage] = useState([]);
    const [ loading, setLoading] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
        let title = window.location.search?.slice(3,window.location.search.length);
        setLoading(true);
        const fetchApi = async () => {
            try {
                const res = await fetch (`https://vercel-nodejs.onrender.com/api/v2/product/search?q=${title}`);
                const data = await res.json();
                const product = await data.listTitle;
                const flow = await  lastResult('code', product);
                setListImage(flow);
                console.log(flow);
                setLoading(false);
            }
            catch(error){
                console.log(error);
            }
        }

        fetchApi();
       
    }, [location.search])

    

    return  (
        <>
            <div className="wrapper-search-product">
                <DefaultLayout/>
                <div className="products-search">
                    { loading === false ? (
                        listImage.map((product, index) => (
                        <Products img={product} key={index} />
                        ))
                    ) : (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                            <CircularProgress />
                        </div>
                    )
                }
                </div>
            </div>
        </>
    )
}

export default SearchProducts;