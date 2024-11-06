import React from 'react'
import { FaAward } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div class="text-center">
                <p class="text-4xl text-gray-600 flex justify-center">
                    <FaAward />
                </p>
                <h1 class="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Page not found</h1>
                <p class="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for. Please enter proper URL</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <span class="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                        <NavLink to='/'>
                            Go back home
                        </NavLink>
                    </span>
                </div>
            </div>
        </main>
    )
}

export default PageNotFound