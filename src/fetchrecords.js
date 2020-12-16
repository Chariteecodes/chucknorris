import React from "react";

const Record = ({idnumber, iconurl, value, dateinserted, dateupdated}) => {
    return (
        <div className="datafetch">
            <span> Date created: {dateinserted}</span>
            <span>Record ID: <strong>{idnumber}</strong></span>
            <img src={iconurl} alt=""/>
            <span><strong>{value}</strong></span> 
            
            
            <span> Date updated: {dateupdated}</span>

        </div>
    );

}

export default Record;
