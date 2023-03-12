
import React from 'react';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';


function Footer() {
    return (
        <MDBFooter bgColor='dark' className='text-center text-lg-start border-top w-100'>
            <section className='d-flex justify-content-end p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span className="color-w" >Connect and follow me on my social networks:</span>
                </div>

                <div>
                    <a href='https://www.facebook.com/miklos.petronia' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='facebook' />
                    </a>
                    <a href='https://twitter.com/MiklosPetronia' className='me-4 text-reset '>
                        <MDBIcon color='secondary' fab icon='twitter' />
                    </a>
                    <a href='mailto:miklos.petronia@gmail.com' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='google' />
                    </a>
                    <a href='https://www.instagram.com/miklospetronia/' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='instagram' />
                    </a>
                    <a href='https://www.linkedin.com/in/miklos-petronia-2b60618a/' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='linkedin' />
                    </a>
                    <a href='https://github.com/miklos-petronia' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='github' />
                    </a>
                </div>
            </section>


        </MDBFooter>
    );
}

export default Footer;