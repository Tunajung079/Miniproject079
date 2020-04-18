import React from 'react'

//เอาไว้แสดงข้อมูลรายการอาหาร
export default props => {

    const { menu, editMenu, deleteMenu} = props
    const {id, fname, lname, foodname, gar, how, pic1, pic2, pic3, pic4 } =  menu

    return (

        <li>
           
            <div className="id">
                {id}
            </div>
            <div className="name">
                {fname}
            </div>
            <div className="name">
                {lname}
            </div>
            <div className="id">
                {foodname}
            </div>
            <div className="name">
                {gar}
            </div>
            <div className="name">
                {how}
            </div>
            <div className="name">
                {pic1}
            </div>
            <div className="name">
                {pic2}
            </div>
            <div className="name">
                {pic3}
            </div>
            <div className="name">
                {pic4}
            </div>
            <div className="container">
                <div className="button">
            <button className="green" onClick={() => deleteMenu(id)}>Delete</button>
            <button className="blue" onClick={() => editMenu(id)}>Edit</button>
       </div>
       </div>
        </li>
    )
}