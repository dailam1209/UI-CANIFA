import ProfileParent from "../components/InforAcount/Parent";
import Home from "../Layout/Home";
import Male from "../Layout/Male";
import ProductBuy from "../components/DetailProduct/ProductBuy";
import SearchProducts from "../Layout/SearchProducts";

import config from "../config/config";
import Login from "../components/Authentication/Login";
import ShopCart from "../components/Shop/ShopCart";

const publicRouter = [
    {path: config.routers.home, component: Home},
    {path: config.routers.login, component: Home},
    {path: "/forgot-password", component: Home},
    {path: "/resetpassword", component: Home},
    {path: config.routers.login, component: Login},
    {path: config.routers.nam, component: Male},
    {path: config.routers.nu, component: Male},
    {path: config.routers.begai, component: Male},
    {path: config.routers.betrai, component: Male},
    {path: config.routers.betrai, component: Male},
    {path: config.routers.shopcart, component: ShopCart},
    {path: config.routers.product + "/:id", component: ProductBuy},
    {path:  "/search", component: SearchProducts},
    {path: config.routers.account, component: ProfileParent},
    {path: config.routers.profile + "-" + config.routers.address, component: ProfileParent},
    {path: config.routers.profile + "-" + config.routers.card, component: ProfileParent},
    {path: config.routers.profile + "-" + config.routers.wishlist, component: ProfileParent},
    {path: config.routers.profile + "-" + config.routers.point, component: ProfileParent},
    {path: config.routers.profile + "-" + config.routers.sale, component: ProfileParent},
    {path: config.routers.profile + "-" + config.routers.cart, component: ProfileParent},


];


const privateRouter = [

];


export { publicRouter, privateRouter} ;