import React from 'react'

function MiddleBanner(data: any) {
    let bannerData = data.sectionDetails;
    return (
        <>
            <div className='pageMiddleBanner' style={{ backgroundImage: `url(${bannerData.backgroundImage})` }}>
                <div className='overlayMiddleBanner d-flex justify-content-center align-items-center'>
                    <div style={{ maxWidth: '1200px', width: '100%' }} className='ml-auto mr-auto'>
                        <div className=' d-flex justify-content-center' >
                            <div className='mx-2'>
                                <div className=' text-center'>
                                    <span className=' bg-white p-1 rounded-1 bg-opacity-25 text-white'>{bannerData.tabHeading}</span>
                                </div>
                                <h1 className='font-bold text-white mb-1 d-flex justify-content-center text-center'>{bannerData.heading}</h1>
                                <p className='text-white text-base mb-2 d-flex justify-content-center text-center'>{bannerData.description}</p>
                                <div className='d-flex justify-content-center'>
                                    <a className='globalButton' href={bannerData.btnUrl} target={`${bannerData.openInNewTab ? '_blank' : ''}`}>{bannerData.btnText}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MiddleBanner
