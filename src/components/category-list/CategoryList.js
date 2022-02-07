import React, {useEffect} from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import {useDispatch, useSelector  } from "react-redux";
import {fetchCat, deleteCat  } from "../../pages/category/categoryAction";
import { catRespReset, onCategorySelect} from "../../pages/category/categorySlice";
import { EditCatForm } from '../category-form/EditCatForm';

export const CategoryList = () => {
    const dispatch = useDispatch()


    const {categories, categoryResponse} = useSelector(state => state.category)

useEffect(() => {
    !categories.length && dispatch(fetchCat())

    // return () => categoryResponse.status && dispatch(catRespReset())
   
}, [  dispatch])

 const handleOnEdit = cat => {

    dispatch(onCategorySelect(cat))
    
 }

 


//prarent cat only 
const parentCat = categories.filter(row => !row.parentCat)

// child 

const childCat = categories.filter(row => row.parentCat)


const handleOnDelete = _id => {
    const hasChildCategory = childCat.filter(item => item.parentCat === _id)
    
    if(hasChildCategory.length){
        return alert( "This category has child categories, please re allocated chid category to another parent category before deleting this category. ")
    } 
    dispatch(deleteCat (_id))
}
    return (
        <div>
            <EditCatForm/>

            <ListGroup>
        {
            parentCat?.length && parentCat.map((row,i ) => {
            return <div>
            <ListGroup.Item key = {row._id} className = "d-flex justify-content-between">
            <span> {row.name}   </span>    
            <span className="ml-5">
            <Button onClick = {() => handleOnEdit(row)}  variant="primary" className='mx-3'> Edit </Button>
            <Button variant="danger" onClick ={()  => handleOnDelete(row._id)}> Delete </Button>
            </span>
            </ListGroup.Item> 
                {
                    childCat.map(item => item.parentCat === row._id ? (<ListGroup.Item key = {item._id} className='d-flex justify-content-between '> 
                    <span>
                    {"==>"} {item.name}
                 </span>
                    <span className="ml-5">
            <Button onClick = {() => handleOnEdit(item)}  variant="primary" className='mx-3'> Edit </Button>
            <Button variant="danger"
                onClick ={()  => dispatch(deleteCat (item._id))} > Delete </Button>
            </span>
                    
                    </ListGroup.Item>) : null
                    )}


            </div> 
                
            })}
</ListGroup>
        </div>
    )
}
