import { grey } from '@mui/material/colors';
import { fontSize } from '@mui/system';
import React from 'react'
const date = new Date().getFullYear();
// const year=date().getyear


const Footer = () => {
  return (<>
    <div className='footer' style={{ display: "flex", background: "grey", height: "5rem" }}>
      <footer style={{ alignItems: "center", margin: "0 0 0% 45%", fontSize: "15px",color:"white" }}>
        <p style={{ textAlign: "center" }}>
          <span className='my-2'>Copyright @ {date}</span>
          <div class="footer-padding"></div>
          <div className="footer">
            <p>Made with ❤️ by Khalid Hussain</p>
          </div>
        </p>


      </footer>
    </div>
  </>
  )

}

export default Footer
