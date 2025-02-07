import React from 'react'

function CardImageContent(data: any) {
    let sectionDetails = data.sectionDetails
    return (
        <>
            <div className="blog-social-icons d-flex justify-content-end align-items-center gap-2 mb-4">
                <a href="#"><img src="/assets/icons/facebook.png" width='20px' /><span>3.7 M</span></a>
                <a href="#"><img src="/assets/icons/twitter.png" width='20px' /><span>2.4 M</span></a>
                <a href="#"><img src="/assets/icons/instagram.png" width='20px' /><span>3.7 M</span></a>
                <a href="#"><img src="/assets/icons/pinterest.png" width='20px' /><span>2.4 M</span></a>
            </div>
            <div className='row d-flex justify-content-between'>
                {
                    sectionDetails.map((data: any, index: number) => (
                        <div key={index} className="col-md-3 col-sm-12 col-12 card px-0 m-1" style={{ width: '25rem' }}>
                            <div className='imageHeadingBackgrpound' style={{ backgroundImage: `url(${data.imageUrl})`, height: '200px' }}>
                                <div className='overlayImageText'>
                                    <div className='imageText d-flex align-items-center justify-content-between p-2 w-100'>
                                        <div className=' d-flex gap-2'><span style={{ fontSize: '12px' }} className='bg-white p-1 rounded-1 bg-opacity-25 text-white'>{data.imageTextOne}</span>
                                            <span style={{ fontSize: '12px' }} className=' bg-white p-1 rounded-1 bg-opacity-25 text-white'>{data.imageTextTwo}</span>
                                        </div>
                                        <div className='bg-white  bg-opacity-25 rounded-circle'>
                                            <span className='text-white'><img src={data.iconUrl} style={data.iconUrl === '/assets/svg/image-svgrepo-com.svg' ? { width: '25px', padding: '2px' } : { width: '25px', padding: '8px' }} /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-2">
                                <h5 className="card-title fw-bold">{data.contentHeading}</h5>
                                <div className='d-flex gap-1 align-items-center justify-content-between mb-2'>
                                    <div className=' d-flex align-items-center gap-1'>
                                        <div className='imageHeadingBackgrpound rounded-circle' style={{ backgroundImage: `url(${data.userImage})`, height: '25px', width: '25px' }}></div>
                                        <span className='fw-bold' style={{ fontSize: '12px' }} >{data.userName}</span>
                                    </div>
                                    <div className=' d-flex align-items-center'>
                                        <span style={{ fontSize: '12px' }} className=' text-muted'>{data.date}</span>
                                    </div>
                                    <div className=' d-flex align-items-center'>
                                        <img src="/assets/svg/share-svgrepo-com.svg" height='10px' width='10px' />
                                        <span style={{ fontSize: '12px' }} className=' text-muted'>{data.shareCount}</span>
                                    </div>
                                </div>
                                <p className="card-text text-muted" style={{ fontSize: '12px' }}>{data.description}</p>
                                <a href={data.redirectUrl} className=" fw-bold border-bottom border-2 border-black" style={{ fontSize: '14px' }}>{data.redirectText}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <a className='globalButton border border-black'>Load More</a>
            </div>
        </>
    )
}

export default CardImageContent
