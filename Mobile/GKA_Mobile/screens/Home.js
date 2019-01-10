import React, { Component } from 'react';
import {Animated, View, Text , ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      isHiddenFilm1: false,
      isHiddenFilm2: false,
    }
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
                            <TouchableOpacity style={styles.btn}>
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
                            <TouchableOpacity style={styles.btn}>
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
                            <TouchableOpacity style={styles.btn}>
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
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>XEM THÊM</Text>
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
                <TouchableOpacity style={styles.panelControllerElement}>
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
                <TouchableOpacity style={styles.panelControllerElement}>
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
              {this.state.isHiddenSearchList && 
                <Animated.View style={styles.panelContent}>
                    <Text style={styles.title}>Cô Ba Sài Gòn</Text>
                    <Text style={styles.award}>*---Cánh diều vàng - Phim chiếu rạp---*</Text>
                    <Text style={styles.text}>Cô Ba Sài Gòn (tựa tiếng Anh: The Tailor) là một bộ phim điện ảnh Việt Nam về đề tài thời trang mang yếu tố xuyên không kỳ ảo do Trần Bửu Lộc và Kay Nguyễn làm đạo diễn, Ngô Thanh Vân và Thủy Nguyễn đóng vai trò sản xuất, dựa theo phần kịch bản của A Type Machine. Phim có sự tham gia của các diễn viên Ninh Dương Lan Ngọc, NSND Hồng Vân, Diễm My, Ngô Thanh Vân, Diễm My 9x, S.T 365 và Oanh Kiều. Chủ đề chính của phim là tôn vinh áo dài, trang phục truyền thống của Việt Nam.</Text>
                    <Text style={styles.text}>Phim có buổi công chiếu đầu tiên trên toàn thế giới vào ngày 14 tháng 10 năm 2017 tại Liên hoan phim quốc tế Busan lần thứ 22 ở Hàn Quốc trước khi ra mắt công chúng Việt Nam vào ngày 10 tháng 11 cùng năm. Sau gần một tháng công chiếu, phim thu về hơn 60 tỷ đồng. Tại Liên hoan phim Việt Nam lần thứ 20, Cô Ba Sài Gòn giành hai giải, bao gồm Giải thưởng của Ban giám khảo.</Text>         
                    <Text style={styles.text}>Nội dung:</Text>
                    <Text style={styles.text}>Năm 1969, nhà may Thanh Nữ là nhà may áo dài nổi tiếng nhất Sài Gòn. Gia đình này 9 đời đều may áo dài. Bà chủ Thanh Mai có hai cô con gái: cô con gái ruột Như Ý và cô con gái nuôi Thanh Loan. Thanh Loan thích may áo dài nhưng Như Ý lại thích thiết kế đồ Tây, vì cô cho rằng áo dài đã quá xưa và chỉ có một kiểu. Bà Thanh Mai kêu Như Ý hãy học cách may áo dài nhưng cô không quan tâm, cô chỉ thích thiết kế đồ Tây. Một hôm bà Thanh Mai lấy tấm vải quý của gia tộc ra may thành chiếc áo dài cực kỳ đẹp, rồi để bên dưới nhà. Như Ý thấy chiếc áo dài đẹp quá (có đính tên Như Ý trên áo) nên lấy mặc thử. Một điều kỳ lạ đã xảy ra, khi cô mặc chiếc áo dài vào, miếng ngọc trên chiếc áo đã cuốn cô vào dòng thời gian, đưa cô đến năm 2017.</Text>
                    <Text style={styles.text}>Khi bà An Khánh (chính là hiện thân của Như Ý) đang chuẩn bị tự tử thì Như Ý rơi xuống, đẩy bà ấy ngã và rồi miếng ngọc trên áo bị văng mất. Như Ý ngạc nhiên khi thấy nhà may Thanh Nữ bị dỡ bỏ, nhà cửa tan hoang, không dám tin khi thấy chính mình trong tương lai, hoang mang và sợ hãi khi thấy Sài Gòn xưa của cô đã biến mất, thay vào đó là Sài Gòn 2017 văn minh hiện đại. Căn nhà trở nên hoang tàn, không còn náo nhiệt như ngày xưa. Bộ phim tiết lộ khi bà Thanh Mai mất, bà An Khánh đuổi Thanh Loan ra khỏi nhà để mở tiệm may đồ Tây, tuy nhiên lại sớm dẹp tiệm. Bà An Khánh trở thành kẻ thất bại và nghiện rượu. Thanh Loan ra ngoài mở một tiệm may áo dài, sau này cô sinh hai đứa con: Helen và Tuấn. Helen bây giờ đang là nhà thiết kế thời trang nổi tiếng, còn Tuấn đang làm ở công ty của Helen.</Text> 
                    <Text style={styles.text}>Helen đồng ý giúp bà An Khánh giữ lại căn nhà, đổi lại Như Ý phải làm nhân viên cho Helen. Như Ý làm lao công một thời gian, chính Tuấn giúp cho cô làm quen với cuộc sống hiện đại này. Đến khi công ty cần thiết kế mấy bộ đồ Tây của thập niên 1960, đúng với sở trường của mình, Như Ý đã giúp Helen thiết kế. Ấn tượng trước khả năng thiết kế của Như Ý, lần tiếp theo Helen giao cho Như Ý công việc thiết kế áo dài. Đây là một thử thách lớn đối với Như Ý, vì cô vốn ghét áo dài và không hề biết may áo dài. Nhưng cô cũng rất muốn thiết kế áo dài theo cách gia truyền của nhà may Thanh Nữ, điều này sẽ giúp nhà may Thanh Nữ có lại danh tiếng và sẽ được phục dựng trở lại.</Text>
                    <Text style={styles.text}>Bà An Khánh đến gặp bà Thanh Loan để xin lỗi và xin học cách may áo dài. Bà Thanh Loan đưa cho bà An Khánh một phong bì, trong đó là lá thư của bà Thanh Mai chỉ cách may áo dài. Bà An Khánh và Như Ý cùng nhau tập may áo dài.</Text>
                    <Text style={styles.text}>Đến ngày diễn ra sự kiện thời trang, người mẫu Trang Ngô cùng với những cô người mẫu khác trình diễn những chiếc áo dài do chính Như Ý thiết kế. Trong lúc buổi biểu diễn đang được tiếp tục, Helen có ý định thay đổi kịch bản để tên mình được vinh danh thay vì Như Ý nhưng bị Tuấn bắt được rồi yêu cầu cô sửa đổi kịch bản và suy nghĩ lại việc làm của cô. Cuối cùng, buổi biểu diễn rất thành công và Như Ý đứng lên phát biểu đôi lời, cô cũng gửi lời cám ơn đến Helen. Sau ngày hôm đó, nhà may Thanh Nữ được phục dựng trở lại.</Text>
                    <Text style={styles.text}>Như Ý mặc chiếc áo dài có miếng ngọc, miếng ngọc kỳ diệu đó lại cuốn cô vào dòng thời gian, đưa cô về lại năm 1969. Cô gặp lại bà Thanh Mai, cô ôm lấy mẹ mình rồi nói xin lỗi rồi nói với mẹ mình rằng mình đã biết may áo dài. Hai mẹ con sau đó mở nhạc lên và đứng nhảy.</Text>
                    <Text style={styles.text}>Trong đoạn cảnh hậu Danh đề, truyền nhân thứ 20 nhà may Thanh Nữ đi tham quan xung quanh nhà mình và có những câu cửa miệng rất giống Như Ý như "Ô la la" và cuối cùng nói "Hết rồi!" để kết thúc bộ phim.</Text>
                    <View style={styles.trailer}>
                        <iframe src="https://www.youtube.com/embed/YP4TDQVkZO4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </View>
                    <Text style={styles.text}>Đạo diễn: Trần Bửu Lộc, Kay Nguyễn</Text>
                    <Text style={styles.text}>Nhà sản xuất: Ngô Thanh Vân, Thủy Nguyễn</Text>
                    <Text style={styles.text}>Diễn viên: Ninh Dương Lan Ngọc, NSND Hồng Vân, Diễm My, Ngô Thanh Vân, Diễm My 9x, S.T 365, Oanh Kiều</Text>
                    <Text style={styles.text}>Doanh thu: 60 tỷ VND</Text>
                    <View style={styles.bottomBlock}>
                      <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>XEM THÊM</Text>
                      </TouchableOpacity>
                    </View>
                </Animated.View>}
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
    backgroundColor:'red', 
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
    height: '100%',
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
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  category:{
    fontSize: 18,
    textAlign: 'center',
  },
  sign:{
    fontSize: 18,
    textAlign: 'center',
  },
  gold:{
    color: '#E88E20',
  },
  silver:{
    color: '#9c9c9a',
  },
});

export default Home;
