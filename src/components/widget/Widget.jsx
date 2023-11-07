import React from 'react'
import "./widget.scss";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaidIcon from '@mui/icons-material/Paid';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

const Widget = ({type}) => {

  let data;

  //TEMP DATA//
  const amount ='100';
  const diff = "20";

  switch(type){
    case "user":
      data={
        title:"USERS",
        isMoney: false,
        link:"See all users",
        icon: <PersonIcon className='icon' style={{color: "crimson" , backgroundColor: "#FA9D9D "}}/>,

      }
      break;

      case "order":
      data={
        title:"ORDERS",
        isMoney: false,
        link:"View all orders",
        icon: <ShoppingCartIcon className='icon' style={{color: "#FAC200 " , backgroundColor: "#FEFAC4 "}}/>,

      }
      break;

      case "earning":
      data={
        title:"EARNING",
        isMoney: true,
        link:"View all earnings",
        icon: <PaidIcon className='icon' style={{color: "#01FF05 " , backgroundColor: "#D4FCD7 "}}/>,

      }
      break;

      case "balance":
      data={
        title:"BALANCE",
        isMoney: true,
        link:"View all details",
        icon: <MonitorHeartIcon className='icon' style={{color: "#ECC1FE " , backgroundColor: "#B000FC "}}/>,

      }
      break;


      default:
        break;
  }
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ArrowDropUpIcon/>
          {diff} %</div>

          <div className="icon">
           {data.icon}
          </div>
      </div>
    </div>
  )
}

export default Widget