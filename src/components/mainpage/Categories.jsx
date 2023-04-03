import React from 'react'
import cat1Png from '../../images/category/cat-1.png'

const Categories = () => {
    const data = [
        {
            cateImg:cat1Png,
            cateName:"Fashion",


        }
    ]
  return (
    <>
        <div className="category">
            {
                data.map((value,index)=>{
                    return(
                        <div className="box f_flex" key={index}>
                            <img src={value.cateImg} alt="" />
                            <span>{value.cateName} </span>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Categories