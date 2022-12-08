import React, { useContext } from 'react';
import Switch from "react-switch";
import { themeContext } from '../Theme/Theme';
import Typewriter from 'typewriter-effect';
const Home = () => {
    const { toggleTheme, dark } = useContext(themeContext)


    return (
        <>
            <div className="flex py-5  items-center justify-end px-6">
                <div className='px-4 font-bold'>
                    {
                        dark ? 'Light' : "Dark"
                    }
                </div>
                <Switch onChange={() => toggleTheme()} checked={dark} />
            </div>

            <section className="dark:bg-gray-800 dark:text-gray-100  bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="container flex flex-col  p-4  sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-4  px-6
                    rounded-sm lg:max-w-md xl:max-w-lg  lg:text-left">
                        <h1 className="text-5xl font-bold  sm:text-6xl py-2">Welcome</h1>
                        <h1 className="text-4xl font-bold  sm:text-6xl"> I Am
                            <span className="dark:text-violet-400">
                                <Typewriter
                                    options={{
                                        strings: ['Md. Naem Hossain', 'Web Developer'],
                                        autoStart: true,
                                        cursor: "_",
                                        loop: true,
                                        typeSpeed: 70,
                                        deleteSpeed: 50,
                                    }}
                                />
                            </span>
                        </h1>
                    </div>
                    <div className="flex  items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;