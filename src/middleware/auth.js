

const adminAuth = (req,res,next) => {
    const token = "xyz";
    const isAuthenticated = token === "xyz"

    if(!isAuthenticated){
        res.status(401).send('unAuthorized user')
    }
    else{
        next();
    }
}

const userAuth = (req,res,next) => {
    const token = "abcd";

    const isValidUser = token === 'xyz';

    if(!isValidUser){
        res.status(401).send('Invalid user')
    }
    else{
        next();
    }
}



export {adminAuth,userAuth}

