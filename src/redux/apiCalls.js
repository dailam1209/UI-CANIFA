

export const Province = async () => {
    const province = await fetch(`https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1`);
    const list = await province.data.data
    const json = list.json();
    return json
}


// forgot-password
export const checkEmail = async (email) => {
    try {
        const request = await  fetch("https://vercel-nodejs.onrender.com/api/v2/auth/forgotpassword",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
           
            body: JSON.stringify({
                email
            })
        });
        const jsonCode  = await request.json();
        return jsonCode
    } catch (err) {
        console.log(err);
    }
};

export const checkCodeApi = async (code, email) => {
    try {
        const request = await  fetch(`https://vercel-nodejs.onrender.com/api/v2/auth/check-code`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                code
            })
        });
        const jsonCode  = await request.json();
        return jsonCode
    } catch (err) {
        console.log(err);
    }
};

export const deleteCode = async (email) => {
    try {
        const request = await  fetch(`https://vercel-nodejs.onrender.com/api/v2/auth/delete-code`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email
            })
        });
        const jsonCode  = await request.json();
        return jsonCode
    } catch (err) {
        console.log(err);
    }
};



export const changePassword = async (newPassword, refreshToken) => {
    try {
        const request = await  fetch(`https://vercel-nodejs.onrender.com/api/v2/auth/resetpassword/?token=${refreshToken}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPassword)
        });
        const jsonCode  = await request.json();
        return jsonCode
    } catch (err) {
        console.log(err);
    }
};
