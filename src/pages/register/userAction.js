import { requestPending,responseSuccess, requestFail } from "./userSlice";
import { createUser, verifyNewUser } from "../../api/userAPI";


export const userRegister = newUser => async dispatch => {
dispatch(requestPending())
console.log(newUser)

    
    // call api 
    const result = await createUser(newUser);

    result?.status === "success" ? dispatch (responseSuccess(result)) : dispatch(requestFail(result))

    //dispatch response 
}




export const userEmailVerification = usrobj => async dispatch => {
dispatch(requestPending())
console.log(usrobj)

    
    // call api 
    const result = await verifyNewUser(usrobj);

    result?.status === "success" ? dispatch (responseSuccess(result)) : dispatch(requestFail(result))

    //dispatch response 
}