import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'
import images from '../../assets'

import './Footer.css'

function Footer(props) {
    return (
        <footer>
            <div className="cl1">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h2 className="text-white mb-4">Contact Us</h2>
                            <div className="footer-links d-flex flex-column">
                                <address className="text-white py-2 mb-1">
                                    No 1259 Freedom, New York, 1111 <br /> United States
                                </address>
                                <a className="mt-3 d-block mb-3 footer-text" href="tel: +91-987654321">
                                    +91-987654321
                                </a>
                                <a href="mailto:demo@gmail.com" className="footer-text py-2 mb-2">
                                    demo@gmail.com
                                </a>
                                <div className="social_icons d-flex align-items-center gap-20">
                                    <a className="footer-text fs-3" href="#">
                                        <BsLinkedin />
                                    </a>
                                    <a className="footer-text fs-3" href="#">
                                        <BsInstagram />
                                    </a>
                                    <a className="footer-text fs-3" href="#">
                                        <BsGithub />
                                    </a>
                                    <a className="footer-text fs-3" href="#">
                                        <BsYoutube />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h2 className="text-white mb-4">Hỗ trợ khách hàng</h2>
                            <div className="footer-links d-flex flex-column">
                                <Link className="footer-text py-2 mb-1" to="">
                                    CHÍNH SÁCH VẬN CHUYỂN
                                </Link>
                                <Link className="footer-text py-2 mb-1" to="">
                                    CHÍNH SÁCH ĐỔI TRẢ
                                </Link>
                                <Link className="footer-text py-2 mb-1" to="">
                                    PHƯƠNG THỨC THANH TOÁN
                                </Link>
                                <Link className="footer-text py-2 mb-1" to="">
                                    Terms Of Service
                                </Link>
                                <Link className="footer-text py-2 mb-1" to="">
                                    Blogs
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h2 className="text-white mb-4">Account</h2>
                            <div className="footer-links d-flex flex-column">
                                <Link className="footer-text py-2 mb-1" to="">
                                    Search
                                </Link>
                                <Link className="footer-text py-2 mb-1" to="">
                                    About Us
                                </Link>
                                <Link className="footer-text py-2 mb-1" to="">
                                    Faq
                                </Link>
                                <Link className="footer-text py-2 mb-1" to="">
                                    Contact
                                </Link>
                                <Link className="footer-text py-2 mb-1" to="">
                                    Size Chart
                                </Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h2 className="text-white mb-4">Quick Link</h2>
                            <div className="footer-links d-flex flex-column">
                                <Link className="footer-text py-2 mb-1" to="">
                                    Laptops
                                </Link>
                                <Link className="footer-text py-2 mb-1" to="">
                                    Headphone
                                </Link>
                                <Link className="footer-text py-2 mb-1" to="">
                                    Tablet
                                </Link>
                                <Link className="footer-text py-2 mb-1" to="">
                                    Watch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">
                                &copy; {new Date().getFullYear()}: Powered by Developer's Conner
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
