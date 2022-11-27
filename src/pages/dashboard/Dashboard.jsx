import React, { useState, createContext} from "react";
import Button from "../../components/common/Button";
import formatSquare from "../../assets/images/format-square.png";
import add from "../../assets/images/add.png"
import '../../styles/page/dashboard.scss';
import DashboardCard from "../../components/sections/DashboardCard";
import Section3 from "../../components/sections/ListOfBanks";
import BankDetails from "../../features/bankdetails/BankDetails";

export const UserContext = createContext()
export default function Dashboard(){
  const [show, setShow] = useState(null);
  const handleClick = (params)=>{  
    setShow(params)   
  }
  return (
    <UserContext.Provider value={{show,handleClick}}>
    <div className="container">
      <div className="header">
        <p>Virtual Accout Dashboard</p>
        <span className="btns">
          <Button action={"Create New Branch"} image={formatSquare} width={20} height={20} className="btn1" />
          <Button action={"Create Virtual Branch"} image={add} width={20} height={20} className="btn2" />
        </span>
      </div>
      <div className="sections">
      <DashboardCard/>
        {show != null ?
             <BankDetails details={show}/>
              : null
        }
       <Section3 />
      </div>
    </div>
    </UserContext.Provider>
  );
}
