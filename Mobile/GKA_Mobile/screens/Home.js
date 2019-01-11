import React, { Component } from 'react';
import {Animated, View, Text , ScrollView, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import Swiper from 'react-native-swiper';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      isHiddenFilm1: false,
      isHiddenFilm2: false,
    }
  }

  showFilm1 = () =>{
    this.setState({
      isHiddenFilm2: false,
      isHiddenFilm1: true,
    });
  }

  showFilm2 = () =>{
    this.setState({
      isHiddenFilm1: false,
      isHiddenFilm2: true,
    });
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.navbar}>
          <View style={styles.logo}>
            <Image style={styles.logoImg} source={require('../img/nav-logo-1.png')} resizeMode="contain"/>
          </View>
          <TouchableOpacity style={styles.menuBtn} onPress={
            () => {
              this.props.navigation.openDrawer();
            }
          }>
            <Image style={styles.menuIcon} source={require('../img/icon/menu.png')} resizeMode="contain"/>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.kv}>
            <Swiper style={styles.wrapper} 
                    showsButtons={true} 
                    horizontal={true} 
                    autoplay={true}
                    autoplayTimeout={8}
                    paginationStyle={styles.pagination}
                    dotStyle={styles.dot}
                    activeDotStyle={styles.activeDot}
                    dotColor={'white'}
                    activeDotColor={'#E88E20'}
                    nextButton={<Text style={styles.buttonText}>›</Text>}
                    prevButton={<Text style={styles.buttonText}>‹</Text>}
                    >
                    <View style={styles.slide}>
                        <View style={styles.banner}>
                          <View style={styles.bannerImg}>
                            <Image style={styles.image} source={require('../img/banner1.jpg')} resizeMode="stretch"/>
                          </View>
                        </View>
                        <View style={styles.infoContent}>
                          <View style={styles.blackBack}></View>
                          <View style={styles.topBlock}>
                            <Text style={[styles.title,styles.white]}>Nhìn lại Cánh diều vàng 2017</Text>
                            <Text style={[styles.text,styles.white]}>Theo nhận xét của giới chuyên môn, điện ảnh Việt Nam như đang được trẻ hóa. Nhiều bộ phim mang tính giải trí cao nhưng không còn là hài nhảm, 1/3 trong số các phim tham dự đều có chất lượng tốt và khá đồng đều. Những cái tên như Em chưa 18, Cô Ba Sài Gòn, Cô gái đến từ hôm qua… đều đạt kỷ lục doanh thu phòng vé trong thời gian vừa qua...</Text>
                          </View>
                          <View style={styles.bottomBlock}>
                            <TouchableOpacity style={styles.btn} onPress={()=>{this.props.navigation.navigate('News', null);}}>
                              <Text style={styles.btnText}>XEM THÊM</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.banner}>
                          <View style={styles.bannerImg}>
                            <Image style={styles.image} source={require('../img/banner3.jpg')} resizeMode="stretch"/>
                          </View>
                        </View>
                        <View style={styles.infoContent}>
                          <View style={styles.blackBack}></View>
                          <View style={styles.topBlock}>
                            <Text style={[styles.title,styles.white]}>Cánh diều vàng 2017: Điện ảnh Việt Nam như đang trẻ lại</Text>
                            <Text style={[styles.text,styles.white]}>NSND Đặng Nhật Minh, đạo diễn của những bộ phim nổi tiếng như "Bao giờ cho đến Tháng Mười", "Đừng đốt" cho rằng, điện ảnh Việt Nam như đang trẻ lại.</Text>
                            <Text style={[styles.text,styles.white]}>Theo ông, các phim giải trí năm nay tốt hơn những năm trước, không có phim hài nhảm. Tuy nhiên, tính giải trí chỉ dành cho khán giả trẻ chứ...</Text>
                          </View>
                          <View style={styles.bottomBlock}>
                            <TouchableOpacity style={styles.btn} onPress={()=>{this.props.navigation.navigate('News', null);}}>
                              <Text style={styles.btnText}>XEM THÊM</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.banner}>
                          <View style={styles.bannerImg}>
                            <Image style={styles.image} source={require('../img/banner5.jpg')} resizeMode="stretch"/>
                          </View>
                        </View>
                        <View style={styles.infoContent}>
                          <View style={styles.blackBack}></View>
                          <View style={styles.topBlock}>
                            <Text style={[styles.title,styles.white]}>Kim Tuyến bất ngờ nhận giải Cánh diều vàng</Text>
                            <Text style={[styles.text,styles.white]}>Tại Lễ trao giải Cánh diểu vàng 2015 diễn ra tại Hà Nội đêm 20/4,DVDA Kim Tuyến đã bất ngờ nhận được giải thưởng Nữ diễn viên phụ xuất sắc nhật với bộ phim Tuổi Thanh Xuân.</Text>
                            <Text style={[styles.text,styles.white]}>Tham gian trong Lễ trao giải,Kim Tuyến đã chọn chiếc đầm mằ trắng nhẹ nhàng và tinh khiết với kiểu dáng trẻ trung,sang trọng của NTK Chung Thanh Phong.</Text>
                          </View>
                          <View style={styles.bottomBlock}>
                            <TouchableOpacity style={styles.btn} onPress={()=>{this.props.navigation.navigate('News', null);}}>
                              <Text style={styles.btnText}>XEM THÊM</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                    </View>
            </Swiper>
          </View>
          <View style={styles.history}>
            <View style={styles.historyContent}>
                <Text style={[styles.title, styles.historyTitle]}>Lịch sử giải thưởng cánh diều vàng</Text>
                <Text style={styles.text}>
                    Giải thưởng Hội điện ảnh Việt Nam, có tên gọi là Cánh Diều Vàng (tiếng Anh: Golden Kites Awards) là một giải thưởng điện ảnh hàng năm của Hội Điện ảnh Việt Nam. 
                    Giải thưởng được trao vào khoảng tháng ba, cho những tác phẩm điện ảnh sản xuất trong năm trước đó. Giải được tổ chức lần đầu tiên là Cánh diều vàng 2002, diễn ra vào đầu 2003. 
                    Trong các hạng mục trao giải còn có Cánh diều bạc và Cánh diều đồng, tuy có những năm bị loại bỏ. Mặc dù là giải thưởng điện ảnh, Cách diều vàng còn trao cho cả các tác phẩm truyền hình và phim video.
                </Text>
                <Text style={styles.text}>
                    Thực chất Cánh diều vàng là một giải thưởng mang tính nội bộ nằm trong hệ thống giải thưởng chung của Hội Liên hiệp văn học nghệ thuật. 
                    Hội Liên hiệp văn học nghệ thuật gồm có bảy hội: văn học, âm nhạc, sân khấu, mỹ thuật, nhiếp ảnh, kiến trúc, điện ảnh. 
                    Nhằm khuyến khích các nghệ sĩ thông qua tác phẩm, hàng năm Chính phủ cấp kinh phí cho mỗi hội để trao giải thưởng. 
                    Giải của Hội Điện ảnh bắt đầu trao từ năm 1993.
                </Text>      
                <Text style={styles.text}>
                    Năm 2003, Hội Điện ảnh Việt Nam đặt tên cho giải của mình là Cánh diều vàng, và kết hợp cùng Đài Truyền hình Việt Nam đưa 
                    buổi lễ trao giải lên sóng truyền hình trực tiếp với sự hỗ trợ của các doanh nghiệp thông qua quảng cáo. 
                    Qua lịch sử của giải thưởng, nhiều hạng mục của giải được thay đổi. Ở giải Cánh diều vàng 2005, Cánh diều bạc và Cánh diều đồng bị bỏ bớt. 
                    Đến giải 2006, Cánh diều bạc được khôi phục và bằng khen thay cho Cánh diều đồng. Năm 2007, Hội Điện ảnh trao tặng thêm Cách diều bạc và hai giải phụ là 
                    Giải phim phục vụ khán giả đông nhất và Giải phim bán được nhiều vé nhất....
                </Text>
                <View style={styles.bottomBlock}>
                  <TouchableOpacity style={[styles.btn,styles.blackBtn]} onPress={()=>{this.props.navigation.navigate('History', null);}}>
                    <Text style={[styles.btnText,styles.black]}>XEM THÊM</Text>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={styles.historyImg}>
                <Image style={styles.image} source={require('../img/histoty-1.png')} resizeMode="stretch"/>
            </View>
          </View>
          <View style={styles.filmAwarded}>
              <Text style={[styles.title,styles.filmAwardedTitle]}>Thông tin các tác phẩm điện ảnh đạt giải</Text>
              <View style={styles.panelController}>
                <TouchableOpacity style={styles.panelControllerElement} onPress={this.showFilm1}>
                    <View style={styles.filmBanner}>
                        <Image style={[styles.image,styles.filmBannerImg]} source={require('../img/cbsg-logo.png')} resizeMode="stretch"/>
                    </View>
                    <View style={styles.awardArchieve}>
                        <View style={styles.awardImg}>
                            <Image style={styles.image} source={require('../img/film-award-logo-1.png')} resizeMode="stretch"/>
                        </View>
                        <View style={styles.awardName}>
                            <Text style={[styles.award, styles.gold]}>Cánh Diều Vàng</Text>
                            <Text style={[styles.category, styles.gold]}>Phim chiếu rạp</Text>
                            <Text style={[styles.sign,styles.gold]}>-----</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.panelControllerElement} onPress={this.showFilm2}>
                    <View style={styles.filmBanner}>
                        <Image style={[styles.image,styles.filmBannerImg]} source={require('../img/ec18-logo.png')} resizeMode="stretch"/>
                    </View>
                    <View style={styles.awardArchieve}>
                        <View style={styles.awardImg}>
                            <Image style={styles.image} source={require('../img/film-award-logo-2.png')} resizeMode="stretch"/>
                        </View>
                        <View style={styles.awardName}>
                            <Text style={[styles.award, styles.silver]}>Cánh Diều Bạc</Text>
                            <Text style={[styles.category, styles.silver]}>Phim chiếu rạp</Text>
                            <Text style={[styles.sign,styles.silver]}>-----</Text>
                        </View>
                    </View>
                </TouchableOpacity>
              </View>
              {this.state.isHiddenFilm1 && 
                <Animated.View style={{height: 300}}>
                    <ScrollView>
                      <Text style={[styles.titleFilm,styles.white]}>Cô Ba Sài Gòn</Text>
                      <Text style={[styles.awardFilm,styles.white]}>*---Cánh diều vàng - Phim chiếu rạp---*</Text>
                      <Text style={[styles.textFilm,styles.white]}>Cô Ba Sài Gòn (tựa tiếng Anh: The Tailor) là một bộ phim điện ảnh Việt Nam về đề tài thời trang mang yếu tố xuyên không kỳ ảo do Trần Bửu Lộc và Kay Nguyễn làm đạo diễn, Ngô Thanh Vân và Thủy Nguyễn đóng vai trò sản xuất, dựa theo phần kịch bản của A Type Machine. Phim có sự tham gia của các diễn viên Ninh Dương Lan Ngọc, NSND Hồng Vân, Diễm My, Ngô Thanh Vân, Diễm My 9x, S.T 365 và Oanh Kiều. Chủ đề chính của phim là tôn vinh áo dài, trang phục truyền thống của Việt Nam.</Text>
                      <Text style={[styles.textFilm,styles.white]}>Phim có buổi công chiếu đầu tiên trên toàn thế giới vào ngày 14 tháng 10 năm 2017 tại Liên hoan phim quốc tế Busan lần thứ 22 ở Hàn Quốc trước khi ra mắt công chúng Việt Nam vào ngày 10 tháng 11 cùng năm. Sau gần một tháng công chiếu, phim thu về hơn 60 tỷ đồng. Tại Liên hoan phim Việt Nam lần thứ 20, Cô Ba Sài Gòn giành hai giải, bao gồm Giải thưởng của Ban giám khảo.</Text>         
                      <Text style={[styles.textFilm,styles.white]}>Nội dung:</Text>
                      <Text style={[styles.textFilm,styles.white]}>Năm 1969, nhà may Thanh Nữ là nhà may áo dài nổi tiếng nhất Sài Gòn. Gia đình này 9 đời đều may áo dài. Bà chủ Thanh Mai có hai cô con gái: cô con gái ruột Như Ý và cô con gái nuôi Thanh Loan. Thanh Loan thích may áo dài nhưng Như Ý lại thích thiết kế đồ Tây, vì cô cho rằng áo dài đã quá xưa và chỉ có một kiểu. Bà Thanh Mai kêu Như Ý hãy học cách may áo dài nhưng cô không quan tâm, cô chỉ thích thiết kế đồ Tây. Một hôm bà Thanh Mai lấy tấm vải quý của gia tộc ra may thành chiếc áo dài cực kỳ đẹp, rồi để bên dưới nhà. Như Ý thấy chiếc áo dài đẹp quá (có đính tên Như Ý trên áo) nên lấy mặc thử. Một điều kỳ lạ đã xảy ra, khi cô mặc chiếc áo dài vào, miếng ngọc trên chiếc áo đã cuốn cô vào dòng thời gian, đưa cô đến năm 2017.</Text>
                      <Text style={[styles.textFilm,styles.white]}>Khi bà An Khánh (chính là hiện thân của Như Ý) đang chuẩn bị tự tử thì Như Ý rơi xuống, đẩy bà ấy ngã và rồi miếng ngọc trên áo bị văng mất. Như Ý ngạc nhiên khi thấy nhà may Thanh Nữ bị dỡ bỏ, nhà cửa tan hoang, không dám tin khi thấy chính mình trong tương lai, hoang mang và sợ hãi khi thấy Sài Gòn xưa của cô đã biến mất, thay vào đó là Sài Gòn 2017 văn minh hiện đại. Căn nhà trở nên hoang tàn, không còn náo nhiệt như ngày xưa. Bộ phim tiết lộ khi bà Thanh Mai mất, bà An Khánh đuổi Thanh Loan ra khỏi nhà để mở tiệm may đồ Tây, tuy nhiên lại sớm dẹp tiệm. Bà An Khánh trở thành kẻ thất bại và nghiện rượu. Thanh Loan ra ngoài mở một tiệm may áo dài, sau này cô sinh hai đứa con: Helen và Tuấn. Helen bây giờ đang là nhà thiết kế thời trang nổi tiếng, còn Tuấn đang làm ở công ty của Helen.</Text> 
                      <Text style={[styles.textFilm,styles.white]}>Helen đồng ý giúp bà An Khánh giữ lại căn nhà, đổi lại Như Ý phải làm nhân viên cho Helen. Như Ý làm lao công một thời gian, chính Tuấn giúp cho cô làm quen với cuộc sống hiện đại này. Đến khi công ty cần thiết kế mấy bộ đồ Tây của thập niên 1960, đúng với sở trường của mình, Như Ý đã giúp Helen thiết kế. Ấn tượng trước khả năng thiết kế của Như Ý, lần tiếp theo Helen giao cho Như Ý công việc thiết kế áo dài. Đây là một thử thách lớn đối với Như Ý, vì cô vốn ghét áo dài và không hề biết may áo dài. Nhưng cô cũng rất muốn thiết kế áo dài theo cách gia truyền của nhà may Thanh Nữ, điều này sẽ giúp nhà may Thanh Nữ có lại danh tiếng và sẽ được phục dựng trở lại.</Text>
                      <Text style={[styles.textFilm,styles.white]}>Bà An Khánh đến gặp bà Thanh Loan để xin lỗi và xin học cách may áo dài. Bà Thanh Loan đưa cho bà An Khánh một phong bì, trong đó là lá thư của bà Thanh Mai chỉ cách may áo dài. Bà An Khánh và Như Ý cùng nhau tập may áo dài.</Text>
                      <Text style={[styles.textFilm,styles.white]}>Đến ngày diễn ra sự kiện thời trang, người mẫu Trang Ngô cùng với những cô người mẫu khác trình diễn những chiếc áo dài do chính Như Ý thiết kế. Trong lúc buổi biểu diễn đang được tiếp tục, Helen có ý định thay đổi kịch bản để tên mình được vinh danh thay vì Như Ý nhưng bị Tuấn bắt được rồi yêu cầu cô sửa đổi kịch bản và suy nghĩ lại việc làm của cô. Cuối cùng, buổi biểu diễn rất thành công và Như Ý đứng lên phát biểu đôi lời, cô cũng gửi lời cám ơn đến Helen. Sau ngày hôm đó, nhà may Thanh Nữ được phục dựng trở lại.</Text>
                      <Text style={[styles.textFilm,styles.white]}>Như Ý mặc chiếc áo dài có miếng ngọc, miếng ngọc kỳ diệu đó lại cuốn cô vào dòng thời gian, đưa cô về lại năm 1969. Cô gặp lại bà Thanh Mai, cô ôm lấy mẹ mình rồi nói xin lỗi rồi nói với mẹ mình rằng mình đã biết may áo dài. Hai mẹ con sau đó mở nhạc lên và đứng nhảy.</Text>
                      <Text style={[styles.textFilm,styles.white]}>Trong đoạn cảnh hậu Danh đề, truyền nhân thứ 20 nhà may Thanh Nữ đi tham quan xung quanh nhà mình và có những câu cửa miệng rất giống Như Ý như "Ô la la" và cuối cùng nói "Hết rồi!" để kết thúc bộ phim.</Text>
                      <Text style={[styles.textFilm,styles.white]}>Đạo diễn: Trần Bửu Lộc, Kay Nguyễn</Text>
                      <Text style={[styles.textFilm,styles.white]}>Nhà sản xuất: Ngô Thanh Vân, Thủy Nguyễn</Text>
                      <Text style={[styles.textFilm,styles.white]}>Diễn viên: Ninh Dương Lan Ngọc, NSND Hồng Vân, Diễm My, Ngô Thanh Vân, Diễm My 9x, S.T 365, Oanh Kiều</Text>
                      <Text style={[styles.textFilm,styles.white]}>Doanh thu: 60 tỷ VND</Text>
                      <View style={styles.bottomBlock}>
                        <TouchableOpacity style={styles.btn} onPress={()=>{this.props.navigation.navigate('Film', null);}}>
                          <Text style={styles.btnText}>XEM THÊM</Text>
                        </TouchableOpacity>
                      </View>
                    </ScrollView>
                </Animated.View>}
                {this.state.isHiddenFilm2 && 
                <Animated.View style={{height: 300}}>
                    <ScrollView>
                      <Text style={[styles.titleFilm,styles.white]}>Em chưa 18</Text>
                      <Text style={[styles.awardFilm,styles.white]}>*---Cánh diều vàng - Phim chiếu rạp---*</Text>
                      <Text style={[styles.textFilm,styles.white]}>Em chưa 18 là bộ phim điện ảnh tình cảm hài hước Việt Nam của đạo diễn Lê Thanh Sơn thực hiện, do Charlie Nguyễn và hãng phim Chánh Phương sản xuất năm 2017. Phim có sự góp mặt của các diễn viên: Kiều Minh Tuấn, Kaity Nguyễn, Will 365, Quang Minh, Huy Khánh. Em chưa 18 được công chiếu vào ngày 28 tháng 04 năm 2017 tại các rạp trên toàn quốc.</Text>
                      <Text style={[styles.textFilm,styles.white]}>Em chưa 18 nhanh chóng trở thành phim có doanh thu phim Việt cao nhất mọi thời đại. Tại Liên hoan phim Việt Nam lần thứ 20, phim đoạt giải Bông Sen Vàng và diễn viên Kaity Nguyễn đoạt giải Nữ diễn viên chính xuất sắc.</Text>
                      <Text style={[styles.textFilm,styles.white]}>Nội dung phim:</Text>
                      <Text style={[styles.textFilm,styles.white]}>Hoàng là một người huấn luyện viên yoga, mà cũng là một tay chơi sát gái, thường qua đêm với các cô gái. Trớ trêu thay, một lần nọ Hoàng tán tỉnh và quan hệ với một cô bé chưa đủ 18 tuổi tên Linh Đan.Linh Đan đã quay lại đoạn clip đêm đó và bắt buộc Hoàng phải làm bạn trai của cô. Trước đây Linh Đan từng bị bạn trai trong trường phản bội, bây giờ cô muốn dùng Hoàng để chọc tức bạn trai cũ.Trong thời gian giả làm bạn trai mới của Linh Đan, Hoàng đã dạy yoga cho một nữ diễn viên tên Uyên Thi. Hoàng biết được kế hoạch của Linh Đan và la mắng cô. Tony - bạn trai cũ của Linh Đan vẫn đang vui vẻ bên cô hot girl Yến, chứ không hề bị đau khổ như Linh Đan nghĩ. Linh Đan khóc và đưa điện thoại cho Hoàng xóa cái clip. Cứ tưởng sẽ không gặp nhau nữa, nhưng Hoàng vẫn thường xuyên đưa đón Linh Đan đi học, chở Linh Đan đi chơi. Trong trường của Linh Đan sắp tổ chức một đêm vũ hội cuối năm, Tony đang là ứng cử viên nặng ký cho chức King, còn Linh Đan và Yến đang là ứng cử viên nặng ký cho chức Queen. Linh Đan nói với Hoàng rằng cô đã có thai, Hoàng liền kêu cô đi phá thai nhưng cô từ chối. Ông chủ của trung tâm yoga hốt hoảng khi nghe tin Hoàng đã làm cho một đứa con gái chưa đủ 18 tuổi có thai, nên đã đuổi việc Hoàng. Hoàng gọi điện cho ba và nghe ông tâm sự về quá khứ của ông, sau đó Hoàng suy nghĩ lại. Hoàng mua những món đồ dành cho em bé, rồi anh cầu hôn Linh Đan. Nhưng Linh Đan tiết lộ rằng cô không hề có thai và vào đêm hôm đó cô và Hoàng chưa xảy ra chuyện gì cả. Hoàng nhận ra mình đã yêu Linh Đan thật rồi, anh từ chối ngủ với Uyên Thi và chạy đến đêm vũ hội. Hoàng còn gọi điện kêu ba của Linh Đan chở cô đến vũ hội. Tại đây, Tony và Linh Đan đã giành được chức King và Queen. Tony bảo Linh Đan hãy đến với tình yêu thật sự của cô. Sau đó Hoàng và Linh Đan công khai tình cảm, rồi họ hôn nhau. Bộ phim kết thúc.</Text>
                      <Text style={[styles.textFilm,styles.white]}>Đạo diễn: Lê Thanh Sơn</Text>
                      <Text style={[styles.textFilm,styles.white]}>Nhà sản xuất: Charlie Nguyễn</Text>
                      <Text style={[styles.textFilm,styles.white]}>Diễn viên: Kiều Minh Tuấn, Kaity Nguyễn, Will 365, Châu Bùi, Quang Minh, Nguyễn Chánh Tín, Huy Khánh, Kathy Uyên, Don Nguyễn</Text>
                      <Text style={[styles.textFilm,styles.white]}>Doanh thu: 171 tỷ VND</Text>
                      <View style={styles.bottomBlock}>
                        <TouchableOpacity style={styles.btn} onPress={()=>{this.props.navigation.navigate('Film', null);}}>
                          <Text style={styles.btnText}>XEM THÊM</Text>
                        </TouchableOpacity>
                      </View>
                    </ScrollView>
                </Animated.View>}
            </View>
            <View style={styles.actorAwarded}>
                <Text style={[styles.title,styles.titleActorAwarded]}>Thông tin nghệ sĩ đạt giải</Text>
                <Swiper style={styles.wrapper} 
                    showsButtons={true} 
                    horizontal={true} 
                    autoplay={true}
                    autoplayTimeout={8}
                    paginationStyle={styles.pagination}
                    dotStyle={styles.dot}
                    activeDotStyle={styles.activeDot}
                    dotColor={'white'}
                    activeDotColor={'#E88E20'}
                    nextButton={<Text style={styles.buttonText}>›</Text>}
                    prevButton={<Text style={styles.buttonText}>‹</Text>}
                    >
                    <View style={styles.slide}>
                        <View style={styles.actorTag}>
                            <View style={styles.avatar}>
                                <Image style={[styles.image,styles.avatarActor]} source={require('../img/kmt.jpg')} resizeMode="stretch" />
                            </View>
                            <Text style={styles.actorName}>KIỀU MINH TUẤN</Text>
                            <Text style={styles.job}>--Nam diễn viên chính xuất sắc--</Text>
                            <Text style={[styles.text,styles.textActor]}>Tên thật: Kiều Minh Tuấn</Text>    
                            <Text style={[styles.text,styles.textActor]}>Biệt danh: Không có</Text>
                            <Text style={[styles.text,styles.textActor]}>Ngày sinh: ngày 26 tháng 2 năm 1988</Text>
                            <Text style={[styles.text,styles.textActor]}>Quê quán: Bà Rịa - Vũng Tàu, Việt Nam</Text>
                            <Text style={[styles.text,styles.textActor]}> Anh được biết đến qua các phim điện ảnh như: Bụi đời Chợ Lớn (2013), Scandal 2: Hào quang trở lại (2014), Em chưa 18 (2017), Lật mặt: Ba chàng khuyết (2018), Chú ơi đừng lấy mẹ con (2018).</Text>
                            <View style={styles.bottomBlock}>
                                <TouchableOpacity style={[styles.btn,styles.blackBtn]} onPress={()=>{this.props.navigation.navigate('Actor', null);}}>
                                    <Text style={[styles.btnText,styles.black]}>XEM THÊM</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.actorTag}>
                            <View style={styles.avatar}>
                                <Image style={[styles.image,styles.avatarActor]} source={require('../img/np.jpg')} resizeMode="stretch" />
                            </View>
                            <Text style={styles.actorName}>NHÃ PHƯƠNG</Text>
                            <Text style={styles.job}>--Nữ diễn viên chính xuất sắc--</Text>
                            <Text style={[styles.text,styles.textActor]}>Tên thật: Trần Thị Nhã Phương</Text>    
                            <Text style={[styles.text,styles.textActor]}>Biệt danh: Nabi Nhã Phương</Text>
                            <Text style={[styles.text,styles.textActor]}>Ngày sinh: ngày 20 tháng 5 năm 1990</Text>
                            <Text style={[styles.text,styles.textActor]}>Quê quán: Đắk Lắk, Việt Nam</Text>
                            <Text style={[styles.text,styles.textActor]}>Cô được biết đến qua các phim như Những thiên thần áo trắng, Gia đình số đỏ, Hoa nắng, Cô nàng nặng cân, Quả tim máu, Vừa đi vừa khóc, Tuổi thanh xuân, Ngày ấy mình đã yêu.</Text>
                            <View style={styles.bottomBlock}>
                                <TouchableOpacity style={[styles.btn,styles.blackBtn]} onPress={()=>{this.props.navigation.navigate('Actor', null);}}>
                                    <Text style={[styles.btnText,styles.black]}>XEM THÊM</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Swiper>
            </View>
            <View style={styles.contactUs}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>LIÊN HỆ VỚI CHÚNG TÔI</Text>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.formEle}>
                        <Text style={styles.label}>Tên khán thính giả:</Text>
                        <TextInput style={styles.input} onChangeText={
                            (text) => this.setState({name: text})
                        } 
                        placeholder="Nhập tên khán thính giả"/>
                    </View>
                    <View style={styles.formEle}>
                        <Text style={styles.label}>Địa chỉ email:</Text>
                        <TextInput style={styles.input} onChangeText={
                            (text) => this.setState({imageUrl: text})
                        } 
                        placeholder="Nhập địa chỉ email:"/>
                    </View>
                    <View style={styles.formEle}>
                        <Text style={styles.label}>Tiêu đề:</Text>
                        <TextInput style={styles.input} onChangeText={
                            (text) => this.setState({beginStation: text})
                        }
                        
                        placeholder="Nhập tiêu đề"/>
                    </View>
                    <View style={styles.formEle}>
                        <Text style={styles.label}>Nội dung:</Text>
                        <TextInput style={styles.input} onChangeText={
                            (text) => this.setState({endStation: text})
                        }
                        placeholder="Nhập nội dung:"/>
                    </View>
                    <View style={styles.bottomBlock}>
                        <TouchableOpacity style={[styles.btn,styles.blackBtn,styles.thanksBtn]}>
                            <Text style={[styles.btnText,styles.black]}>GỬI LỜI NHẮN</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.text}>Xin chân thành cám ơn bạn đã đóng góp ý kiến!</Text>
                </View>
                <View style={styles.thanksForm}>
                    <Text style={styles.title}>Lời cảm ơn</Text>
                    <Text style={styles.text}>Cảm ơn quý khán thính giả đã sử dụng dịch vụ và đóng góp ý kiến cho chúng tôi. Mọi ý kiến đóng góp sẽ giúp chúng tôi cải thiện chất lượng dịch vụ cũng như chất lượng giải thưởng tốt hơn, đáp ứng sự kỳ vọng của quý vị. Mọi ý kiến đóng góp xin hãy điền vào form kế bên, chúng tôi sẽ cố gắng phản hồi một cách sớm nhất! Chúc quý khách có những phút giây bổ ích khi sử dụng dịch vụ. Xin chân thành cám ơn!</Text>
                    <View style={styles.mapView}>
                        <Image style={styles.image} source={require('../img/map.png')} resizeMode="stretch"/>
                    </View>
                </View>
            </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    fontFamily: 'Open Sans',
    margin: 0,
    padding: 0,
    position: 'relative',
  },
  navbar:{
    height: 60,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
  },
  logo:{
    flex: 1,
    position: 'absolute',
    left: 5,
    top: 5,
    width: 100,
    height: '92%',
  },
  logoImg:{
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  },
  menuBtn: {
    position:'absolute',
    top:10,
    right: 5,
    width: 40,
    height: 40,
    padding: 10,
    backgroundColor: '#E88E20',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
  },
  menuIcon: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  },
  scroll:{
    flex: 1,
  },
  kv:{
    width: '100%',
    height: 310,
  },
  wrapper: {
    flex: 1,
    width: '100%',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  banner:{
    flex: 1,
    height: '100%',
    width: '100%',
  },
  bannerImg:{
    flex: 1,
  },
  infoContent:{
    position: 'absolute',
    width: '80%',
    height: '90%',
    top: '5%',
  },
  blackBack:{
    position: 'absolute',
    backgroundColor: 'black',
    left: '-5%',
    top: '-1%',
    width: '110%',
    height: '102%',
    opacity: 0.35,
    borderRadius: 10,
  },
  white:{
    color: 'white',
  },
  pagination: {
      bottom: 2,
  },
  dot: {
      borderRadius: 2,
      opacity: 0.35,
      marginHorizontal: 5,
  },
  activeDot: {
      borderRadius: 4,
  },
  buttonText: {
      color: '#E88E20',
      fontSize: 46,
      transform: [{translateY:-15}],
      fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
  },
  image:{
      flex: 1,
      width: undefined,
      height: undefined,
      alignSelf: 'stretch',
  },
  btn:{
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 25,
    marginTop: 10,
  },
  btnText:{
    color: 'white',
    textAlign: 'center',
  },
  history:{
    width: '100%',
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  historyTitle: {
    marginBottom: 20,
    fontSize: 28,
  },
  historyImg:{
    width: '100%',
    height: 400,
  },
  filmAwarded: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    backgroundColor: 'black', 
  },
  filmAwardedTitle:{
    marginBottom: 20,
    color: '#E88E20',
  },
  panelControllerElement:{
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    height: 280,
    marginBottom: 20,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
  },
  filmBanner:{
    flex: 2,
    width: '100%',
  },
  awardArchieve:{
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    padding: 5,
  },
  awardImg:{
    flex: 1,
  },
  awardName:{
    flex: 1.5,
    justifyContent:'center',
  },
  filmBannerImg:{
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  award:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  category:{
    fontSize: 16,
    textAlign: 'center',
  },
  sign:{
    fontSize: 20,
    textAlign: 'center',
  },
  gold:{
    color: '#E88E20',
  },
  silver:{
    color: '#9c9c9a',
  },
  titleFilm:{
    fontSize: 26,
    textAlign:'center',
    marginBottom: 20,
  },
  awardFilm:{
    fontSize: 14,
    textAlign:'center',
    marginBottom: 10,
  },
  textFilm:{
    fontSize: 15,
  },
  actorAwarded:{
    paddingVertical: 30,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    height: 700,
  },
  actorTag:{
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  titleActorAwarded:{
    marginBottom: 20,
  },
  avatar:{
    height: '40%',
    width: '100%',
  },
  actorName:{
    fontSize: 24,
    textAlign:'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  job:{
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  textActor:{
    textAlign:'left',
    marginBottom: 5,
    paddingHorizontal: 5,
  },
  black:{
    color: 'black',
  },
  blackBtn:{
    borderColor: 'black',
    marginHorizontal: 30,
  },
  titleContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  formContainer: {
    flex: 4.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 15,
  },
  formEle:{
    flex: 1,
    margin: 12,
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  input: {
    paddingLeft: 20,
    borderRadius: 10,
    borderRadius: 50,
    backgroundColor: '#f1f1f1',
  },
  thanksForm:{
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  mapView:{
    height: 200,
    width: '100%',
    marginTop: 20,
  },
  thanksBtn:{
    marginBottom: 20,
  }
});

export default Home;
