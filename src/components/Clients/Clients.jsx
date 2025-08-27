import React, { useState } from 'react'
import './Clients.css'
import zemalt from '../../asserts/Zemalt.png'
import Broadium from '../../asserts/Broadium.png'
import utho from '../../asserts/utho.png'
import Mhc from '../../asserts/mhc.png'
import paramed from '../../asserts/paramed'
import rh from '../../asserts/rh.png'
import srj from '../../asserts/srj.png'
import parased from '../../asserts/prasad.png'
import negup from '../../asserts/negup'
import lowest from '../../asserts/lowest.png'
import insurance from '../../asserts/insurance.png'
import dharna from '../../asserts/dharna.png'
import cql from '../../asserts/cql.png'
import cpa from '../../asserts/cpa.png'
import cleved from '../../asserts/cleved.png'
import canadas from '../../asserts/canadas.png'
import canada from '../../asserts/canada.png'


const Clients = () => {
    const clientA=[
        {
            img: zemalt,
            name: "Zemalt PVT LTD",
        },
         {
            img: Broadium,
            name: "Broadium",
        },
         {
            img: utho,
            name: "utho",
        },
         {
            img: Mhc,
            name: "Men's Health Clinic",
        },
         {
            img: paramed,
            name: "ParaMed",
        },
         {
            img: rh,
            name: "RH Insurance",
        },
         {
            img: srj,
            name: "SRJ Chartered Professional Accountants",
        },
         {
            img: parased,
            name: "Prasad & Company LLP",
        },
         {
            img: negup,
            name: "Negup",
        },
         {
            img: lowest,
            name: "LowestRates.ca Toronto",
        },
         {
            img: insurance,
            name: "Insurance-Canada.ca",
        },
         {
            img: dharna,
            name: "Dharna CPA Accounting & Tax Services",
        },
         {
            img: cql,
            name: "CQL & Partners",
        },
         {
            img: canadas,
            name: "Canada's Medical Clinic"
        },
         {
            img: canada,
            name: "Canada Clinics",
        },

    ]
    const pages=[
        [clientA[0],clientA[1],clientA[2]],
        [clientA[3],clientA[4],clientA[5]],
        [clientA[6],clientA[7],clientA[8]],
        [clientA[9],clientA[10],clientA[11]],
        [clientA[12],clientA[13],clientA[14]],
    ]
    const [currentIndex,setCurrentIndex]=useState(0);
  return (
  <>
  <div className='imgg'> 
    {
    pages[currentIndex].map((data, index) => (
      <div className=   "area13" key={index}>
        <div className="client-images">
          <div className="client1"><img src={data.img} alt=""/></div>
          <div className="border-line1">
            <p className='name0'>{data.name}</p>
          </div>
        </div>
      </div>
    ))}
    </div>
    <div className='outDot'> 
    {
        pages.map((_,id) => (
            <div   className={currentIndex === id ? 'dots active' : 'dots'}
            onClick={() => setCurrentIndex(id)}
            ></div>
        ))
    }
    </div>
     
  </>
)
}

export default Clients