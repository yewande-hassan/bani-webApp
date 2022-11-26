import React from "react";
import Button from "../../components/common/Button";
// import Guaranty from "../../assets/images/Rectangle4.png"
// import location2 from "../../assets/images/location2.png"
import arrowRight from "../../assets/images/arrow-right.png"
import '../../styles/page/dashboard.scss'
function BankDetails({activity, image, name, location}) {
  return (
    <div className="section2">
    <div className="flex justify-between my-3 px-3">
      <span>
        <p className="text-xs">
          <span className="font-bold">Activity Feed</span> - {activity}
        </p>
      </span>
      <span className="text-xs">
        <p>
          <span className="active"> Active </span> . Created 16days ago
        </p>
      </span>
    </div>
    <div className="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
  </div>
  <div className="flex-auto my-5">
    <div className="relative flex flex-wrap items-baseline pb-6 before:bg-[#FFEDE3] before:absolute before:-top-6 before:bottom-0 before:left-0 before:right-0">
    <img src={image} alt="" className="absolute z-10 inset-0  px-4" loading="lazy" />
    </div>
  </div>
    <div className="flex justify-between my-3 px-3 text-xs">
      <span>
        <p className="font-bold">{name}</p>
        <p>209630**83</p>
      </span>
      <span>
        <Button action={"Go to Account View"} className="buton" image={arrowRight}/>
      </span>
    </div>
    <div className="px-3">
      <div className="flex justify-between text-sm">
        <span className="mb-2">
          <p className="text-xs text-[#65717C]">Total inflow</p>
          <p className="font-medium text-base">NGN 77,823.00</p>
        </span>
        <span className="mb-2">
          <p className="text-xs text-[#65717C]">Last activity date</p>
          <p className="font-medium text-base">81 Settlement</p>
        </span>
        <span className="mb-2">
          <p className="text-xs text-[#65717C]">Linked Branch</p>
          <img src={location} alt="branch2" className="ml-2" />
        </span>
      </div>
      <table className="w-full table-auto text-sm">
  <thead>
    <tr>
      <th className="text-start">Transaction Details</th>
      <th className="text-start">Amount</th>
      <th className="text-start">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr className="tableRow">
    <td>Olaoluwa S.</td>
            <td>₦6,720.00</td>
            <td >Today, 8mins ago</td>
            <td>
            <img
                  src={arrowRight}
                  alt="arrowRight"
                  className="ml-3"
                />
                </td>
    </tr>
    <tr className="tableRow">
    <td>Olaoluwa S.</td>
            <td>₦6,720.00</td>
            <td>13th Aug - 3:15PM</td>
            <td>
            <img
                  src={arrowRight}
                  alt="arrowRight"
                  className="ml-3"
                />
            </td>
    </tr>
    <tr className="tableRow">
    <td>Olaoluwa S.</td>
            <td>₦10,720.00</td>
            <td>13th Aug - 3:15PM</td>
            <td>
            <img
                  src={arrowRight}
                  alt="arrowRight"
                  className="ml-3"
                />
            </td>
    </tr>
    <tr className="tableRow">
    <td>Olaoluwa S.</td>
            <td>₦6,720.00</td>
            <td>13th Aug - 3:15PM</td>
            <td>
            <img
                  src={arrowRight}
                  alt="arrowRight"
                  className="ml-3"
                />
            </td>
    </tr>
    <tr className="tableRow">
    <td>Olaoluwa S.</td>
            <td>₦6,720.00</td>
            <td>13th Aug - 3:15PM</td>
            <td>
            <img
                  src={arrowRight}
                  alt="arrowRight"
                  className="ml-3"
                />
            </td>
    </tr>
  </tbody>
</table>
    </div>
  </div>

  );
}

export default BankDetails;