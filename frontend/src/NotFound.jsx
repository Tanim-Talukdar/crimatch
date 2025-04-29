import React from 'react'
import WebAssetOffIcon from '@mui/icons-material/WebAssetOff';

export default function NotFound() {
  return (
    <div className=' row justify-content-center align-items-center' style={{
        height: "54vh"
    }}>
        <div className='col-1'>
            
            <WebAssetOffIcon  sx={{ fontSize: 150 }}/>

        </div>
        <div className='col-2'>
            <h1>404</h1>
            <br />
            <h2>Page Not Found</h2>
        </div>
    </div>
  )
}
