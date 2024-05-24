import React from 'react'

export default function Home() {
  return (
    <>
      <div className='exp-head'>
        <p id='exp-txt'>Explore All Countries</p>
      </div>


      <div>
        <div className='info'>
          <div>
            <img src='https://www.cia.gov/the-world-factbook/static/778a257ec6e116fbb7aac018c170b3eb/d0b80/wfb-feature-world.webp' id='info-1' />
          </div>
          <div className='info-2'>
            <h2>What's New</h2>
            <h5>For this week's update, we're posting new data on <br />average household expenditures per country,<br />
              including food, alcohol, and tobacco.</h5>
          </div>
        </div>
        <hr />

        <div className='img'>
          <div>
            <img src='https://www.cia.gov/the-world-factbook/static/375be1c02fc0818938f44e13ba2a9e47/36dd5/wfb-feature-regions.webp' id='img-1' />
          </div>
          <div className='img-1-content'>
            The World & Its Regions <br />
            World<br />
            Africa<br />
            Antarctica<br />
            Australia and Oceania<br />
            Central America and the Caribbean<br />
            Central Asia<br />
            East and Southeast Asia<br />
            Europe<br />
            Middle East<br />
            North America<br />
            South America<br />
            South Asia
          </div>
        </div>
      </div>

      <div className='footer-details'>
        <div id='div1'>
          <h2>Agency</h2><br />
          About CIA<br /><br />
          Leadership<br /><br />
          Organization<br /><br />
          Mission and Vision<br /><br />
          CIA Museum<br /><br />
        </div>
        <div id='div2'>
          <h2>Careers</h2><br />

          Career Opportunities<br /><br />
          Hiring Process<br /><br />
          Student Programs<br /><br />
          Accommodations<br /><br />
          MyLINK<br /><br />
        </div>
        <div id='div3'>
          <h2>Resources</h2><br />
          News & Stories<br /><br />
          Center for the Study of Intelligence (CSI)<br /><br />
          The World Factbook<br /><br />
          World Leaders<br /><br />
          The Langley Files<br /><br />
          Spy Kids<br /><br />
        </div>
        <div id='div4'>
          <div><h2>Helpful Links</h2><br />
            Partner with CIA<br /><br />
            Prepublication Review<br /><br />
            Diversity & Inclusion<br /><br />
            Freedom of Information Act (FOIA)<br /><br />
            Frequently Asked Questions<br /><br />
            Privacy Policy<br /><br />
          </div>

          <div className='font-awesome'>
            <h3>Follow us</h3>
            <i class="fa-brands fa-instagram fa-lg" id='insta'></i>
            <i class="fa-brands fa-facebook fa-lg" id='fb'></i>
            <i class="fa-solid fa-envelope fa-lg" id='mail'></i>
            <i class="fa-brands fa-telegram fa-lg" id='tele'></i>
            <i class="fa-brands fa-youtube fa-lg" id='utube'></i>
            <i class="fa-brands fa-square-x-twitter fa-lg" id='twit'></i>
          </div>
        </div>

      </div>

    </>
  )
}
