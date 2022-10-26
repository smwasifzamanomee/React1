import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import UL from '../Components/Ui/UL';
import Container from '../Components/Container';
import classes from '../styles/social.module.css';
import {footerData} from  '../Data/data'


const Footer = () => {
  return (
    <Container height={"md:h-[600px] "} bgColor={"bg-bg_primary"}>
      <footer className=" pt-32 max-h-max border-b-2 border-text_inverted md:flex md:justify-between items-center">
        {/* Footer content */}
        <div className="sm:mb-10">
          <h3 className=" font-sans tracking-wide text-primary">United Chauffer</h3>
          <p className="text-text_inverted py-5">
            Book your trip in minute, get full <br /> control for much longer
          </p>

          <div className="flex gap-x-4 text-text_inverted">
            <Link
              className={`w-12 h-12 text-2xl ${classes.facebook} text-light hover:bg-[#3b5180] shadow rounded-full flex justify-center items-center transition-all`}
              to="/"
            >
              <FaFacebook />
            </Link>
            <Link
              className={`w-12 h-12 text-2xl ${classes.instagram} text-light shadow rounded-full flex justify-center items-center`}
              to="/"
            >
              <FaInstagram />
            </Link>
            <Link
              className={`w-12 h-12 text-2xl ${classes.twitter} text-light shadow rounded-full flex justify-center items-center transition-all`}
              to="/"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>

        {/* Footer Menus */}
        <div className="grid grid-cols-3 md:gap-20 ">
          {/* Contact */}
          <UL heading="Company" items={footerData.company} />

          {/* Contact */}
          <UL heading="Contact" items={footerData.contact} />

          {/* More */}
          <UL heading="More" items={footerData.more} />
        </div>
      </footer>
      <div className="md:flex justify-between my-10 text-text_inverted">
        <p className="my-4">
          Copyright, Rainbow Chauffer 2022. All rights reserved.
        </p>
        <p className="my-4">Terms & Conditions</p>
      </div>
    </Container>
  )
}

export default Footer