import React from "react";
import Guaranty from "../../assets/images/Rectangle4.png"
import location2 from "../../assets/images/location2.png"
import '../../styles/page/dashboard.scss'
import BankDetails from "./BankDetails";
function  GTBank() {
  return (
<BankDetails
activity={"GT-Bannk"}
image={Guaranty}
name={"Guaranty Trust Bank"}
location={location2}
/>
  );
}

export default GTBank;