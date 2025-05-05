import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header';
import Latest from '../Components/Latest';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/LeftAside';
import RightAside from '../Components/RightAside';

const Root = () => {
    const {state} = useNavigation()
    return (
        <>
        <header className='w-11/12 mx-auto'>
            <Header></Header>
            <section>
                <Latest></Latest>
            </section>
            <nav>
                <Navbar></Navbar>
            </nav>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
           {state =="loading"? <span className='loading loading-infinity loading-xl'></span>: <Outlet></Outlet>} 
            </section>
            <aside className='col-span-3 sticky top-0 h-fit'>
                <RightAside></RightAside>
            </aside>
            </main>
        </>
    );
};

export default Root;