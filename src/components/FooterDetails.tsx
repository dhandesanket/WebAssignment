import React from 'react'

function FooterDetails() {
    return (
        <div className=' bg-black p-4'>
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12">
                    <div className="mb-4 mt-4">
                        <p className="psg white-color mb-0 text-white">Designed & Developed by   XP DESIGN</p>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12 d-flex align-items-center justify-content-center">
                    <div className="d-flex justify-content-end align-items-center gap-4">
                        <div className=' d-block '><div>
                            <img src="/assets/icons/facebook.png" width='20px' /></div>
                            <div><span className="text-white">29</span></div>
                        </div>
                        <div className=' d-block '><div>
                            <img src="/assets/icons/twitter.png" width='20px' /></div>
                            <div><span className="text-white">70k</span></div>
                        </div>
                        <div className=' d-block '><div>
                            <img src="/assets/icons/instagram.png" width='20px' /></div>
                            <div><span className="text-white">40</span></div>
                        </div>
                        <div className=' d-block '><div>
                            <img src="/assets/icons/pinterest.png" width='20px' /></div>
                            <div><span className="text-white">13k</span></div>
                        </div>
                        <div className=' d-block '><div>
                            <img src="/assets/icons/pinterest.png" width='20px' /></div>
                            <div><span className="text-white">168k</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterDetails
