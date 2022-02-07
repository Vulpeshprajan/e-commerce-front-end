import {catRequestPending, catRespSuccess, fetchCatRespSuccess ,catRequestFail} from "./categorySlice";
import {createCategory, fetchCategory, deleteCategory, updateCategory } from "../../api/categoryApi";


export const createCat = newCat => async dispatch => {
  
    dispatch(catRequestPending())
    // call the api 
    const data = await createCategory(newCat)

    if(data?.status === "success") {
        dispatch(fetchCat());
        return dispatch(catRespSuccess(data));

    }
    dispatch(catRequestFail(data));
    // dispatch success or fail 

}
export const fetchCat = () => async dispatch => {
  
    dispatch(catRequestPending())
    // call the api 
    const {status, message, categories} = await fetchCategory()

    console.log(categories, "from cat action")

    if(status === "success") {
        return dispatch(fetchCatRespSuccess(categories));

    }
    dispatch(catRequestFail({status, message}));
    // dispatch success or fail 

}


export const deleteCat = (_id) => async dispatch => {
  
    dispatch(catRequestPending())
    // call the api 
    const data = await deleteCategory(_id)

    console.log(data, "from cat delete")

    if(data.status === "success") {
        dispatch(fetchCat());
    
        return dispatch(catRespSuccess(data));

    }
    dispatch(catRequestFail(data));
    // dispatch success or fail 

}


export const updateCat = catObj => async dispatch => {
  
    dispatch(catRequestPending())
    // call the api 
    const data = await updateCategory(catObj)

    console.log(data, "from cat update")

    if(data.status === "success") {
        dispatch(fetchCat());
    
        return dispatch(catRespSuccess(data));

    }
    dispatch(catRequestFail(data));
    // dispatch success or fail 

}