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

            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Ac mattis
                            <span className="dark:text-violet-400">
                                <Typewriter
                                    options={{
                                        strings: ['Hello', 'World'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                            <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="/" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Suspendisse</a>
                            <a rel="noopener noreferrer" href="/" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;