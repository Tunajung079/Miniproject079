import React from 'react';



export default (props) => {
    const { Datamenu, deleteDatamenu, editDatamenu } = props;
    const { id, fname, lname, foodname,  gar, how, pic1, pic2, pic3, pic4} = Datamenu
    return (
        <li>
            <div>
                {id}
            </div>
            <div>
                {fname}
                {lname}
            </div>
            <div>
                {foodname}
                {gar}
                {how}
            </div>
            <div>
                {pic1}
                {pic2}
                {pic3}
                {pic4}
            </div>
            <div>
            <button className="red" onClick={() => deleteDatamenu(id)}>Delete</button>
            <button className="green" onClick={() => editDatamenu(id)}>Edit</button>
            </div>
            </li>
    )
}