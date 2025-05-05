import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json").then(res =>res.json())
const Categories = () => {
    const categories = use(categoryPromise)
    // console.log(categories);
    
    return (
        <div>            
            <h1 className='font-bold'>All Categories {categories.length}</h1>
            <div className='grid grid-cols-1 mt-3'>
                {
                    categories.map(category => <NavLink key={category.id} className={({ isActive }) =>
                        isActive
                          ? "mt-2 bg-base-300 btn border-0 font-semibold  shadow-none"
                          : "mt-2 hover:bg-base-300 btn border-0 bg-base-100 shadow-none font-bold text-[#9F9F9F]"
                      } to={`/category/${category.id}`}>{category.name}</NavLink>)
                }

            </div>
        </div>
    );
};

export default Categories;