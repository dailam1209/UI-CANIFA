import imageFooter from "../../assets/imgFooter";

function Footer () {

    return (
        <div className="wrapper-footer">
            <div className="col col-1">
                <h3>CÔNG TY CỔ PHẦN CANIFA</h3>
                <p>Số ĐKKD: 0107574310, ngày cấp: 23/09/2016, Nơi cấp: Sở Kế hoạch và đầu tư Hà Nội</p>
                <p>Địa chỉ trụ sở tại số 688 Đường Quang Trung, Phường La Khê, Quận Hà Đông, Thành phố Hà Nội.</p>
                <p>Địa chỉ liên hệ: P301, tầng 3, tòa nhà GP Invest, số 170 La Thành, Phường Ô Chợ Dừa, Quận Đống Đa, Thành Phố Hà Nội.</p>
                <p>Điện thoại: +8424 - 7303.0222</p>
                <p>Fax: +8424 - 6277.6419</p>
                <p>Email: lamngocdai050920@gmail.com</p>
                <div className="foote-social">

                </div>
            </div>
            <div className="col col-2">
                <h3>Thương hiệu</h3>
                <ul>
                    <li>
                        <span>Tin tức</span>
                    </li>
                    <li>
                        <span>Tuyển dụng</span>
                    </li>
                    <li>
                        <span>Với cộng đồng</span>
                    </li>
                    <li>
                        <span>Hệ thống cửa hàng</span>
                    </li>
                    <li>
                        <span>Liên hệ</span>
                    </li>

                </ul>
            </div>
            <div className="col col-3">
                <h3>Hỗ trợ</h3>
                <ul>
                    <li>
                        <span>Hỏi đáp</span>
                    </li>
                    <li>
                        <span>Chính sách KHTT</span>
                    </li>
                    <li>
                        <span>Điều kiện - Điều khoản Chính sách KHTT</span>
                    </li>
                    <li>
                        <span>Gợi ý tìm size</span>
                    </li>
                    <li>
                        <span>Kiểm tra đơn hàng</span>
                    </li>
                    <li>
                        <span>Tra cứu điểm thẻ</span>
                    </li>
                    <li>
                        <span>Chính sách bảo mật thông tin KH</span>
                    </li>
                    

                </ul>
            </div>
            <div className="col col-4">
                <h3>Tải ứng dụng</h3>
                <div className="application"> 
                    <div className="bancode">
                        <img src={imageFooter.qr} alt="QR"></img>
                    </div>
                    <div className="apps">
                        <a href="https://apps.apple.com/vn/app/canifa/id1175895653">
                            <img src={imageFooter.appStore} alt="AppStore"></img>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.app.canifa&hl=en&pli=1">
                            <img src={imageFooter.ggPlay} alt="GGPlay"></img>
                        </a>
                    </div>
                </div>
                <div className="payment">
                    <h3>Phương thức thanh toán</h3>
                    <img src={imageFooter.pay} alt="payment"></img>
                </div>
            </div>

        </div>
    )
}

export default Footer;