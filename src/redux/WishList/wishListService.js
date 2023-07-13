
// add cart
const changeWishListIterm = async (inforWishList, token) => {
    try {
        const cart = await  fetch(`https://vercel-nodejs.onrender.com/api/v2/wishlist/change-wishlist`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
           
            body: JSON.stringify(inforWishList)
        });
        const jsonCart  = await cart.json();
        //return result infor status
        return jsonCart
    } catch (err) {
        console.log(err);
    }
};

const getAllWishListIterm = async (inforUserId, token) => {
        try {
      
          const response = await fetch(`https://vercel-nodejs.onrender.com/api/v2/wishlist/get-list/${inforUserId}`, {
            method: 'GET',
            headers: {
              // set Accept header to application/json
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





const  wishListService = {
    changeWishListIterm,
    getAllWishListIterm
};
  
export default wishListService;