import React, {useState} from "react";
import QRCode from 'qrcode'
import './styles.css';

function QRGenerator(){
    const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')
	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 330,
			margin: 2,
			color: {
				dark: '#837dd1',
				// light: '#EEEEEEFF'
                light: '#02001E'
			}
		}, (err, url) => {
			if (err) return console.error(err)
			setQr(url)
		})
	}
    return(
        <>
        <div className='top'>
            <p>QREM GENERATOR V1.0</p>
        </div>
        <div className='bottom'>
            <span className='data-wrapper'>
                <input type='text' placeholder='Enter text here' value={url}
				onChange={e => setUrl(e.target.value)}/>
            </span>
            <button className='copy-btn' onClick={GenerateQRCode}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M16.4207 1.48146L17.4185 1.41495C17.3852 0.915077 16.9871 0.517003 16.4872 0.483677L16.4207 1.48146ZM3.39815 14.504L2.54066 15.0185C2.62511 15.1592 2.74291 15.277 2.88366 15.3615L3.39815 14.504ZM0.709519 15.7778C0.318995 16.1684 0.318995 16.8015 0.709519 17.192C1.10004 17.5826 1.73321 17.5826 2.12373 17.192L0.709519 15.7778ZM8.25199 11.0638C8.64252 10.6733 8.64252 10.0401 8.25199 9.64957C7.86147 9.25904 7.2283 9.25904 6.83778 9.64957L8.25199 11.0638ZM15.4229 1.54798C15.7963 7.14865 14.4689 11.2114 12.3622 13.3181C11.3245 14.3558 10.0877 14.9355 8.70679 15.0262C7.31447 15.1177 5.69561 14.7163 3.91265 13.6465L2.88366 15.3615C4.93086 16.5898 6.95064 17.1459 8.8379 17.0219C10.7366 16.8972 12.4203 16.0884 13.7764 14.7323C16.4574 12.0513 17.8111 7.30468 17.4185 1.41495L15.4229 1.54798ZM4.25565 13.9895C3.18587 12.2065 2.78444 10.5877 2.8759 9.19534C2.96662 7.81443 3.54629 6.57767 4.58403 5.53994C6.6907 3.43327 10.7535 2.10585 16.3542 2.47925L16.4872 0.483677C10.5975 0.0910132 5.85085 1.44469 3.16982 4.12572C1.8137 5.48184 1.00493 7.16557 0.880204 9.06423C0.756224 10.9515 1.31234 12.9713 2.54066 15.0185L4.25565 13.9895ZM2.12373 17.192L8.25199 11.0638L6.83778 9.64957L0.709519 15.7778L2.12373 17.192Z" fill="white"/>
                </svg>
            </button>
        </div>
        <div className="output">
            {qr && <>
				<img src={qr} />
				{/* <a href={qr} download="qrcode.png">Download</a> */}
                <a className="download-btn" href={qr} download="qrcode.png">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
                            <path d="M1 19H13M7 1L7 15M7 15L12 10M7 15L2 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span>Download</span>
                </a>
			</>}
        </div>
        </>
    );
}

export default QRGenerator;