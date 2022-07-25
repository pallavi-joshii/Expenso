import React from 'react'
import "./about.css"
import image from "./assets/about.jpg"

function About() {
  return (
		  <div className="container">
			  <div className="content-section">
          <div className="title">
            <h1>About Us</h1>
          </div>
          <div className="content">
            <h4>HCL Technologies is an Indian multinational information technology services and consulting company</h4>
            <p> It is a subsidiary of HCL Enterprise. Originally a research and development division of HCL, it emerged as an independent company in 1991 when HCL entered into the software services business. The company has offices in 50 countries and over 187,000 employees. HCL Technologies is on the Forbes Global 2000 list. It is among the top 20 largest publicly traded companies in India with a market capitalisation of $50 billion as of September 2021. As of July 2020, the company, along with its subsidiaries, had a consolidated annual revenue of ₹71,265 crore (US$10 billion).</p>
            <div className="button">
              <a href="https://en.wikipedia.org/wiki/HCL_Technologies">Read More</a>
            </div>
          </div>
          <div className="social">
            <a href=""><i className="fab fa-facebook-f"></i></a>
            <a href=""><i className="fab fa-twitter"></i></a>
            <a href=""><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="image-section">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgFO65Zl0De4ub6Tbi1g3bwO9tJ9ipO63HZA&usqp=CAU" alt="Image" />
        </div>
      </div>
  )
}

export default About