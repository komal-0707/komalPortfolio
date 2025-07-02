import React from 'react'

const HeroSection = () => {
    const handleDownloadCV = () => {
        try {
            const link = document.createElement('a');
            link.href = '/assets/cv/Resume.pdf';
            link.download = 'Komal_Kathiriya.pdf';

            // Check if file exists
            fetch(link.href)
                .then(response => {
                    if (response.ok) {
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    } else {
                        alert('Sorry, the CV file is not available at the moment.');
                    }
                })
                .catch(error => {
                    console.error('Error downloading CV:', error);
                    alert('Sorry, there was an error downloading the CV.');
                });
        } catch (error) {
            console.error('Error in download handler:', error);
            alert('Sorry, there was an error processing your request.');
        }
    };

    return (
        <>
            <main className="site-content" id="content" >
                <section className="hero-section d-flex align-items-center" id="intro">
                    <div className="intro_text">
                        <svg viewBox="0 0 1320 300">
                            <text x="50%" y="50%" textAnchor="middle">
                                HI
                            </text>
                        </svg>
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="hero-content-box">
                                    <span className="hero-sub-title wow fadeInLeft" data-wow-delay="1.1s">I Am Komal Kathiriya</span>
                                    <h1 className="hero-title wow fadeInLeft" data-wow-delay="1.2s">
                                        Fultter App Developer
                                    </h1>

                                    <div className="hero-image-box d-md-none text-center wow fadeInRight" data-wow-delay="1.3s">
                                        <img src="assets/img/hero/mira.jpeg" alt="" />
                                    </div>

                                    <p className="lead wow fadeInLeft" data-wow-delay="1.4s">
                                        Welcome to my portfolio! Here, you'll find a showcase of my work, skills, and professional experiences.
                                        My portfolio is a reflection of my journey, highlighting the projects I've undertaken.
                                    </p>
                                    <div className="button-box d-flex flex-wrap align-items-center">
                                        <button
                                            onClick={handleDownloadCV}
                                            className="btn tj-btn-secondary wow fadeInLeft"
                                            data-wow-delay="1.5s"
                                        >
                                            Download CV
                                        </button>
                                        <ul className="ul-reset social-icons wow fadeInLeft" data-wow-delay="1.6s">
                                            <li><a href="https://web.whatsapp.com/"><i className="fa-brands fa-whatsapp"></i></a></li>
                                            <li><a href="https://www.linkedin.com/in/komal-kathiriya-943aaa239/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                            {/* <li><a href="#"><i className="fa-brands fa-github"></i></a></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-none d-md-block">
                                <div className="hero-image-box text-center wow fadeInRight" data-wow-delay="1.5s">
                                    {/* <img src="assets/img/hero/meera.jpg" alt="" /> */}
                                    {/* <img className='h-32' src="assets/img/hero/mira.jpeg" alt="" /> */}
                                    <img
                                        className="w-32 h-32 md:w-48 md:h-48 mx-auto object-cover"
                                        src="assets/img/hero/komal.jpeg"
                                        alt="Komal"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default HeroSection
