import React, { useEffect, useState } from "react";
import MenuSidebarProfile from "../../commons/SideBar/MenuSidebarProfile";
import ItermSidebar from "../../commons/SideBar/ItermSidebar";
import { CartProfile } from "./CartProfile";
import { Logout, Account, AccountIconActive, Address, AddressIconActive, Card, CardIconActive, Cart, CartIconActive, PointIcon, PointIconActive, Sale, SaleIconActive, WishList, WishListIconActive, LogoutActive } from "../../assets/profile";
import config from "../../config/config";
import Wishlist from "./Wishlist";
import AccountUser from "./AccountUser";
import { useDispatch } from "react-redux";
import { changeWish } from "../../redux/WishList/wishListRedux";
import { addCart } from "../../redux/Cart/cartbuyRedux";
import { clearUser } from "../../redux/user/fetchUserApi";


const Children = ({children}) => {

    return  (
        {children}
    )
};

function Profile() {

    const dispatch = useDispatch();
    const iterm  = localStorage.getItem('userShop') !== undefined ? JSON.parse(localStorage.getItem('userShop')):  '' ;
    const [name, setName] = useState(iterm?.payload?.user?.username);
    const logout = async () => {
      
        dispatch(
            changeWish('clear')
        )
        dispatch(
            addCart([])
        )
        dispatch(
            clearUser([])
        )
        localStorage.setItem("userShop",[]);
        localStorage.setItem("wishlist/user-current",[]);
        localStorage.setItem("shop/user-current",[]);
        window.location.replace("http://localhost:3000/");
    }

    document.addEventListener("click", function(event) {
        // If user clicks inside the element, do nothing
        if (event.target.closest(".profile") || event.target.closest(".icon-infor-image__user") ) return 0;
        // setCart(false);
        if(document.querySelector('.profile') && window.innerWidth < 900) {

            document.querySelector('.profile').style.display = 'none';
        }
    
        
        })

    
    


   

    return (
        <div className="profile-warrper">
            <div className="profile" >
                <div className="profile-user-title">
                    <div className="profile-usertitle">{name !== undefined ? name : '-'}</div>
                    <button className="btn-email">
                        <span className="count"></span>
                    </button>
                </div>
                <div className="cpoint">
                    <div className="profile-cpoint">
                        <div className="profile-cpoint-item">
                            <div className="title">C-point</div>
                            <div className="value color-cpoint"  >30</div>

                        </div>
                        <div className="profile-cpoint-line"></div>
                    </div>
                    <div className="profile-cpoint">
                        <div className="profile-cpoint-item">
                            <div className="title">Điểm KHTT</div>
                            <div className="value color-KHTT" >0</div>

                        </div>
                        <div className="profile-cpoint-line"></div>
                    </div>
                    <div className="profile-cpoint">
                        <div className="profile-cpoint-item">
                            <div className="title">Hạng thẻ</div>
                            <div className="value color-user-green" >Green</div>

                        </div>
                    </div>
                </div>
                <MenuSidebarProfile>
                    <ItermSidebar to={"/" + config.routers.profile + "-" + config.routers.cart}  title="Đơn hàng của tôi" icon={<Cart/>} active={<CartIconActive/>} isUse={true} />
                    <ItermSidebar to={"/" + config.routers.profile + "-" + config.routers.sale}   title="Khuyến mại" icon={<Sale/>} active={<SaleIconActive/>} isUse={true} />
                    <ItermSidebar to={"/" + config.routers.profile + "-" + config.routers.point}  title="C-points" icon={<PointIcon/>} active={<PointIconActive/>} isUse={true}/>
                    <ItermSidebar to={"/" + config.routers.profile + "-" + config.routers.address}  title="Sổ địa chỉ" icon={<Address/>} active={<AddressIconActive/>} isUse={true}/>
                    <ItermSidebar to={"/" + config.routers.profile + "-" + config.routers.card}  title="Thẻ KHTT" icon={<Card/>} active={<CardIconActive/>} />
                    <ItermSidebar to={"/" + config.routers.profile + "-" + config.routers.wishlist}  title="Yêu thích" icon={<WishList/>} active={<WishListIconActive/>} isUse={true}/>
                    <ItermSidebar to={"/" + config.routers.account }  title="Tài khoản" icon={<Account/>} active={<AccountIconActive/>} isUse={true}/>

                    <div onClick={() => logout()} >
                    <ItermSidebar title="Đăng xuất" icon={<Logout/>} isUse={false} active={<LogoutActive/>} />
                    </div>
                </MenuSidebarProfile>
                <div className="profile-support">
                    <b>Bạn cần hỗ trợ?</b>
                    <p>Vui lòng gọi 
                        <a href="#">1800 6061</a>
                        (miễn phí cước gọi)
                    </p>

                </div>
            </div>
            <div className="profile-content">
               
                {
                    window.location.pathname === '/profile-cart' ? (
                        <CartProfile/>
                    ) : (
                        <></>
                    )
                    
                }
                {
                     window.location.pathname === '/profile-wishlist' ? (
                        <Wishlist/>
                    ) : (
                        <></>
                    )
                }
                {
                     window.location.pathname === '/account' ? (
                        <AccountUser/>
                    ) : (
                        <></>
                    )
                }
                
            </div>
        </div>
    )
}

export default Profile;