import React from 'react'

const Features = () => {
    return (
        <div className="container-fluid bg-light">
            <div className="section-heading text-center">
                <h1>Why choose us</h1>
            </div>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" id='card-img1'>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="me-auto">
                                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                                </li>
                                <li className="d-flex align-items-center me-3">
                                    <svg className="bi me-2" width="1em" height="1em"></svg>
                                    <small>Earth</small>
                                </li>
                                <li className="d-flex align-items-center">
                                    <svg className="bi me-2" width="1em" height="1em"></svg>
                                    <small>3d</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" id='card-img2'>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="me-auto">
                                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                                </li>
                                <li className="d-flex align-items-center me-3">
                                    <svg className="bi me-2" width="1em" height="1em"></svg>
                                    <small>Pakistan</small>
                                </li>
                                <li className="d-flex align-items-center">
                                    <svg className="bi me-2" width="1em" height="1em"></svg>
                                    <small>4d</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" id='card-img3'>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h2>
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="me-auto">
                                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                                </li>
                                <li className="d-flex align-items-center me-3">
                                    <svg className="bi me-2" width="1em" height="1em"></svg>
                                    <small>California</small>
                                </li>
                                <li className="d-flex align-items-center">
                                    <svg className="bi me-2" width="1em" height="1em"></svg>
                                    <small>5d</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features