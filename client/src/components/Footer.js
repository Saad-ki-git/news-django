import React from 'react'
import Deffon from "../images/deffon.png"
function Footer() {
    return (
        <div className='h-20'>

            <footer className="bg-white w-full  bottom-0 left-0  right-0 rounded-lg shadow dark:bg-gray-900 ">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="/" className="flex items-center mb-4 sm:mb-0">
                            <img
                                src={Deffon}
                                className="h-8  mr-3"
                                alt="Deffon Logo" />
                        </a>
                    </div>
                    <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 " />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">deffon</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </div>
    )
}

export default Footer