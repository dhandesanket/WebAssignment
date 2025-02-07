import React from 'react'

function ImageText(data: any) {
    let sectionDetails = data.sectionDetails
    return (
        <>
            <div>
                <h6 className=' fw-bold'>{sectionDetails.heading}</h6>
                <p className=''>{sectionDetails.description}</p>
                <div className="row ">
                    {
                        sectionDetails.imageList.map((data: any, index: number) => (
                            <div key={index} className='col-lg col-md-4 col-sm-6 col-12 m-2 imageHeadingBackgrpound' style={{ backgroundImage: `url(${data.imageUrl})`, height: '180px' }}>
                                <div className='overlayImageHeadingBackgrpound'>
                                    <span className=' text-white'>{data.imageHeading}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ImageText
