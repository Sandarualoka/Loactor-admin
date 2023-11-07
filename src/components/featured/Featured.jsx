import React from 'react'
import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className='title'>Total Revenue</h1>
            <MoreVertIcon fontSize='small'/>
        </div>

        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="title">Total Sales made Today</p>
            <p className="amount">$420</p>
            <p className="desc">Previous transactions processing</p>

            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResults negative">
                        <ArrowDropDownIcon fontSize='small'/>
                        <div className="resultAmount">
                            $12.4k
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="itemTitle">last Week</div>
                    <div className="itemResults positive">
                        <ArrowDropDownIcon fontSize='small'/>
                        <div className="resultAmount">
                            $12.4k
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResults positive">
                        <ArrowDropDownIcon fontSize='small'/>
                        <div className="resultAmount">
                            $12.4k
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Featured