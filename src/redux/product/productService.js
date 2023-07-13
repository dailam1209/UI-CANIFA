
// get allProduct 
const getAllProduct = async () => {
    try {
        const listProduct = await  fetch(`https://vercel-nodejs.onrender.com/api/v2/product/allProduct`);
        const products =  listProduct.json();
        return products;
    } catch (err) {
        console.log(err);
    }
};

// get sameProduct With Code
const getSameProducts = async (code) => {
    try {
        const listProduct = await  fetch(`https://vercel-nodejs.onrender.com/api/v2/product/getSingleSameProduct/${code}`);
        const products =  listProduct.json();
        return products;
    } catch (err) {
        console.log(err);
    }
};

const getAProduct = async (id) => {
    try {
        const product = await  fetch(`https://vercel-nodejs.onrender.com/api/v2/product/singleProduct/${id}`);
        const jsonProduct =  product.json();
        return jsonProduct;
    } catch (err) {
        console.log(err);
    }
};

const resetProduct = async (id) => {
    try {
        const jsonProduct =  [];
        return jsonProduct;
    } catch (err) {
        console.log(err);
    }
};

const getFilterProductsText = async (text) => {
    try {
        const product = await  fetch(`https://vercel-nodejs.onrender.com/api/v2/product/search?q=${text}`);
        const jsonProduct =  product.json();
        return jsonProduct;
    } catch (err) {
        console.log(err);
    }
};

const getFilterAllProduct = async (color,size, price) => {
    
    try {
        const product = await  fetch(`https://vercel-nodejs.onrender.com/api/v2/product/getAllProduct?mastercolor=${color}&size=${size}&price=${price}`);
        const jsonProduct =  product.json();
        return jsonProduct;
    } catch (err) {
        console.log(err);
    }
};

const addProducts = async (products) => {
    try {
        return products;
    } catch (err) {
        console.log(err);
    }
};



const productService = {
    getSameProducts,
    getAProduct,
    getAllProduct,
    resetProduct,
    getFilterProductsText,
    getFilterAllProduct,
    addProducts
};
  
  export default productService;