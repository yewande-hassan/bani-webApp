import React, { useContext } from "react";
import Polaris from "../../assets/images/Rectangle5.png"
import Guaranty from "../../assets/images/Rectangle4.png"
import Providus from "../../assets/images/Rectangle6.png"
import First from "../../assets/images/Rectangle3.png"
import More from "../../assets/images/more.png"
import location1 from "../../assets/images/location1.png"
import location2 from "../../assets/images/location2.png"
import location3 from "../../assets/images/location3.png"
import Groupicon from "../../assets/images/Groupicon.png"
import setting from "../../assets/images/setting.png"
import {FiSearch} from 'react-icons/fi'
import {BiCopy} from 'react-icons/bi'

import "../../styles/page/dashboard.scss";
import {UserContext} from "../../pages/dashboard/Dashboard"

const Section3 = () => {  
  const {handleClick} = useContext(UserContext);
  return (

    <div className="section3 bg-white">
    <span className="flex justify-between py-2 font-bold border-b border-slate-300">
      <p>Your Virtual Accounts</p>
      <img src={Groupicon} alt="Group icon" />
    </span>

    <span className="flex justify-between items-center py-2 border-b border-slate-200">
      <p className="branch">Branch</p>
      <div className="input_container pl-2 pr-3 py-2">
      <input placeholder="Search for virtual account" className="input" />
      <FiSearch className="input_search"/>
      </div>
    </span>

    <div className="flex flex-col">
      <span className="flex justify-between py-2">
        <p className="font-bold">Lekki II</p>
        <div className="flex">
        <p className="colored-text font-bold mr-2">Manage</p>
        <img src={setting} alt="setting icon"/>
        </div>
      </span>
      <table className=" table striped my-3">
        <thead>
          <tr className="table_head py-3 border-b border-slate-200">
            <th className="text-start font-normal">Bank Name</th>
            <th className="text-start font-normal">Account number</th>
            <th className="text-start font-normal">Total inflow</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bankRow">
            <td>
              <span className="flex">
                <img
                  src={Polaris}
                  alt="polaris_bank_logo"
                  className="mr-2"
                />
                <p>Polaris Bank Limited</p>
              </span>
            </td>
            <td>
              <span className="flex">
                <p className="mr-2">08023221144</p>
                <BiCopy/>
                <img src={location1} alt="branch1" className="ml-2" />
              </span>
            </td>
            <td>
              <span className="flex">
                <p> NGN 100,000.00</p>
                <img src={More} alt="More icon" className="ml-3" />
              </span>
            </td>
          </tr >
          <tr onClick={()=>handleClick()} className="bankRow">
            <td>
              <span className="flex my-2">
                <img
                  src={Guaranty}
                  alt="Guaranty_bank_logo"
                  className="mr-2"
                />
                <p>Guranty Trust Holding</p>
              </span>
            </td>
            <td>
              <span className="flex">
                <p>08023221144</p>
                <p className="copied text-sm mx-1">copied</p>
                <img src={location2} alt="branch2" className="ml-1" />
              </span>
            </td>
            <td>
              <span className="flex">
                <p>NGN 100,000.00</p>
                <img src={More} alt="More icon" className="ml-3" />
              </span>
            </td>
          </tr>
          <tr className="bankRow">
            <td>
              <span className="flex my-2">
                <img
                  src={Providus}
                  alt="Providus_bank_logo"
                  className="mr-2"
                />
                <p>Providus Bank PLC</p>
              </span>
            </td>
            <td>
              <span className="flex">
              <p className="mr-2">08023221144</p>
                <BiCopy/>
                <img src={location2} alt="branch1" className="ml-2" />
              </span>
            </td>
            <td>
              <span className="flex">
                <p>NGN 100,000.00</p>
                <img src={More} alt="More icon" className="ml-3" />
              </span>
            </td>
          </tr>
          <tr className="bankRow">
            <td>
              <span className="flex my-2">
                <img src={First} alt="First_bank_logo" className="mr-2" />
                <p>First Bank of Nigeria</p>
              </span>
            </td>
            <td>
              <span className="flex">
              <p className="mr-2">08023221144</p>
                <BiCopy/>
                <img src={location3} alt="branch1" className="ml-2" />
              </span>
            </td>
            <td>
              <span className="flex">
                <p>NGN 100,000.00</p>
                <img src={More} alt="More icon" className="ml-3" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Section3;