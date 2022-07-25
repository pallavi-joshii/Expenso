import React from 'react'
import "./about.css"
import image from "./assets/about.jpg"

function Contact() {
    return (
		  <div className="container">
			  <div className="content-section">
          <div className="title">
            <h1>ABOUT EXPENSO</h1>
          </div>
          <div className="content">
            <h4>Keep track of your expenses the smart way </h4>
            <p>Expenso focuses mainly on dealing with personal income and expenses records. Here, you simply have to fill out your income amount and expense amount under your category that can be selected from the drop down list, the amount gets added to the charts and reflects in the balance amount instantly. The app keeps a record of all the created transactions facilitating user to see their transaction history and provide flexibility by allowing undo/delete the transactions.</p>
            <div className="button">
              <a href="">Read More</a>
            </div>
          </div>
          <div className="social">
            <a href=""><i className="fab fa-facebook-f"></i></a>
            <a href=""><i className="fab fa-twitter"></i></a>
            <a href=""><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="image-section">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjerHzGaipfNuDrNiw3vnYMGSMnz10cxSQNg&usqp=CAU" alt="Image" width="50%" height="50%" />
        </div>
      </div>
  )
}

export default Contact