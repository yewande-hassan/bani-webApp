import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../assets/images/Logo.png";

const Navbar = ()=>{
    return (
      <nav className="flex justify-between p-4 bg-white">
        <Link to="/">
          <div>
            <img src={Logo} alt="logo" />
          </div>
        </Link>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle cx="16.001" cy="16" r="16" fill="#F5F6FA" />
            <path
              d="M16.0177 8.42499C13.2593 8.42499 11.0177 10.6667 11.0177 13.425V15.8333C11.0177 16.3417 10.801 17.1167 10.5427 17.55L9.58432 19.1417C8.99266 20.125 9.40099 21.2167 10.4843 21.5833C14.076 22.7833 17.951 22.7833 21.5427 21.5833C22.551 21.25 22.9927 20.0583 22.4427 19.1417L21.4843 17.55C21.2343 17.1167 21.0177 16.3417 21.0177 15.8333V13.425C21.0177 10.675 18.7677 8.42499 16.0177 8.42499Z"
              stroke="#65717C"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M17.5593 8.66667C17.301 8.59167 17.0343 8.53334 16.7593 8.5C15.9593 8.4 15.1926 8.45834 14.476 8.66667C14.7176 8.05 15.3176 7.61667 16.0176 7.61667C16.7176 7.61667 17.3176 8.05 17.5593 8.66667Z"
              stroke="#65717C"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.5176 21.8833C18.5176 23.2583 17.3926 24.3833 16.0176 24.3833C15.3343 24.3833 14.701 24.1 14.251 23.65C13.801 23.2 13.5176 22.5667 13.5176 21.8833"
              stroke="#65717C"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <circle cx="20.001" cy="10" r="3" fill="#5444F2" />
          </svg>
          <div className="flex bg-slate-200 px-3 py-1 rounded-lg items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <circle cx="16.001" cy="16" r="16" fill="#5444F2" />
              <path
                d="M14.089 8.608V16.496C14.089 17.072 14.0356 17.5733 13.929 18C13.833 18.4267 13.6676 18.8213 13.433 19.184C13.1983 19.536 12.8623 19.808 12.425 20C11.9876 20.1813 11.449 20.272 10.809 20.272C9.60364 20.272 8.73431 19.9733 8.20098 19.376C7.66764 18.7787 7.40098 17.8827 7.40098 16.688C7.40098 16.5387 7.40631 16.3947 7.41698 16.256H8.87298V16.656C8.87298 17.424 9.00098 18.0107 9.25698 18.416C9.52364 18.8213 10.0356 19.024 10.793 19.024C11.1343 19.024 11.417 18.9707 11.641 18.864C11.8756 18.7573 12.0516 18.6347 12.169 18.496C12.297 18.3467 12.393 18.1387 12.457 17.872C12.521 17.6053 12.5583 17.3707 12.569 17.168C12.5796 16.9653 12.585 16.6933 12.585 16.352V8.608H14.089ZM24.4659 8.608V9.92H20.6419V20H19.1379V9.92H15.3139V8.608H24.4659Z"
                fill="white"
              />
            </svg>
            <span className="mx-2">
              <p className="font-bold">JT Industry Limit..</p>
              <p>JamesT@gmail.com</p>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13.2809 5.96667L8.93428 10.3133C8.42095 10.8267 7.58095 10.8267 7.06761 10.3133L2.72095 5.96667"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </nav>
    );
};
export default Navbar;
