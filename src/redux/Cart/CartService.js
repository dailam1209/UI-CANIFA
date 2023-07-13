
// add cart
const addCartIterm = async (inforCart, token) => {
    try {
        const cart = await  fetch("https://vercel-nodejs.onrender.com/api/v2/cart/add-cart",
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
           
            body: JSON.stringify(inforCart)
        });
        const jsonCart  = await cart.json();
        return jsonCart
    } catch (err) {
        console.log(err);
    }
};

const updateCartIterm = async (inforCart, token) => {
    try {
        const cart = await  fetch(`https://vercel-nodejs.onrender.com/api/v2/cart/update-cart`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
           
            body: JSON.stringify(inforCart)
        });
        const jsonCart  = await cart.json();
        return jsonCart
    } catch (err) {
        console.log(err);
    }
};

// remove Cart Iterm
const removeCartIterm = async (infor, token) => {
    try {
        const cart = await  fetch("https://vercel-nodejs.onrender.com/api/v2/cart/remove-cart",
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(infor)
        });
        
        const json = await cart.json();
        return json;
    } catch (err) {
        console.log(err);
    }
};


const getAllCartOfUser = async (inforUserId, token) => {
    try {
  
      const response = await fetch(`https://vercel-nodejs.onrender.com/api/v2/cart/${inforUserId}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
  } catch (err) {
    console.log(err)
  }
};


// get all cart by admin
const getAllCartAll = async (userId , token) => {
    try {
        const cartItermAll = await  fetch(`https://vercel-nodejs.onrender.com/api/v2/cart/${userId}`,
        {
            method: 'POST',
            headers: {Authentication: `Bearer ${token}`},
            body: JSON.stringify()
        }
        );
        const jsonProduct =  cartItermAll.json();
        return jsonProduct;
    } catch (err) {
        console.log(err);
    }
};

const cartService = {
    addCartIterm,
    removeCartIterm,
    getAllCartOfUser,
    getAllCartAll,
    updateCartIterm
};
  
  export default cartService;