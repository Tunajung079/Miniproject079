import React, {useState, useEffect } from 'react'
import { firestore } from '../index'

import MenuList from './MenuList'


const Cuisine =()=>{

    
  const [menu,setMenu] = useState([{}]);
  const [fname,setFname] = useState('');
  const [lname,setLname] = useState('');
  const [foodname,setFoodname] = useState('');
  const [gar,setGar] = useState('');
  const [how,setHow] = useState('');
  const [pic1,setPic1] = useState('');
  const [pic2,setPic2] = useState('');
  const [pic3,setPic3] = useState('');
  const [pic4,setPic4] = useState('');

  useEffect(() => {
      retriveData()
    }, [])
  
  const retriveData = () => {
      firestore.collection("share").onSnapshot(snapshot => {
        console.log(snapshot.docs)
        let mytasks = snapshot.docs.map(d => {
          const { id, fname, lname, foodname, gar, how, pic1, pic2, pic3, pic4 } = d.data();
          console.log(id, fname, lname, foodname, gar, how, pic1, pic2, pic3, pic4)
          return { id, fname, lname, foodname, gar, how, pic1, pic2, pic3, pic4 };
        });
        setMenu(mytasks)
      })
    }
    const deleteMenu = (id) => {
      firestore.collection('share').doc(id + '').delete();
    }
    const editMenu = (id)=>{
      firestore.collection('share').doc(id+'').set({id, fname, lname, foodname, gar, how, pic1, pic2, pic3, pic4});
    }

    const renderDatamenu = () => {
      if (menu && menu.length) {
        return (
          menu.map((menu, index) => {
            return (
              <MenuList key={index} menu={menu}
              deleteMenu={deleteMenu}
             editMenu={editMenu}
              />
              
            )
          })
        )
      }
      else {
        return (<li>No Data</li>)
      }
    }
 

    return(
        <div> 
       {renderDatamenu()}
            
            </div>
    )
}


export default Cuisine;