import React from 'react'
import img1 from '../Assets/images/fabio-consilvio-UZOX38sxdos-unsplash.jpg'
import img2 from '../Assets/images/ivan-diaz-ljoHHq7l5cg-unsplash.jpg'
import img3 from '../Assets/images/janita-sumeiko-ZK1WQDMQvik-unsplash.jpg'

export default function pakages() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col d-flex">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={img1} style={{ height: "300px" }} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={img2} style={{ height: "300px" }} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={img3} style={{ height: "300px" }} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={img3} style={{ height: "300px" }} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={img1} style={{ height: "300px" }} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={img2} style={{ height: "300px" }} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
