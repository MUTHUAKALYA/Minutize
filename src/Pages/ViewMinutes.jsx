import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import { useState,useEffect } from 'react';

const ViewMinutes = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
          const querySnapshot = await getDocs(collection(db, "minutes"));
          setData(querySnapshot.docs);
        }
        getData();
      }, []);
  return (
   <>{
    data.map((card,index)=>{
        return (
            <div className='grid grid-cols-2 space-x-5'>
                <div className='bg-lightSecondary'>
                    <h1>`Organisation Name: ${card.organisationName}`</h1>
                </div>
            </div>
        )
    })
   }
   <div></div>
   </>
  )
}

export default ViewMinutes