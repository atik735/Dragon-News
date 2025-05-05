import React, { Suspense } from 'react';
import Categories from './Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<h1>Loading ..........</h1>}>
           <Categories></Categories>
           </Suspense>
        </div>
    );
};

export default LeftAside;