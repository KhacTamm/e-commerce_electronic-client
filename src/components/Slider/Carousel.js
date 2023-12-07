import React from 'react'
import './Carousel.css'

function Carousel() {
    return (
        <section id="carousel">
            <div className="carousel">
                <div className="carousel-left">
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="0"
                                class="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/iPhone_12_690x300_copyssspng.png"></img>
                                <div class="carousel-caption d-none d-md-block">
                                    {/* <h5>First slide label</h5> */}
                                    {/* <p>Some representative placeholder content for the first slide.</p> */}
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/11lite-690-300-max.png"></img>
                                <div class="carousel-caption d-none d-md-block">
                                    {/* <h5>Second slide label</h5> */}
                                    {/* <p>Some representative placeholder content for the second slide.</p> */}
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/RB_S21.png"></img>
                                <div class="carousel-caption d-none d-md-block">
                                    {/* <h5>Third slide label</h5> */}
                                    {/* <p>Some representative placeholder content for the third slide.</p> */}
                                </div>
                            </div>
                        </div>
                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="carousel-right">
                    <div className="carousel-right-item">
                        <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/RB_S21.png"></img>
                    </div>
                    <div className="carousel-right-item">
                        <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/iPhone_12_690x300_copyssspng.png"></img>
                    </div>
                    <div className="carousel-right-item">
                        <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/11lite-690-300-max.png"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carousel
