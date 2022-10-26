import React from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import Button from '../Components/Ui/Button'
import {navList} from '../Data/data'

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 left-0 lg:h-24 bg-white z-20 shadow">
      <div className="container mx-auto  lg:flex justify-between items-center h-full px-6">
        {/* Brand and Bars */}
        <div className="sm:flex sm:justify-between sm:items-center py-6">
          <h3
            onClick={() => setOpen(false)}
            className=" font-sans text-primary tracking-wider"
          >
            <Link to="/">
              United <br className=" md:block sm:hidden" /> Chauffer
            </Link>
          </h3>
          <FaBars
            onClick={() => setOpen((prev) => !prev)}
            className={`cursor-pointer sm:block hidden w-8 h-8 p-1`}
          />
        </div>

        <div
          className={`md:flex items-center gap-x-20 ${
            !open
              ? "hidden"
              : "block max-h-fit py-12 border-b-width border-primary"
          }`}
        >
          {/* Menus */}
          <div className="flex sm:flex-col gap-y-5 sm:mb-8 gap-x-10 ">
            {navList.map((list) => (
              <Link
                onClick={() => setOpen(false)}
                className=" cursor-pointer md:text-lg font-medium md:hover:text-primary transition-all"
                key={list.id}
                to={list.route}
              >
                {list.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-10 sm:mb-6 ">
            <Link to="/login">
              {" "}
              <Button
                width={"w-[180px]"}
                className="text-primary hover:bg-primary hover:text-light border-2 border-primary"
              >
                Login
              </Button>
            </Link>

            <Link to="register">
              <Button
                width={"w-[180px]"}
                className="bg-bg_info text-light border-2 border-bg_info hover:bg-transparent hover:text-bg_info "
              >
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar