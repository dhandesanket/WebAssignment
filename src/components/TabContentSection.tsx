import React, { useEffect, useState } from 'react'

function TabContentSection(data: any) {
    const [selectedSlug, setSelectedSlug] = useState('')
    const [col1Array, setCol1Array] = useState([])
    const [col1SubArray, setCol1SubArray] = useState([])
    const [col2Array, setCol2Array] = useState([])

    let sectionDetails = data.sectionDetails

    useEffect(() => {
        let data = sectionDetails.categoryCol1.mainCol.filter((data: any, i: number) => {
            return i === 0
        });
        let subData = sectionDetails.categoryCol1.subCol.filter((data: any, i: number) => {
            return data.categorySlug === sectionDetails.categoryCol1.mainCol[0].categorySlug
        });
        let col2Data = sectionDetails.categoryCol2.colList.filter((data: any, i: number) => {
            return data.categorySlug === sectionDetails.categoryCol1.mainCol[0].categorySlug
        });
        setSelectedSlug(sectionDetails.categoryCol1.mainCol[0].categorySlug)
        setCol1Array(data);
        setCol1SubArray(subData)
        setCol2Array(col2Data)
    }, [])

    function categoryClick(selectedSlug: any) {
        setSelectedSlug(selectedSlug)
        let data = sectionDetails.categoryCol1.mainCol.filter((data: any, i: number) => {
            return data.categorySlug === selectedSlug
        });
        let subData = sectionDetails.categoryCol1.subCol.filter((data: any, i: number) => {
            return data.categorySlug === selectedSlug
        });
        let col2Data = sectionDetails.categoryCol2.colList.filter((data: any, i: number) => {
            return data.categorySlug === selectedSlug
        });
        setCol1Array(data);
        setCol1SubArray(subData)
        setCol2Array(col2Data)
    }
    return (
        <>
            <div className=' d-flex gap-3 mb-4 flex-wrap'>
                {
                    sectionDetails.categoryList.map((data: any, index: number) => (
                        <span onClick={() => categoryClick(data.categorySlug)} className=' fw-bold cursor-pointer' key={index} style={selectedSlug === data.categorySlug ? {borderBottom: '1px solid black'} : {}}>{data.categoryName}</span>
                    ))
                }
            </div>
            <div className='row row-gap-5'>
                <div className='col-lg-7 col-md-12 col-12'>
                    <div className='row row-gap-2'>
                        <div className='col-sm-8'>
                            {
                                col1Array.map((item: any, index: number) => (
                                    <div key={index} className="card px-0">
                                        <div className='imageHeadingBackgrpound' style={{ backgroundImage: `url(${item.imageUrl})`, height: '190px' }}>
                                        </div>
                                        <div className="card-body p-2">
                                            <h5 className="card-title fw-bold">{item.heading}</h5>
                                            <p className="card-text text-muted" style={{ fontSize: '12px' }}>{item.description}</p>
                                            <a href={item.redirectUrl} className=" fw-bold border-bottom border-2 border-black" style={{ fontSize: '14px' }}>{item.redirectText}</a>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='col-sm-4'>
                            {
                                col1SubArray.map((item: any, index: number) => (
                                    <div key={index} className=' d-flex gap-1 align-items-start'>
                                        <div className='imageHeadingBackgrpound mb-4' style={{ backgroundImage: `url(${item.imageUrl})`, height: '60px', width: '80px' }}>
                                        </div>
                                        <div>
                                            <p className='mb-0 fw-bold' style={{ fontSize: '12px' }}>{item.heading}</p>
                                            <span style={{ fontSize: '10px' }} className=' text-muted'>{item.date}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='col-lg-5 col-md-12 col-12'>
                    {
                        col2Array.map((item: any, index: number) => (
                            <div key={index} className=' d-flex gap-1 align-items-start'>
                                <div className='imageHeadingBackgrpound mb-4' style={{ backgroundImage: `url(${item.imageUrl})`, height: '90px', width: '140px'}}>
                                </div>
                                <div>
                                    <p className='mb-0 fw-bold' style={{ fontSize: '12px' }}>{item.heading}</p>
                                    <span style={{ fontSize: '10px' }} className=' text-muted'>{item.date}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default TabContentSection
