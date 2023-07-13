

const register = async (inforUser) => {

    try {

        const newRegister = await fetch(`https://vercel-nodejs.onrender.com/api/v2/auth/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inforUser)
        })
    
        const json  = await newRegister.json();
        return  json;
    } catch (error) {
        throw Error(error);
    }


} 

// login
const login = async (inforUser) => {
    try {
        const getUser = await fetch(`https://vercel-nodejs.onrender.com/api/v2/auth/login`, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inforUser)
        })
        const user = getUser.json();
        return user;
    } catch (err) {
        throw new Error(err);
    }
}

// logout
const logout = async () => {
    try {
        await fetch(`https://vercel-nodejs.onrender.com/api/v2/auth/logout`, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        })
    } catch (err) {
        throw new Error(err);
    }

}


const userService = {
    login,
    register,
    logout
}

export default userService;