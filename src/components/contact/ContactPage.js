import React from 'react'
import './ContactStyles.css'

const ContactPage = () => {
  return (
    <div className='contact'>
    <div className="container">
        <div className="form-container">
            <form action="">
                <h1><span>Contact</span> Us</h1>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter your name' />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div>
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" rows="10" placeholder='Enter your name'></textarea>
                </div>
                <button>Submit</button>
            </form>
        </div>
    </div>

</div>
  )
}

export default ContactPage