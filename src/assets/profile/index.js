import React from 'react';
export const iconProfile = {
    account : require('./account.svg').default,
    accountActive: require('./account-active.svg').default,
    address : require('./address.svg').default,
    addressActive : require('./address-active.svg').default,
    cart : require('./cart.svg').default,
    cartActive: require('./cart-active.svg').default,
    card : require('./card.svg').default,
    cardActive : require('./card-active.svg').default,
    point : require('./point.svg').default,
    pointActive : require('./point-active.svg').default,
    sale : require('./sale.svg').default,
    saleActive : require('./sale-active.svg').default,
    wish : require('./wish.svg').default,
    wishActive : require('./wish-active.svg').default,
    logout : require('./logout.svg').default
}


export const PointIcon = ({ className}) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M21.4 12C21.4 17.1915 17.1915 21.4 12 21.4C6.80852 21.4 2.6 17.1915 2.6 12C2.6 6.80852 6.80852 2.6 12 2.6C17.1915 2.6 21.4 6.80852 21.4 12Z" stroke="#C8C7CC" stroke-width="1.2"/>
 <path d="M11.9475 13.9762C9.7247 13.9484 7.97934 12.1374 8.01217 9.89567C8.04375 7.7487 9.85352 5.98565 12.0068 6.00207C14.2157 6.01975 16.028 7.86362 15.9876 10.0523C15.9471 12.2321 14.1235 14.004 11.9475 13.9762ZM11.9904 7.9053C10.8235 7.90404 9.92046 8.80071 9.91035 9.97018C9.90025 11.1397 10.7969 12.0641 11.9538 12.0755C13.1333 12.0881 14.0856 11.1472 14.0805 9.9765C14.0755 8.83608 13.1371 7.90656 11.9904 7.9053Z" fill="#C8C7CC"/>
 <path d="M15.9493 17.7126C13.2782 16.7515 10.6854 16.7767 8.00676 17.7062C8.00676 17.0697 7.97771 16.5481 8.0257 16.0341C8.03959 15.8864 8.25429 15.6805 8.41468 15.6338C10.8117 14.9354 13.2163 14.9253 15.6096 15.6515C15.7611 15.6969 15.9304 15.9116 15.9645 16.0745C16.0238 16.3562 15.9872 16.6593 15.9834 16.9523C15.9796 17.1607 15.9645 17.3678 15.9493 17.7126Z" fill="#C8C7CC"/>
 </svg>
 
)

export const PointIconActive = ({ className}) => (
<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.4 12C21.4 17.1915 17.1915 21.4 12 21.4C6.80852 21.4 2.6 17.1915 2.6 12C2.6 6.80852 6.80852 2.6 12 2.6C17.1915 2.6 21.4 6.80852 21.4 12Z" stroke="#333F48" stroke-width="1.2"/>
<path d="M11.9475 13.9762C9.7247 13.9484 7.97934 12.1374 8.01217 9.89567C8.04375 7.7487 9.85352 5.98565 12.0068 6.00207C14.2157 6.01975 16.028 7.86362 15.9876 10.0523C15.9471 12.2321 14.1235 14.004 11.9475 13.9762ZM11.9904 7.9053C10.8235 7.90404 9.92046 8.80071 9.91035 9.97018C9.90025 11.1397 10.7969 12.0641 11.9538 12.0755C13.1333 12.0881 14.0856 11.1472 14.0805 9.9765C14.0755 8.83608 13.1371 7.90656 11.9904 7.9053Z" fill="#333F48"/>
<path d="M15.9493 17.7126C13.2782 16.7515 10.6854 16.7767 8.00676 17.7062C8.00676 17.0697 7.97771 16.5481 8.0257 16.0341C8.03959 15.8864 8.25429 15.6805 8.41468 15.6338C10.8117 14.9354 13.2163 14.9253 15.6096 15.6515C15.7611 15.6969 15.9304 15.9116 15.9645 16.0745C16.0238 16.3562 15.9872 16.6593 15.9834 16.9523C15.9796 17.1607 15.9645 17.3678 15.9493 17.7126Z" fill="#333F48"/>
</svg>
 
);

export const Cart = ({ className}) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0888 12L11.9893 21.6385" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.6143 16.4372V7.56241C20.6143 7.4296 20.579 7.29917 20.5121 7.18445C20.4451 7.06973 20.3489 6.97485 20.2333 6.90949L12.3583 2.45841C12.2457 2.39477 12.1186 2.36133 11.9893 2.36133C11.8599 2.36133 11.7328 2.39477 11.6202 2.45841L3.74521 6.90949C3.62959 6.97485 3.53339 7.06973 3.46646 7.18445C3.39953 7.29917 3.36426 7.4296 3.36426 7.56241V16.4372C3.36426 16.57 3.39953 16.7005 3.46646 16.8152C3.53339 16.9299 3.62959 17.0248 3.74521 17.0901L11.6202 21.5412C11.7328 21.6049 11.8599 21.6383 11.9893 21.6383C12.1186 21.6383 12.2457 21.6049 12.3583 21.5412L20.2333 17.0901C20.3489 17.0248 20.4451 16.9299 20.5121 16.8152C20.579 16.7005 20.6143 16.57 20.6143 16.4372V16.4372Z" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5117 7.18365L12.0889 11.9999L3.46777 7.18262" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5955 13.9227V9.42269L7.89746 4.5625" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
     
    );

export const CartIconActive = ({ className}) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0888 12L11.9893 21.6385" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.6143 16.4372V7.56241C20.6143 7.4296 20.579 7.29917 20.5121 7.18445C20.4451 7.06973 20.3489 6.97485 20.2333 6.90949L12.3583 2.45841C12.2457 2.39477 12.1186 2.36133 11.9893 2.36133C11.8599 2.36133 11.7328 2.39477 11.6202 2.45841L3.74521 6.90949C3.62959 6.97485 3.53339 7.06973 3.46646 7.18445C3.39953 7.29917 3.36426 7.4296 3.36426 7.56241V16.4372C3.36426 16.57 3.39953 16.7005 3.46646 16.8152C3.53339 16.9299 3.62959 17.0248 3.74521 17.0901L11.6202 21.5412C11.7328 21.6049 11.8599 21.6383 11.9893 21.6383C12.1186 21.6383 12.2457 21.6049 12.3583 21.5412L20.2333 17.0901C20.3489 17.0248 20.4451 16.9299 20.5121 16.8152C20.579 16.7005 20.6143 16.57 20.6143 16.4372V16.4372Z" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5117 7.18365L12.0889 11.9999L3.46777 7.18262" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5955 13.9227V9.42269L7.89746 4.5625" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        
);


export const Sale = ({ className}) => (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5.25V18.75" stroke="#C8C7CC" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.25 15.6741C2.24997 15.5013 2.30968 15.3338 2.41902 15.2C2.52836 15.0662 2.68059 14.9744 2.84992 14.94C3.52749 14.8016 4.13645 14.4334 4.57379 13.8976C5.01113 13.3619 5.25 12.6916 5.25 12C5.25 11.3084 5.01113 10.6381 4.57379 10.1024C4.13645 9.56665 3.52749 9.19843 2.84992 9.06C2.68059 9.02562 2.52836 8.93376 2.41902 8.79997C2.30968 8.66618 2.24997 8.4987 2.25 8.32592V6C2.25 5.80109 2.32902 5.61032 2.46967 5.46967C2.61032 5.32902 2.80109 5.25 3 5.25H21C21.1989 5.25 21.3897 5.32902 21.5303 5.46967C21.671 5.61032 21.75 5.80109 21.75 6V8.32592C21.75 8.4987 21.6903 8.66618 21.581 8.79997C21.4716 8.93376 21.3194 9.02563 21.1501 9.06C20.4725 9.19843 19.8635 9.56665 19.4262 10.1024C18.9889 10.6381 18.75 11.3084 18.75 12C18.75 12.6916 18.9889 13.3619 19.4262 13.8976C19.8635 14.4334 20.4725 14.8016 21.1501 14.94C21.3194 14.9744 21.4716 15.0662 21.581 15.2C21.6903 15.3338 21.75 15.5013 21.75 15.6741V18C21.75 18.1989 21.671 18.3897 21.5303 18.5303C21.3897 18.671 21.1989 18.75 21 18.75H3C2.80109 18.75 2.61032 18.671 2.46967 18.5303C2.32902 18.3897 2.25 18.1989 2.25 18V15.6741Z" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    
);




export const SaleIconActive = ({ className}) => (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5.25V18.75" stroke="#333F48" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.25 15.6741C2.24997 15.5013 2.30968 15.3338 2.41902 15.2C2.52836 15.0662 2.68059 14.9744 2.84992 14.94C3.52749 14.8016 4.13645 14.4334 4.57379 13.8976C5.01113 13.3619 5.25 12.6916 5.25 12C5.25 11.3084 5.01113 10.6381 4.57379 10.1024C4.13645 9.56665 3.52749 9.19843 2.84992 9.06C2.68059 9.02562 2.52836 8.93376 2.41902 8.79997C2.30968 8.66618 2.24997 8.4987 2.25 8.32592V6C2.25 5.80109 2.32902 5.61032 2.46967 5.46967C2.61032 5.32902 2.80109 5.25 3 5.25H21C21.1989 5.25 21.3897 5.32902 21.5303 5.46967C21.671 5.61032 21.75 5.80109 21.75 6V8.32592C21.75 8.4987 21.6903 8.66618 21.581 8.79997C21.4716 8.93376 21.3194 9.02563 21.1501 9.06C20.4725 9.19843 19.8635 9.56665 19.4262 10.1024C18.9889 10.6381 18.75 11.3084 18.75 12C18.75 12.6916 18.9889 13.3619 19.4262 13.8976C19.8635 14.4334 20.4725 14.8016 21.1501 14.94C21.3194 14.9744 21.4716 15.0662 21.581 15.2C21.6903 15.3338 21.75 15.5013 21.75 15.6741V18C21.75 18.1989 21.671 18.3897 21.5303 18.5303C21.3897 18.671 21.1989 18.75 21 18.75H3C2.80109 18.75 2.61032 18.671 2.46967 18.5303C2.32902 18.3897 2.25 18.1989 2.25 18V15.6741Z" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    
);



export const Address = ({ className}) => (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2495 19.4992V14.9991C14.2495 14.8001 14.1704 14.6094 14.0298 14.4687C13.8891 14.3281 13.6984 14.2491 13.4995 14.2491H10.4995C10.3005 14.2491 10.1098 14.3281 9.96912 14.4687C9.82847 14.6094 9.74945 14.8001 9.74945 14.9991V19.4992C9.74945 19.698 9.67045 19.8888 9.52981 20.0294C9.38918 20.1701 9.19844 20.2491 8.99954 20.2492L4.50009 20.2497C4.40159 20.2498 4.30406 20.2304 4.21305 20.1927C4.12205 20.155 4.03936 20.0998 3.9697 20.0301C3.90005 19.9605 3.8448 19.8778 3.8071 19.7868C3.7694 19.6958 3.75 19.5982 3.75 19.4997V10.8316C3.75 10.7271 3.77183 10.6238 3.8141 10.5282C3.85637 10.4326 3.91814 10.347 3.99545 10.2767L11.4949 3.45778C11.633 3.33226 11.8129 3.2627 11.9995 3.2627C12.186 3.26269 12.3659 3.33223 12.504 3.45775L20.0045 10.2767C20.0818 10.347 20.1436 10.4326 20.1859 10.5282C20.2282 10.6238 20.25 10.7271 20.25 10.8316V19.4997C20.25 19.5982 20.2306 19.6958 20.1929 19.7868C20.1552 19.8778 20.1 19.9605 20.0303 20.0301C19.9606 20.0998 19.878 20.155 19.7869 20.1927C19.6959 20.2304 19.5984 20.2498 19.4999 20.2497L14.9994 20.2492C14.8005 20.2491 14.6097 20.1701 14.4691 20.0295C14.3285 19.8888 14.2494 19.698 14.2495 19.4992V19.4992Z" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    
);



export const AddressIconActive = ({ className}) => (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2495 19.4992V14.9991C14.2495 14.8001 14.1704 14.6094 14.0298 14.4687C13.8891 14.3281 13.6984 14.2491 13.4995 14.2491H10.4995C10.3005 14.2491 10.1098 14.3281 9.96912 14.4687C9.82847 14.6094 9.74945 14.8001 9.74945 14.9991V19.4992C9.74945 19.698 9.67045 19.8888 9.52981 20.0294C9.38918 20.1701 9.19844 20.2491 8.99954 20.2492L4.50009 20.2497C4.40159 20.2498 4.30406 20.2304 4.21305 20.1927C4.12205 20.155 4.03936 20.0998 3.9697 20.0301C3.90005 19.9605 3.8448 19.8778 3.8071 19.7868C3.7694 19.6958 3.75 19.5982 3.75 19.4997V10.8316C3.75 10.7271 3.77183 10.6238 3.8141 10.5282C3.85637 10.4326 3.91814 10.347 3.99545 10.2767L11.4949 3.45778C11.633 3.33226 11.8129 3.2627 11.9995 3.2627C12.186 3.26269 12.3659 3.33223 12.504 3.45775L20.0045 10.2767C20.0818 10.347 20.1436 10.4326 20.1859 10.5282C20.2282 10.6238 20.25 10.7271 20.25 10.8316V19.4997C20.25 19.5982 20.2306 19.6958 20.1929 19.7868C20.1552 19.8778 20.1 19.9605 20.0303 20.0301C19.9606 20.0998 19.878 20.155 19.7869 20.1927C19.6959 20.2304 19.5984 20.2498 19.4999 20.2497L14.9994 20.2492C14.8005 20.2491 14.6097 20.1701 14.4691 20.0295C14.3285 19.8888 14.2494 19.698 14.2495 19.4992V19.4992Z" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    
);



export const Card = ({ className}) => (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 5.25H3C2.58579 5.25 2.25 5.58579 2.25 6V18C2.25 18.4142 2.58579 18.75 3 18.75H21C21.4142 18.75 21.75 18.4142 21.75 18V6C21.75 5.58579 21.4142 5.25 21 5.25Z" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.75 15.75H18.75" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 15.75H12.75" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.25 9.08008H21.75" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    
);




export const CardIconActive = ({ className}) => (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 5.25H3C2.58579 5.25 2.25 5.58579 2.25 6V18C2.25 18.4142 2.58579 18.75 3 18.75H21C21.4142 18.75 21.75 18.4142 21.75 18V6C21.75 5.58579 21.4142 5.25 21 5.25Z" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.75 15.75H18.75" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 15.75H12.75" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.25 9.08008H21.75" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        
    );



export const WishList = ({ className}) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5303 19.864L20.1271 12.2672C21.9937 10.4006 22.2691 7.32976 20.5027 5.36811C20.0602 4.87533 19.522 4.47786 18.9208 4.19997C18.3197 3.92207 17.6682 3.76956 17.0062 3.75176C16.3441 3.73396 15.6854 3.85123 15.0702 4.09642C14.455 4.34161 13.8962 4.70957 13.4279 5.17786L12 6.60571L10.7672 5.3729C8.9006 3.5063 5.82976 3.23091 3.86811 4.99735C3.37533 5.43981 2.97786 5.97804 2.69997 6.57919C2.42207 7.18034 2.26956 7.83181 2.25176 8.49384C2.23396 9.15588 2.35123 9.8146 2.59642 10.4298C2.84161 11.045 3.20957 11.6038 3.67786 12.0721L11.4697 19.864C11.6103 20.0046 11.8011 20.0836 12 20.0836C12.1989 20.0836 12.3897 20.0046 12.5303 19.864V19.864Z" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        
    );

export const WishListIconActive = ({ className}) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5303 19.864L20.1271 12.2672C21.9937 10.4006 22.2691 7.32976 20.5027 5.36811C20.0602 4.87533 19.522 4.47786 18.9208 4.19997C18.3197 3.92207 17.6682 3.76956 17.0062 3.75176C16.3441 3.73396 15.6854 3.85123 15.0702 4.09642C14.455 4.34161 13.8962 4.70957 13.4279 5.17786L12 6.60571L10.7672 5.3729C8.9006 3.5063 5.82976 3.23091 3.86811 4.99735C3.37533 5.43981 2.97786 5.97804 2.69997 6.57919C2.42207 7.18034 2.26956 7.83181 2.25176 8.49384C2.23396 9.15588 2.35123 9.8146 2.59642 10.4298C2.84161 11.045 3.20957 11.6038 3.67786 12.0721L11.4697 19.864C11.6103 20.0046 11.8011 20.0836 12 20.0836C12.1989 20.0836 12.3897 20.0046 12.5303 19.864V19.864Z" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        
    );

export const Account = ({ className}) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15C14.0711 15 15.75 13.3211 15.75 11.25C15.75 9.17893 14.0711 7.5 12 7.5C9.92893 7.5 8.25 9.17893 8.25 11.25C8.25 13.3211 9.92893 15 12 15Z" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.98145 18.6913C6.54639 17.5806 7.40768 16.6478 8.46997 15.9963C9.53226 15.3448 10.7541 15 12.0003 15C13.2464 15 14.4683 15.3448 15.5306 15.9963C16.5929 16.6478 17.4542 17.5806 18.0191 18.6913" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 6.75C19.5784 6.75 20.25 6.07843 20.25 5.25C20.25 4.42157 19.5784 3.75 18.75 3.75C17.9216 3.75 17.25 4.42157 17.25 5.25C17.25 6.07843 17.9216 6.75 18.75 6.75Z" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 3.75V2.625" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.4508 4.5L16.4766 3.9375" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.4508 6L16.4766 6.5625" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 6.75V7.875" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0488 6L21.0231 6.5625" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0488 4.5L21.0231 3.9375" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9361 10.9219C20.9787 11.2797 21.0001 11.6397 21 12C21 13.78 20.4722 15.5201 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89472 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17294 13.7558C2.82567 12.01 3.0039 10.2004 3.68509 8.55585C4.36628 6.91131 5.51983 5.50571 6.99987 4.51677C8.47991 3.52784 10.22 3 12 3C12.2816 3 12.56 3.01275 12.8352 3.03824" stroke="#C8C7CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        
    );

export const AccountIconActive = ({ className}) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15C14.0711 15 15.75 13.3211 15.75 11.25C15.75 9.17893 14.0711 7.5 12 7.5C9.92893 7.5 8.25 9.17893 8.25 11.25C8.25 13.3211 9.92893 15 12 15Z" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.98145 18.6913C6.54639 17.5806 7.40768 16.6478 8.46997 15.9963C9.53226 15.3448 10.7541 15 12.0003 15C13.2464 15 14.4683 15.3448 15.5306 15.9963C16.5929 16.6478 17.4542 17.5806 18.0191 18.6913" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 6.75C19.5784 6.75 20.25 6.07843 20.25 5.25C20.25 4.42157 19.5784 3.75 18.75 3.75C17.9216 3.75 17.25 4.42157 17.25 5.25C17.25 6.07843 17.9216 6.75 18.75 6.75Z" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 3.75V2.625" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.4508 4.5L16.4766 3.9375" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.4508 6L16.4766 6.5625" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 6.75V7.875" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0488 6L21.0231 6.5625" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0488 4.5L21.0231 3.9375" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9361 10.9219C20.9787 11.2797 21.0001 11.6397 21 12C21 13.78 20.4722 15.5201 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89472 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17294 13.7558C2.82567 12.01 3.0039 10.2004 3.68509 8.55585C4.36628 6.91131 5.51983 5.50571 6.99987 4.51677C8.47991 3.52784 10.22 3 12 3C12.2816 3 12.56 3.01275 12.8352 3.03824" stroke="#333F48" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        
    );


export const Logout = ({ className}) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.75 12H6.75" stroke="#C8C7CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.501 5.25L6.75098 12L13.501 18.75" stroke="#C8C7CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 4.5V19.5" stroke="#C8C7CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);

export const LogoutActive = ({ className}) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.75 12H6.75" stroke="#333F48" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.501 5.25L6.75098 12L13.501 18.75" stroke="#333F48" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.75 4.5V19.5" stroke="#333F48" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

);

export const Comeback = ({ className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
    </svg>

);

        