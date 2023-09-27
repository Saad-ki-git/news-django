import React, { useState,useEffect } from "react";
import axios from "axios";
import Deffon from "../images/deffon.png"
import Card from "../containers/Card";
import Footer from "./Footer";
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State of search query
  const [filteredBlogList, setFilterBloglist] = useState([]);
  const [blogList, setBlogList] = useState([]);
  const [showFooter,setShowFooter] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api/listing`);
        setBlogList(res.data.results);
      } catch (e) {
        console.log("Landing page error", e);
      }
    };
    fetchData();
  }, []);

  // Update filteredBlogList when searchQuery changes
  useEffect(() => {
    const filteredBlogs = blogList.filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("Filtered Blogs:", filteredBlogs);
    setFilterBloglist(filteredBlogs);
  }, [searchQuery, blogList]);
  
  
  const displayBlog = () => {
    const filteredBlogs = filteredBlogList || []; 
  // Check if there is a search query
  if (searchQuery && filteredBlogList && filteredBlogList.length === 0) {
    return (
      <div>
        <strong>
          <p
            style={{ fontFamily: "League Spartan" }}
            className="flex justify-center items-center h-half-screen mt-40 text-black text-center text-6xl"
          >
            Not found.
          </p>
        </strong>
      </div>
    );
  }

  // Check if there is a search query and show filtered blogs
  if (searchQuery && filteredBlogList) {
    return filteredBlogList.map((blog) => (
      <Card
        key={blog.id}
        title={blog.title}
        author_name={blog.author_name}
        desc = {blog.desc}
        slug={blog.slug}
        photo={blog.photo}
        
      />
    ));
  }

  // If there is no search query, show all blogs
  if (blogList) {
    return blogList.map((blog) => (
      <Card
        key={blog.id}
        title={blog.title}
        author_name={blog.author_name}
        desc = {blog.desc}
        slug={blog.slug}
        photo={blog.photo}
      />
    ));
  }

  // Return null if neither condition is met
  return null;
};
// For  footer
useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const positionToShowFooter = documentHeight - windowHeight;

    setShowFooter(scrollY >= positionToShowFooter);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);



  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src={Deffon}
            className="h-8 mb-3 mr-3"
            alt="Deffon Logo"/>
        </a>
        <div className="relative md:block" style={{width:"300px"}}>
            <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black-500 focus:border-black-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        {/* <div className="flex md:order-2">
          
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center  p-2 w-5 h-5 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden"> */}
            
          </div>
          {/* <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 active:text-gray-900 active:bg-gray-200 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 md:dark:hover:text-gray-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <Link
                to="/about-us"
                className="block py-2 pl-3 pr-4 active:text-gray-900 active:bg-gray-200 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 md:dark:hover:text-gray-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 active:text-gray-900 active:bg-gray-200 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 md:dark:hover:text-gray-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
          </ul> */}
        {/* </div>
      </div> */}
    </nav>
    <section>{displayBlog()}</section>
    <Footer />
    </div>
  );
};

export default Navbar;
