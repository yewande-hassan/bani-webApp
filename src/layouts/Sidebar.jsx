import React from "react";
import '../styles/layout/sidebar.scss';
import {TbRadar2} from 'react-icons/tb';
import {MdContentPaste} from 'react-icons/md';
import {BiCategoryAlt} from 'react-icons/bi';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {MdPeopleOutline} from 'react-icons/md';
import {BsCartDash} from 'react-icons/bs';
import {BsWallet} from 'react-icons/bs';
import {GrTransaction} from 'react-icons/gr'
import {BiFolderOpen} from 'react-icons/bi';
import {FiToggleLeft} from 'react-icons/fi';
import {AiOutlineSetting} from 'react-icons/ai'
import {BsHddStack} from 'react-icons/bs'
function Sidebar() {
  const arrays=[
    {
      icon: <TbRadar2/>,
      name:"Welcome"
    },
    {
      icon: <MdContentPaste/>,
      name:"Compliance"
    },
    {
      icon: <BiCategoryAlt/>,
      name:"Overview"
    },
    {
      name:"BUSINESS"
    },
    {
      icon: <HiOutlineShoppingBag/>,
      name:"Products"
    },
    {
      icon: <MdPeopleOutline/>,
      name:"Customers"
    },
    {
      icon: <BsCartDash/>,
      name:"Orders"
    },
    {
      name:"PAYMENTS"
    },
    {
      icon: <BsWallet/>,
      name:"Wallets"
    },
    {
      icon: <GrTransaction/>,
      name:"Transactions"
    },
    {
      icon: <BiFolderOpen/>,
      name:"Virtual Account"
    }
  ]
  const footer=[
    {
      icon: <FiToggleLeft/>,
      name:"Live Mode"
    },
    {
      icon: <AiOutlineSetting/>,
      name:"Settings"
    },
    {
      icon: <BsHddStack/>,
      name:"Audit logs"
    },
  ]
  return (
    <>
       <aside className="bg-white flex flex-col justify-between">
      <div className="w-[] px-4 text-left flex flex-col justify-center">
        {arrays.map((sideNav, index) =>{
              return(
                  <span className="flex items-center pb-4" key={index}>
                    {sideNav.icon}
                  <p className="ml-3">{sideNav.name}</p>
                </span>
              )
        })}

      </div>
      <div className="w-[] px-4 text-left flex flex-col justify-center">
        {footer.map((footerNav, index) =>{
              return(
                  <span className="flex items-center pb-4" key={index}>
                    {footerNav.icon}
                  <p className="ml-3">{footerNav.name}</p>
                </span>
              )
        })}

      </div>
      </aside>
    </>
  );
}

export default Sidebar;
