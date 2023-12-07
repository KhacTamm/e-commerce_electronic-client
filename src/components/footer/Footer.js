import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'
import images from '../../assets'

import './Footer.css'

function Footer(props) {
    return (
        // <section id="footer">
        //     <div className="footer">
        //         <div className="footer-top">
        //             <div className="footer-top-name">
        //                 <h2>cellphones</h2>
        //             </div>
        //             <div className="footer-top-about">
        //                 <h2>about</h2>
        //                 <ul>
        //                     <li>
        //                         <a>Về Chúng Tôi</a>
        //                     </li>
        //                     <li>
        //                         <a>Blog</a>
        //                     </li>
        //                     <li>
        //                         <a>Cơ Hội Nghề Nghiệp</a>
        //                     </li>
        //                     <li>
        //                         <a>Cửa Hàng</a>
        //                     </li>
        //                     <li>
        //                         <a>
        //                             <img src="https://theme.hstatic.net/1000075078/1000610097/14/gov.png?v=664"></img>
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="footer-top-sp">
        //                 <h2>Hổ trợ - Liên hệ</h2>
        //                 <p>Hổ trợ: 028.71.087.088 (07:00-21:00)</p>
        //                 <p>Vận chuyển: 1800 6936 (07:00-21:00)</p>
        //             </div>
        //             <div className="footer-top-delivery">
        //                 <h2>Đơn vị vận chuyển</h2>
        //                 <ul>
        //                     <li>
        //                         <a>Vận chuyển nhanh</a>
        //                     </li>
        //                     <li>
        //                         <a>Giao hàng tiết kiệm </a>
        //                     </li>
        //                     <li>
        //                         <a>Giao hàng hỏa tốc</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //         <div className="footer-bot">
        //             <p>Copyright © 2023 niên luận ngành kỹ thuật phần mềm. All rights reserved.</p>
        //         </div>
        //     </div>
        // </section>
        <footer>
            <div className="cl1">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <h2 className="text-white mb-4">Liên hệ với chúng tôi</h2>
                            <div className="footer-links d-flex flex-column">
                                <address className="text-white py-2 mb-1">
                                    Đại học Cần Thơ - Khu II, Đ.3/2, Q. Ninh Kiều, TP. Cần Thơ
                                </address>
                                <a className="mt-3 d-block mb-3 footer-text" href="tel: +91-987654321">
                                    +(84) 3456789977
                                </a>
                                <a href="mailto:bate@gmail.com" className="footer-text py-2 mb-2">
                                    bate@gmail.com
                                </a>
                              
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
                                {/* <Link className="footer-text py-2 mb-1" to="">
                                    Terms Of Service
                                </Link>
                                <Link className="footer-text py-2 mb-1" to="">
                                    Blogs
                                </Link> */}
                            </div>
                        </div>
                        <div className="col-3">
                            <h2 className="text-white mb-4">Liên kết nhanh</h2>
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
                        <div className="col-3">
                            <h2 className="text-white mb-4">Kết nối với Ba-Tê Shop</h2>
                            <div className="social_icons d-flex align-items-center gap">
                                    <a className="footer-text icon" href="#">
                                        <BsLinkedin />
                                    </a>
                                    <a className="footer-text icon" href="#">
                                        <BsYoutube />
                                    </a>
                                    <a className="footer-text icon" href="#">
                                        <BsInstagram />
                                    </a>
                                    <a className="footer-text icon" href="#">
                                        <BsGithub />
                                    </a>
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
