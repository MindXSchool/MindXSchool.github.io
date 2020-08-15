const compoments = {};
compoments.homeScreen =`
<div class="describe-game-container">
        <header>
            <div class="header-info">
                <div class="a-box">
                    <a href="#">THƯ VIỆN GAME</a>
                    <a href="#">COSPLAY</a>
                    <a href="#">VIDEO</a>
                </div>
                <form id="search">
                    <input id="background-input" type="text" name = "search" placeholder=" Nhập từ khoá tìm kiếm">
                    <button type="submit" class="cursor"><i class="fas fa-search"></i></button>
                </form>
                <div class="login">
                    <button class="btn cursor">Đăng nhập</button>
                </div>
            </div>
            <div class="header-setting"></div>
        </header>
        <div id="space"></div>

        <div class="aside-mid">
            <div class="site-url">
                <a href="#"><i class="fas fa-home"></i>Trang chủ</a>
                <a href="#">Esport</a>
                CS:GO
            </div>
            <div class="evaluate-game">
                <div class="game-description">
                    <div class="title-game-vote">
                        <img style="height: 100%;" src="http://media.game8.vn/Media/files/cs-go-ava.png.60.60.cache"
                            alt="Not Found">
                        <div class="flex">
                            <h1>CS:GO</h1>
                            <div>danh mục: Esports</div>
                            <div>thể loại: FPS</div>
                        </div>
                    </div>
                    <div class="history">
                        <p>bối cảnh:Chiến tranh</p>
                        <p>nhà phát hành :Valve</p>
                    </div>
                    <div class="evaluate-star">
                        <div class="star">
                            <p>đánh giá game</p>
                            <div class="red-star">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i id="white-star" class="fa fa-star"></i>
                            </div>
                        </div>
                        <div id="number">7.0</div>
                        <!-- <i class="fa fa-star"></i> -->
                    </div>
                </div>


                <div class="icon-evaluate">
                    <div class="face-book btn cursor">Fanpage</div>
                    <div class="down-load btn cursor">Tải game</div>
                </div>
            </div>


            <div class="trailer">
                <iframe width="100%" height="600px" style="padding: 0px 15px;"
                    src="https://www.youtube.com/embed/edYCtaNueQY" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <div class="introduce-game">
                <p style="padding: 0 15px;">
                    <span style="font-weight: 900; font-size: 25px;">Giới thiệu</span> <br> <br>
                    Counter-Strike: Global Offensive (CS:GO) được phát hành trên hệ thống steam vào ngày 21 tháng 8 năm
                    2012, đây là phiên bản thứ 4 của dòng game nổi tiếng Counter-Strike. Tựa game này mang phong cách
                    bắn súng góc nhìn thứ nhất mang tính thực tế, được phát triển bởi Valve và Hidden Path
                    Entertainment. <br> <br>

                    Counter-Strike: Global Offensive vốn được phát triển từ người tiền nhiệm Half life Counter-Strike
                    (CS) được phát hành vào 19 tháng 6 năm 1999. Chán chê cảnh chơi một mình, Modder Minh Lê đã giới
                    thiệu người chơi bản mod có chức năng chơi mạng Lan và được truyền tay nhau mạnh mẽ thời gian đó.
                    Thấy được tiềm năng của tựa game này, Valve đã tuyển dụng Minh Lê về làm việc cho mình và phát triển
                    Counter Strike thành một tựa game độc lập chính thức phần chơi qua mạng Lan. <br> <br>

                    Counter-Strike: Global Offensive là thành viên thứ tư trong gia đình của dòng game này và đồng thời
                    cũng là tựa game thành công nhất bởi lối chơi gây nghiện cùng giá trị cao. Hiện nay, các mùa giải
                    của CS:GO vẫn được diễn ra hằng năm và thu hút một lượng người quan tâm khổng lồ trên toàn thế giới.
                </p>
            </div>
            <div class="line"></div>
            <div class="esport-new">TIN TỨC MỚI</div>
            <div class="line"></div>
            <br> <br>

            <div class="sub-list">
                <div class="news">
                    <div class="hover-scale">
                        <img style="max-width: 200px; height: auto;" src="../img/faze-clan.jpg" alt="Not Found">
                    </div>
                    <div class="new-content">
                        <strong class="hover-red cursor" style="font-size: 30px;">FaZe Clan được cho là sẽ thay thế
                            Bymas bằng Kjearbye</strong>
                        <h2 style="font-size: 18px;">break 08/08/2020 17:17</h2>
                        <p>Theo những nguồn tin chưa chính thức được đồn đoán mới đây, FaZe nhiều khả năng sẽ thay thế
                            tài năng trẻ Bymas bằng Kjearbye trong đội hình c...</p>
                    </div>
                </div>

                <div class="news">
                    <div class="hover-scale">
                        <img style="max-width: 200px; height: auto;" src="../img/skin-csgo-dat-thumb.jpg"
                            alt="Not Found">
                    </div>
                    <div class="new-content">
                        <strong class="hover-red cursor" style="font-size: 30px;">Xuất hiện skin đắt nhất lịch sử CS:GO
                            với giá trị không tưởng gần 3 tỷ đồng</strong>
                        <h2 style="font-size: 18px;">HNAQ 14/07/2020 10:39</h2>
                        <p>Không phải là skin dao hay AWP - Dragon Lore, M4A4 Howl dưới đây mới chính là skin đắt nhất
                            hiện tại...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;