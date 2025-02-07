import React from 'react'

function TopBanner(data: any) {
    let bannerData = data.sectionDetails.topBanner;
    return (
        <>
            <div className='pageTopBanner' style={{ backgroundImage: `url(${bannerData.backgroundImage})` }}>
                <div className='overlay d-flex justify-content-center align-items-center'>
                    <div style={{ maxWidth: '1200px', width: '100%' }} className='ml-auto mr-auto'>
                        <div className=' d-flex justify-content-center' >
                            <div className='mx-2'>
                                <h1 className='font-bold text-white mb-1 d-flex justify-content-center text-center'>{bannerData.heading}</h1>
                                <p className='text-white text-base mb-2 d-flex justify-content-center'>{bannerData.description}</p>
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

export default TopBanner
