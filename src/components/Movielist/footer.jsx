import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Movie MAnic. All rights reserved.</p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99h-3v-2.88h3v-2.2c0-3 1.79-4.65 4.54-4.65 1.31 0 2.69.24 2.69.24v3h-1.54c-1.52 0-2 1-2 2v2.4h3.41l-.54 2.88h-2.87v6.99A10 10 0 0 0 22 12z" />
            </svg>
          </a>

          <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0 2-2.48 9.18 9.18 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.7 4.12A12.81 12.81 0 0 1 1.64 2.17a4.5 4.5 0 0 0 1.4 6.03 4.38 4.38 0 0 1-2.05-.57v.06a4.52 4.52 0 0 0 3.62 4.44 4.54 4.54 0 0 1-2.04.08 4.53 4.53 0 0 0 4.22 3.13A9 9 0 0 1 1 18.14 12.78 12.78 0 0 0 7 20c8.4 0 13-7 13-13 0-.2 0-.42 0-.63A9.22 9.22 0 0 0 23 3z" />
            </svg>
          </a>

          <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5a3.75 3.75 0 0 0 3.75-3.75v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.75-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
