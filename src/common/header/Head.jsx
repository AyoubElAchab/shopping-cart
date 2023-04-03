import React from 'react'

const Head = () => {
  return (
    <div>
        <section className='head'>
          <div className="container d_flex">
            <div className="left row">
              <i className="fa fa-phone"></i>
              <label >+88012 3457 7894</label>
              <i className="fa fa-envelope"></i>
              <label >example@gmail.com</label>
            </div>
            <div className="right row RText">
              <label>Theme FAQ's</label>
              <label>Need Helps</label>
              <i className="fa-duotone fa-flag-usa"></i>
              <label>EN</label>
              
              <i className="fa-duotone fa-sack-dollar fa-beat-fade addstyle" ></i>
             
              <label>USD</label>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Head