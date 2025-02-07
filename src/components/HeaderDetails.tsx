import React, { useEffect, useRef, useState } from 'react'

function HeaderDetails(data: any) {
    const [isScrolled, setIsScrolled] = useState(false);
    let headerData = data.sectionDetails
    const drawerRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => setIsOpen(!isOpen);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header className='main-header' style={{ backgroundColor: isScrolled ? '#262626' : '' }}>
                <div className='auto-container d-none d-xl-block'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className=' text-white d-flex align-items-center'>
                            <img width='200px' src={headerData.logoImgUrl} />
                        </div>
                        <div className=' text-white d-flex align-items-center gap-4'>
                            {
                                headerData.menuTitles.map((data: any, index: number) => (
                                    <span className='p' key={index}>{data.MenuHeading}</span>
                                ))
                            }
                        </div>
                        <div className=' d-flex'>
                            <img src="/assets/svg/search-alt-1-svgrepo-com.svg" style={{ width: '35px', padding: '8px' }} />
                            <div className='d-flex justify-content-center align-items-center'>
                                <a className='menuButton'>{headerData.btnText}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-white dg-block d-xl-none'>
                    <div className='d-flex justify-content-between align-items-center px-2'>
                        <div className=' text-white d-flex align-items-center'>
                            <img width='180px' src={headerData.logoImgUrl} />
                        </div>
                        <div className=' text-white d-flex align-items-center' onClick={toggleDrawer}>
                            <img width='30px' src='/assets/svg/menu-symbol-of-three-parallel-lines-svgrepo-com.svg' />
                        </div>
                    </div>
                </div>
                <div ref={drawerRef}
  className={`d-block d-xl-none position-fixed top-0 end-0 bg-dark text-white h-100`}
  style={{
    width: '16rem', 
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out'
  }}
>
  <div className="p-4">
    <div className='d-flex justify-content-end'>
      <span
        onClick={toggleDrawer}
        className="bg-white rounded-circle cursor-pointer"
      >
        <img src="/assets/svg/close-sm-svgrepo-com.svg" height='35px' width='35px' />
      </span>
    </div>
    {/* <h2 className="text-lg font-bold">Right Drawer</h2>
    <p>This is a sliding drawer.</p> */}
    {headerData.menuTitles.map((item: any, index: any) => (
        <a key={index} className='' href={item.MenuHeadingUrl}><p  className='ps-2 py-2 px-0 rounded bg-secondary text-white mt-2 fw-bold'>{item.MenuHeading}</p></a>
    ))}
  </div>
</div>

            </header>
        </>
    )
}

export default HeaderDetails
