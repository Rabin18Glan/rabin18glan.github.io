

import { Typography } from '@mui/material';
import useScrollToContext from '../../context/useScrollToContext';

export default function Footer() {
    
    const {handleScrollTo} = useScrollToContext();

    return (
        <div className="border-y bg-white dark:bg-black w-full">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <h2 className='text-2xl font-bold text-gray-700 dark:text-gray-200'>RG</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <Typography className="text-sm font-semibold uppercase" sx={{ my: '20px', fontWeight: 'bold' }}>Resources</Typography>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a onClick={handleScrollTo('home')} className="hover:underline" role="button">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a onClick={handleScrollTo('about')} className="hover:underline" role="button">
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Typography className="text-sm font-semibold uppercase" sx={{ my: '20px', fontWeight: 'bold' }}>Follow Me</Typography>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://www.linkedin.com/in/rabin-glan-95ba41303/"
                                        className="hover:underline"
                                        target="_blank"
                                         rel="noopener"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/Rabin18Glan"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="https://www.facebook.com/profile.php?id=61551905339042"
                                        className="hover:underline"
                                    >
                                        Facebook
                                    </a>
                                </li>
                                <li className='mb-4'>
                                    <a
                                        href="https://www.instagram.com/rabin19glan/"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noopener"
                                        
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.upwork.com/freelancers/~01593d9f2913e8f562"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Upwork
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                        <div>
                            <Typography className="text-sm font-semibold uppercase" sx={{ my: '20px', fontWeight: 'bold' }}>Legal</Typography>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a onClick={handleScrollTo('privacy')} className="hover:underline" role="button">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a onClick={handleScrollTo('terms')} className="hover:underline" role="button">
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2024
                        <a href="https://hiteshchoudhary.com/" className="hover:underline">
                            rabinglan
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <a href="https://www.facebook.com" className="text-gray-500 hover:text-gray-900" target="_blank" rel="noreferrer">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                    
                        <a href="https://twitter.com" className="text-gray-500" target="_blank" rel="noreferrer">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
