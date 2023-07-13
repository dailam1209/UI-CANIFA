import React, { useEffect, useState } from 'react';
// import { fetchProductList } from '../../../redux/product/fetchProductApi';
import { useDispatch, useSelector } from "react-redux";

function AccountUser() {


    const checkEmail = "/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i";
    const checkPhone = "/(84|0[3|5|7|8|9])+([0-9]{8})\b/g";
    const iterm  = localStorage.getItem('userShop') !== undefined ? JSON.parse(localStorage.getItem('userShop')):  '' ;
    const token = iterm?.payload?.token;
    const id = iterm?.payload?.user?._id;
    const [userName, setUserName] = useState(iterm?.payload?.user?.username);
    const [phone, setPhone] = useState(iterm?.payload?.user?.phone);
    const [email, setEmail] = useState(iterm?.payload?.user?.email);
    const [birthDay, setBirthDay] = useState(iterm?.payload?.user?.birthDay?.split("/"));
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const dispatch = useDispatch();
    const dispatchProduct = (text) => {
        // dispatch(fetchProductList(text));
    }

   
    
    const updateFetch = async (inforUser, token) => {
        try {
            const user = await fetch("https://vercel-nodejs.onrender.com/api/v2/auth/updateprofile",
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
               
                body: JSON.stringify(inforUser)
            });
            const jsonUser  = await user.json();
            return jsonUser
        } catch (err) {
            console.log(err);
        }
    };

    const getUser = async (id) => {
        try {
            const user = await fetch(`https://vercel-nodejs.onrender.com/api/v2/auth/user/${id}`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const jsonUser  = await user.json();
            return jsonUser
        } catch (err) {
            console.log(err);
        }
    };

    


    const updateDay = () => {
        let e = document.getElementById("day");
        let value = e.value;
        birthDay[0] = value
        setDay(value);
    }

    const updateMonth = () => {
        let e = document.getElementById("month");
        let value = e.value;
        birthDay[1] = value
        setMonth(value);
    }

    const updateYear = () => {
        let e = document.getElementById("year");
        let value = e.value;
        birthDay[2] = value
        setYear(value);
    }

    
    const updateUser = async () => {

        console.log(userName);
        if(userName === "") {
            alert('Please enter userName.')
        }
        if(email === "" || email.match(checkEmail) === false ) {
            alert('Please check email.')
        }
        console.log("phone", phone);
        if(phone === "" || phone.toString().match(checkPhone) === false ) {
            alert('Please check phone number.')
        }
        let birthDayNew = (day + "/" + month + "/" + year).toString();
        let jsonBody = {
            "username": userName,
            "email": email,
            "phone": phone,
            "birthDay": birthDayNew
        }

         const response = await updateFetch(jsonBody,token);
         if(response && response.success === true) {
            alert('Update Profile success!')
         }
        const user = await getUser(id);
        if(user !== undefined) {
            localStorage.setItem('userShop', JSON.stringify({

                "payload" : {
                    "success": user.success,
                    "token": token,
                    "user": user.user
                }
                
            }));
        }

    }
    

    const optionsDay = [
        "",1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ]

    const optionsMonth = [
        "",1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
    ];

    const optionsYear = [
        "",1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023
    ]

    useEffect(() => {
        if(birthDay !== undefined) {

            setDay(birthDay[0]);
            setMonth(birthDay[1]);
            setYear(birthDay[2]);
        }
    })


    return (
        <div className="warrper-account">
            <div className="account-page-title">
                <h1 className="title">Thông tin tài khoản</h1>
            </div>
            <div className="account-setting-form">
                <div className="form-group ">
                    <label>Họ tên</label>
                    <input id="username" value={userName}  type="text" maxLength="15" minLength="3" name="firstName" className="form-control" onChange={(e) => setUserName(e.target.value) }></input>
                </div>
                <div className="form-group ">
                    <label>Số điện thoại</label>
                    <input id="phone" type="text"  value={phone} minLength="10"  name="phone" className="form-control" onChange={(e) => setPhone(e.target.value) }></input>
                </div>
                <div className="form-group ">
                    <label>Email</label>
                    <input id="email" value={email} disabled type="text" name="email" className="form-control" onChange={(e) => setEmail(e.target.value) }></input>
                </div>
                {/* infor birthDay */}
                <div className="label">
                    <strong>Sinh nhật</strong>
                     (nhập thông tin để nhận ưu đãi sinh nhật) 
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label>Ngày</label>
                            <select className="form-control" id="day" onChange={() => updateDay()}  value={birthDay ? birthDay[0] : ''} >
                                {
                                    optionsDay.map((day, index) => (
                                        <option value={day}>{day}</option>
                                        ))
                                    }
                                    </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Tháng</label>
                            <select className="form-control" id="month" onChange={() => updateMonth()} value={birthDay ? birthDay[1] : ''}>
                            {
                                    optionsMonth.map((day, index) => (
                                        <option value={day}>{day}</option>
                                        ))
                                    }
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group" >
                            <label>Năm sinh</label>
                            <select className="form-control" id="year" onChange={() => updateYear()} value={birthDay ? birthDay[2]  : ''}>
                            {
                                    optionsYear.map((day, index) => (
                                        <option value={day}>{day}</option>
                                        ))
                                    }
                            </select>
                        </div>
                    </div>
                </div>
                {/* action btn */}
                <div className="action">
                    <button className="btn" onClick={updateUser}>Lưu</button>
                </div>
            </div>
        </div>
    )
}

export default AccountUser;