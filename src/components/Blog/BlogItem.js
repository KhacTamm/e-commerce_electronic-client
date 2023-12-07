import './BlogItem.css'
import React from 'react'
import images from '../../assets'
// import imgvd1 from '../../assets/images/catbanner-01.jpg'
// import imgvd2 from '../../assets/images/catbanner-02.jpg'
// import imgvd3 from '../../assets/images/catbanner-03.jpg'
// import imgvd4 from '../../assets/images/catbanner-04.jpg'

function BlogItem() {
    return (
        <div className="blogItem">
            <div className="blogIT_title">
                <div class="row">
                    <div class="blog_item">
                        <img className="imgBogIT" src={'	https://cellphones.com.vn/sforum/wp-content/uploads/2023/04/cach-ket-noi-dong-ho-thong-minh.jpg'}></img>
                        <div className="title_imgBogIT">
                        Cách kết nối đồng hồ thông minh nhanh chóng và dễ hiểu nhất
                        </div>
                    </div>
                    &nbsp;
                    <div class="blog_item ">
                        <img className="imgBogIT" src={'https://cellphones.com.vn/sforum/wp-content/uploads/2023/04/cach-doi-mat-khau-dien-thoai-vivo-bg.jpg'}></img>
                        <div className="title_imgBogIT">Hướng dẫn cách đổi mật khẩu điện thoại Vivo trong vòng một nốt nhạc</div>
                    </div>
                    &nbsp;
                    <div class="blog_item ">
                        <img className="imgBogIT" src={'https://cellphones.com.vn/sforum/wp-content/uploads/2023/04/cach-quay-man-hinh-vivo-bg.jpg'}></img>
                        <div className="title_imgBogIT">Hướng dẫn chi tiết cách quay màn hình Vivo siêu đơn giản, bỏ túi ngay!</div>
                    </div>
                    &nbsp;
                    <div class="blog_item ">
                        <img className="imgBogIT" src={'https://cellphones.com.vn/sforum/wp-content/uploads/2023/04/slug-review-dong-ho-garmin-2.jpg'}></img>
                        <div className="title_imgBogIT">Review đồng hồ Garmin - Bác sĩ tại gia giúp bạn theo dõi sức khỏe hiệu quả</div>
                    </div>
                    &nbsp;
                </div>
            </div>
        </div>
    )
}

export default BlogItem
