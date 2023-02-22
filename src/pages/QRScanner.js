// import React from "react";
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import './styles.css';

function QRScanner({onFileSelect}){
    const [data, setData] = useState('');
    const copyText = () => {
        navigator.clipboard.writeText(data);
    }
    // Upload Modal
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }
    const handleFileInput = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setModal(!modal);
    }
    return (
        <>
        {modal&&
        <div className="modal">
            <div className="overlay">
                <div className="modal-header">
                    <span>Upload Image</span>
                    <button className="close-btn" onClick={toggleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M13 13L1 1M13 1L1 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div className="modal-content">
                    <input type='file' accept="image/*" name='uploaded-image' onChange={handleFileInput}/>
                </div>
                <p>Bruh, I don't know which react library can be used to read QR code from images. I have accepted fate. Whatever</p>
            </div>
        </div>
        }
        <div className='top'>
            <p>QREM ENGINE V1.2</p>
            <div>
                <button className='upload-btn' onClick={toggleModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                        <path d="M11 14.3333L11 7.83334M11 7.83334L7.75 10M11 7.83334L14.25 10M1.25 3.50001V15.2C1.25 16.4135 1.25 17.0202 1.48615 17.4836C1.69388 17.8913 2.0251 18.2228 2.43278 18.4305C2.89626 18.6666 3.50343 18.6667 4.71688 18.6667H17.2835C18.497 18.6667 19.1033 18.6666 19.5668 18.4305C19.9745 18.2228 20.3064 17.8913 20.5141 17.4836C20.7502 17.0202 20.7502 16.4134 20.7502 15.2L20.7502 6.9667C20.7502 5.75325 20.7502 5.14653 20.5141 4.68305C20.3064 4.27537 19.9745 3.94389 19.5668 3.73616C19.1033 3.50001 18.4968 3.50001 17.2833 3.50001H1.25ZM1.25 3.50001C1.25 2.30339 2.22005 1.33334 3.41667 1.33334H7.39739C7.92734 1.33334 8.19262 1.33334 8.44198 1.39321C8.66306 1.44628 8.87434 1.53385 9.0682 1.65264C9.28685 1.78663 9.47423 1.97398 9.84896 2.3487L11.0003 3.50001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
        <QrReader className="camera-frame" onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }
          if (!!error) {
            console.info(error);
          }
        }}/>
        <div className='bottom'>
            <span className='data-wrapper'>
                {data&&<a href={data} target='_blank'>{data}</a>}
            </span>
            <button className='copy-btn' onClick={copyText}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M14.25 14.25H17.2833C18.4968 14.25 19.1033 14.25 19.5668 14.0138C19.9745 13.8061 20.3064 13.4747 20.5141 13.067C20.7502 12.6036 20.7502 11.9968 20.7502 10.7834V4.71669C20.7502 3.50325 20.7502 2.89652 20.5141 2.43304C20.3064 2.02536 19.9745 1.69388 19.5668 1.48615C19.1033 1.25 18.497 1.25 17.2835 1.25H11.2169C10.0034 1.25 9.39626 1.25 8.93278 1.48615C8.5251 1.69388 8.19388 2.02536 7.98615 2.43304C7.75 2.89652 7.75 3.5033 7.75 4.71675V7.75008M1.25 17.2834V11.2167C1.25 10.0033 1.25 9.39652 1.48615 8.93304C1.69388 8.52536 2.0251 8.19388 2.43278 7.98615C2.89626 7.75 3.50343 7.75 4.71688 7.75H10.7835C11.997 7.75 12.6033 7.75 13.0668 7.98615C13.4745 8.19388 13.8064 8.52536 14.0141 8.93304C14.2502 9.39652 14.2502 10.0032 14.2502 11.2167V17.2834C14.2502 18.4968 14.2502 19.1036 14.0141 19.567C13.8064 19.9747 13.4745 20.3061 13.0668 20.5138C12.6033 20.75 11.997 20.75 10.7835 20.75H4.71688C3.50343 20.75 2.89626 20.75 2.43278 20.5138C2.0251 20.3061 1.69388 19.9747 1.48615 19.567C1.25 19.1036 1.25 18.4969 1.25 17.2834Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        </>
    );
}

export default QRScanner;