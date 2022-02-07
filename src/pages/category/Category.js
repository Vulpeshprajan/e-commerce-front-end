import React from 'react'
import BreadcrumbComp from '../../components/breadcrumb/Breadcrumb';
import CategoryForm from '../../components/category-form/CategoryForm';
import { CategoryList } from '../../components/category-list/CategoryList';
import AdminLayout from "../layout/AdminLayout";

const Category = () => {
    return (
        <div>
            <AdminLayout>
            <BreadcrumbComp page="category" />
       
                <div className="content">
                    <div className="category-form">
                   <CategoryForm />
                    </div>

                    <hr/>

                    <div className="cat-list mt-5">
                    <h2> Category Lists </h2>
        <CategoryList/>

                    </div>
                </div>
            </AdminLayout>
        </div>
    )
}

export default Category
