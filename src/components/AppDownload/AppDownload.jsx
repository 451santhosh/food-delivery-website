import React from 'react'
import './appdownload.css'
import { assets } from '../../fassets/assets'
const AppDownload = () => {
  return (
    <div>
      
      <div className='app-download' id='app-download'>
        <p className='m-auto mt-3 fw-200px mb-4'>for better experience download <br/> tomato app</p>
        <div className='app-download-platforms'>
         <img src={assets.play_store} alt=''/>
          <img src={assets.app_store} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default AppDownload
