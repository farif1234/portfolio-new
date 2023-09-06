import React from "react";

const VerticalNavbar = () => {
    return (
        <nav className=" w-1/4  p-4 border-r-2 border-blue-800 max-md:text-xs">
            <div className="mb-8">
                <h2 className="md:text-xl font-semibold">Faihaan Arif</h2>
            </div>
            <ul>
                <li className="mb-2">
                    <a href="/" className="block hover:text-blue-500">
                        About
                    </a>
                </li>
                <li className="mb-2">
                    <a href="/experience" className="block hover:text-blue-500">
                        Experience
                    </a>
                </li>
                <li className="mb-2">
                    <a href="/projects" className="block hover:text-blue-500">
                        Projects
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default VerticalNavbar;
