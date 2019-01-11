import React, { Component } from 'react'
import {Animated, View, Text , ScrollView, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import Swiper from 'react-native-swiper'

export class History extends Component {
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
        <ScrollView>
          <View style={styles.awardHistory}>
              <Text style={styles.title}>LỊCH SỬ GIẢI THƯỞNG CÁNH DIỀU VÀNG</Text>
              <View style={styles.documentContent}>
                  <Text style={styles.text}>Giải thưởng Hội điện ảnh Việt Nam, có tên gọi là Cánh Diều Vàng (tiếng Anh: Golden Kites Awards) là một giải thưởng điện ảnh hàng năm của Hội Điện ảnh Việt Nam. Giải thưởng được trao vào khoảng tháng ba, cho những tác phẩm điện ảnh sản xuất trong năm trước đó. Giải được tổ chức lần đầu tiên là Cánh diều vàng 2002, diễn ra vào đầu 2003. Trong các hạng mục trao giải còn có Cánh diều bạc và Cánh diều đồng, tuy có những năm bị loại bỏ. Mặc dù là giải thưởng điện ảnh, Cách diều vàng còn trao cho cả các tác phẩm truyền hình và phim video.</Text>
                  <Text style={styles.text}>Thực chất Cánh diều vàng là một giải thưởng mang tính nội bộ nằm trong hệ thống giải thưởng chung của Hội Liên hiệp văn học nghệ thuật. Hội Liên hiệp văn học nghệ thuật gồm có bảy hội: văn học, âm nhạc, sân khấu, mỹ thuật, nhiếp ảnh, kiến trúc, điện ảnh. Nhằm khuyến khích các nghệ sĩ thông qua tác phẩm, hàng năm Chính phủ cấp kinh phí cho mỗi hội để trao giải thưởng. Giải của Hội Điện ảnh bắt đầu trao từ năm 1993.</Text>
                  <Text style={styles.text}>Năm 2003, Hội Điện ảnh Việt Nam đặt tên cho giải của mình là Cánh diều vàng, và kết hợp cùng Đài Truyền hình Việt Nam đưa buổi lễ trao giải lên sóng truyền hình trực tiếp với sự hỗ trợ của các doanh nghiệp thông qua quảng cáo. Qua lịch sử của giải thưởng, nhiều hạng mục của giải được thay đổi. Ở giải Cánh diều vàng 2005, Cánh diều bạc và Cánh diều đồng bị bỏ bớt. Đến giải 2006, Cánh diều bạc được khôi phục và bằng khen thay cho Cánh diều đồng. Năm 2007, Hội Điện ảnh trao tặng thêm Cách diều bạc và hai giải phụ là Giải phim phục vụ khán giả đông nhất và Giải phim bán được nhiều vé nhất.</Text>
                  <Text style={styles.text}>Tuy là một giải thưởng điện ảnh lớn của Việt Nam, được kết hợp với Đài Truyền hình Việt Nam phát hình trực tiếp, nhưng Cánh diều vàng thường xuyên bị sự chỉ trích của báo chí vì để lộ giải và tổ chức không tốt. Tính tới 2007, Cánh diều vàng chưa có một buổi họp báo chính thức nào.</Text>
                  <Text style={styles.text}>Kịch bản buổi lễ trao giải được tổ chức dựa theo giải thưởng Oscar. Cảnh các bộ phim được đề cử chiếu lên màn hình lớn. Kết quả giải thưởng được giữ trong phong bì kín và do các cặp diễn viên trao, tuy có những năm giải bị lộ trước. Số lượng phim đề cử cũng là 5, mặc dù có năm chỉ gồm 7 phim tranh giải. Việc các hạng mục trao giải thường xuyên thay đổi cũng gây nên các phả ứng của báo chí.</Text>
                  <Text style={styles.text}>Về nguyên tắc, giải Cánh diều vàng được tổ chức để trao cho các tác phẩm của năm trước đó, nhưng thực tế, trong các bộ phim được trao giải có những phim chưa kịp công chiếu, có những phim trước đó 3 năm. Trò đùa của Thiên lôi được trao Cánh diều bạc 2003, đến 2007 vẫn chưa ra mắt khán giả. Chuyện của Pao được trao Cánh diều vàng 2005 khi chưa công chiếu. Lọ lem hè phố giải Phim có số lượng khán giả mua vé nhiều nhất của Cánh diều vàng 2006 được công chiếu từ 2004. Tương tự các phim Hải quỳ, Đi trong giấc ngủ, Có một chuyến đi, Giải phóng Sài Gòn, Đường thư, Cầu ông Tượng dù tham dự Cánh diều vàng từ những năm trước, nhưng tới 2007 vẫn chưa đến với khán giả.</Text>
                  <Text style={styles.text}>Tất cả những phim đoạt giải cao nhất tại Cánh diều vàng: Người đàn bà mộng du (2003), Thời xa vắng (Cánh diều bạc, không có Cánh diều vàng – giải 2004), Chuyện của Pao (2005) đều là những phim thất bại về doanh thu. Áo lụa Hà Đông, một trong hai phim đoạt Cánh diều vàng 2006, là phim tư nhân đầu tiên đoạt giải và cũng là phim đầu tiên thành công về mặt thương mại.</Text>
                  <Text style={styles.textTitle}>Hạng mục trao giải: </Text>
                  <Text style={styles.text}>Phim truyện nhựa</Text>
                    <Text style={styles.textList}>❋ Phim truyện nhựa hay nhất</Text>
                    <Text style={styles.textList}>❋ Đạo diễn xuất sắc</Text>
                    <Text style={styles.textList}>❋ Nữ diễn viên chính xuất sắc</Text>
                    <Text style={styles.textList}>❋ Nam diễn viên chính xuất sắc</Text>
                    <Text style={styles.textList}>❋ Nữ diễn viên phụ xuất sắc</Text>
                    <Text style={styles.textList}>❋ Nam diễn viên phụ xuất sắc</Text>
                    <Text style={styles.textList}>❋ Biên kịch xuất sắc</Text>
                    <Text style={styles.textList}>❋ Thiết kế mỹ thuật xuất sắc</Text>
                    <Text style={styles.textList}>❋ Quay phim xuất sắc</Text>
                    <Text style={styles.textList}>❋ Âm thanh xuất sắc</Text>
                    <Text style={styles.textList}>❋ Âm nhạc xuất sắc</Text>
                    <Text style={styles.textList}>❋ Phim truyện nhựa có số lượng khán giả mua vé nhiều nhất</Text>
                    <Text style={styles.textList}>❋ Giải báo chí phê bình điện ảnh dành cho phim truyện nhựa</Text>
                  <Text style={styles.text}>Phim truyền hình</Text>
                    <Text style={styles.textList}>❋ Phim truyền hình dài tập</Text>
                    <Text style={styles.textList}>❋ Phim truyền hình ngắn tập</Text>
                    <Text style={styles.textList}>❋ Giải đạo diễn phim truyền hình dài tập</Text>
                    <Text style={styles.textList}>❋ Giải đạo diễn phim truyền hình ngắn tập</Text>
                  <Text style={styles.text}>Phim tài liệu</Text>
                    <Text style={styles.textList}>❋ Phim tài liệu nhựa</Text>
                    <Text style={styles.textList}>❋ Phim tài liệu video</Text>
                    <Text style={styles.textList}>❋ Đạo diễn xuất sắc phim tài liệu nhựa và video</Text>
                  <Text style={styles.text}>Phim hoạt hình</Text>
                  <Text style={styles.text}>Phim khoa học</Text>
                  <Text style={styles.text}>Công trình nghiên cứu phê bình điện ảnh</Text>
                  <Text style={styles.textTitle}>Những thay đổi về giải thưởng</Text>
                      <Text style={styles.textList}>❋ Năm 2003: Thêm giải thưởng Cánh diều đặc biệt cho bộ phim Nguyễn Ái Quốc ở Hồng Kông</Text>
                      <Text style={styles.textList}>❋ Năm 2004: Thêm giải Phim hợp tác với nước ngoài hay nhất cho Mùa len trâu</Text>
                      <Text style={styles.textList}>❋ Năm 2005: Giải Cánh diều bạc, Cánh diều đồng bị bỏ</Text>
                          <Text style={styles.textList2}>✽ Thêm giải Phim xuất sắc do báo chí bình chọn cho Sống trong sợ hãi</Text>
                      <Text style={styles.textList}>❋ Năm 2006: Thêm hai giải mới Phim phục vụ người xem nhiều nhất và Phim bán được nhiều vé nhất</Text>
                          <Text style={styles.textList2}>✽ Giải Cánh diều bạc được khôi phục</Text>                      
                          <Text style={styles.textList2}>✽ Bằng khen thay cho Cánh diều đồng</Text>
              </View>
          </View>
          <View style={styles.awardImage}>
            <Text style={[styles.title,styles.gold]}>MỘT SỐ HÌNH ẢNH TRONG GIẢI THƯỞNG</Text>
            <Swiper style={styles.wrapper} 
                      showsButtons={true} 
                      horizontal={true} 
                      autoplay={true}
                      autoplayTimeout={5}
                      paginationStyle={styles.pagination}
                      dotStyle={styles.dot}
                      activeDotStyle={styles.activeDot}
                      dotColor={'white'}
                      activeDotColor={'#E88E20'}
                      nextButton={<Text style={styles.buttonText}>›</Text>}
                      prevButton={<Text style={styles.buttonText}>‹</Text>}
                      >
                      <View style={styles.slide}>
                        <Image style={styles.image} source={require('../img/history/1.jpg')} resizeMode="stretch"/>
                      </View>
                      <View style={styles.slide}>
                        <Image style={styles.image} source={require('../img/history/2.jpg')} resizeMode="stretch"/>
                      </View>
                      <View style={styles.slide}>
                        <Image style={styles.image} source={require('../img/history/3.jpg')} resizeMode="stretch"/>
                      </View>
                      <View style={styles.slide}>
                        <Image style={styles.image} source={require('../img/history/4.jpg')} resizeMode="stretch"/>
                      </View>
                      <View style={styles.slide}>
                        <Image style={styles.image} source={require('../img/history/5.jpg')} resizeMode="stretch"/>
                      </View>
            </Swiper>
          </View>
          <View style={styles.timeLine}>
            <Text style={styles.title}>CÁC GIẢI THƯỞNG QUA TỪNG THỜI KỲ</Text>
            <View style={styles.timeLineContent}>
              <View style={styles.row}>
                <View style={styles.leftBlock}>
                  <View style={styles.yearContainer}>
                    <Text style={styles.year}>2013</Text>
                  </View>
                </View>
                <View style={styles.rightBlock}>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim ngắn - Con đường đi học - Hà Lệ Diễm</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim ngắn - Đường về - Đinh Trần Việt Thúy</Text>  
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim ngắn - Thiếu - Lê Hiếu</Text>
                    <Text style={styles.text}>❃ Cánh diều vàng - Phim truyền hình - Thuyền giấy - Nhâm Minh Hiền</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim truyền hình - Bình Tây Đại nguyên soái - Phan Hoàng</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim truyền hình - Huế mùa mai đỏ - NSƯT Trần Vịnh</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim truyền hình - Chạm vào nổi nhớ - Vũ Hồng Sơn</Text>
                    <Text style={styles.text}>❃ Nam diễn viên xuất sắc - Quang Tuấn</Text>
                    <Text style={styles.text}>❃ Nữ diễn viên xuất sắc - Ngọc Lan</Text>
                    <Text style={styles.text}>❃ Đạo diễn xuất sắc - Nhâm Minh Hiền</Text>
                    <Text style={styles.text}>❃ Biên kịch xuất sắc - Phạm Thùy Nhân</Text>
                    <Text style={styles.text}>❃ Diễn viên triển vọng - Nguyễn Thanh Vân</Text>
                    <Image style={styles.image} source={require('../img/history/5.jpg')} resizeMode="stretch"/>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.leftBlock}>
                  <View style={styles.yearContainer}>
                    <Text style={styles.year}>2014</Text>
                  </View>
                </View>
                <View style={styles.rightBlock}>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim chiếu rạp - Những đứa con của làng - Nguyễn Đức Việt</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim chiếu rạp - Lạc giới - Phi Tiến Sơn</Text>  
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim chiếu rạp - Hương Ga - Cường Ngô</Text>
                    <Text style={styles.text}>❃ Cánh diều vàng - Phim truyền hình - Cha rơi - Nguyễn Phương Điền</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim truyền hình - Trái tim có nắng</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim truyền hình - Người chồng điên</Text>
                    <Text style={styles.text}>❃ Nam diễn viên xuất sắc - Thái Hòa</Text>
                    <Text style={styles.text}>❃ Nữ diễn viên xuất sắc - Bảo Thanh</Text>
                    <Text style={styles.text}>❃ Đạo diễn xuất sắc - Nguyễn Khoa Nam</Text>
                    <Text style={styles.text}>❃ Biên kịch xuất sắc - Nguyễn Quý Dũng</Text>
                    <Text style={styles.text}>❃ Diễn viên triển vọng - Sơn Tùng M-TP</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.leftBlock}>
                  <View style={styles.yearContainer}>
                    <Text style={styles.year}>2015</Text>
                  </View>
                </View>
                <View style={styles.rightBlock}>
                    <Text style={styles.text}>❃ Cánh diều vàng - Phim chiếu rạp - Trúng số - Dustin Nguyễn</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim chiếu rạp - Cuộc đời của Yến - Đinh Tuấn Vũ</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim chiếu rạp - Người trở về - Đặng Thái Huyền</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim chiếu rạp - Tôi thấy hoa vàng trên cỏ xanh - Victor Vũ</Text>  
                    <Text style={styles.text}>❃ Cánh diều vàng - Phim truyền hình - Tuổi thanh xuân - Nguyễn Khải Anh</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim truyền hình - Khi đàn chim trở về - Nguyễn Danh Dũng</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim truyền hình - Biệt thự Pensée - Châu Thổ - Minh Trương</Text>
                    <Text style={styles.text}>❃ Nam diễn viên xuất sắc - Nguyễn Thanh Tú</Text>
                    <Text style={styles.text}>❃ Nữ diễn viên xuất sắc - Ninh Dương Lan Ngọc</Text>
                    <Text style={styles.text}>❃ Đạo diễn xuất sắc - Đinh Tuấn Vũ</Text>
                    <Text style={styles.text}>❃ Biên kịch xuất sắc - Nguyễn Mạnh Tuấn</Text>
                    <Text style={styles.text}>❃ Diễn viên triển vọng - Bùi Trọng Khang</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.leftBlock}>
                  <View style={styles.yearContainer}>
                    <Text style={styles.year}>2016</Text>
                  </View>
                </View>
                <View style={styles.rightBlock}>
                    <Text style={styles.text}>❃ Cánh diều vàng - Phim chiếu rạp - Sài Gòn, Anh yêu em - Lý Minh Thắng</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim chiếu rạp - Vẽ đường cho yêu chạy - Vũ Ngọc Phượng</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim chiếu rạp - Tấm Cám: Chuyện chưa kể - Ngô Thanh Vân</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim chiếu rạp - Tôi thấy hoa vàng trên cỏ xanh - Victor Vũ</Text>  
                    <Text style={styles.text}>❃ Cánh diều vàng - Phim truyền hình - Zippo mù tạt và em - NSƯT Trọng Trinh</Text>
                    <Text style={styles.text}>❃ Nam diễn viên xuất sắc - Hà Hiền</Text>
                    <Text style={styles.text}>❃ Nữ diễn viên xuất sắc - Jun Vũ</Text>
                    <Text style={styles.text}>❃ Đạo diễn xuất sắc - Vũ Ngọc Phượng</Text>
                    <Text style={styles.text}>❃ Biên kịch xuất sắc - Ngọc Bích</Text>
                    <Text style={styles.text}>❃ Diễn viên triển vọng - Bùi Trọng Khang</Text>
                </View>
              </View>
              <View style={[styles.row,styles.lastRow]}>
                <View style={styles.leftBlock}>
                  <View style={styles.yearContainer}>
                    <Text style={styles.year}>2017</Text>
                  </View>
                </View>
                <View style={styles.rightBlock}>
                    <Text style={styles.text}>❃ Cánh diều vàng - Phim chiếu rạp -  Cô Ba Sài Gòn - Lộc Trần - Kay Nguyễn</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim chiếu rạp -  Em Chưa 18 - Lê Thanh Sơn</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim chiếu rạp -  Cô Gái Đến Từ Hôm Qua - Phan Gia Nhật Linh</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim chiếu rạp -  Đảo Của Dân Ngụ Cư - Hồng Ánh</Text>  
                    <Text style={styles.text}>❃ Cánh diều vàng - Phim truyền hình -  Thương Nhớ Ở Ai - Lưu Trọng Ninh</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim truyền hình - Lặng Yên Dưới Vực - Đào Duy Phúc</Text>
                    <Text style={styles.text}>❃ Cánh diều bạc - Phim truyền hình - Sống Trong Bóng Đêm - Phương Điền</Text>
                    <Text style={styles.text}>❃ Nam diễn viên xuất sắc -  Kiều Minh Tuấn</Text>
                    <Text style={styles.text}>❃ Nữ diễn viên xuất sắc - Nhã Phương</Text>
                    <Text style={styles.text}>❃ Đạo diễn xuất sắc - Lê Thanh Sơn</Text>
                    <Text style={styles.text}>❃ Biên kịch xuất sắc - Kay Nguyễn</Text>
                    <Text style={styles.text}>❃ Diễn viên triển vọng - Bùi Trọng Khang</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
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
  title:{
    fontSize: 26,
    marginBottom: 20,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text:{
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 5
  },
  textTitle:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  textList:{
    marginLeft: 10,
    marginBottom: 5,
  },
  textList2:{
    marginLeft: 20,
    marginBottom: 5,
  },
  image:{
    flex: 1,
    width: undefined,
    height: undefined,
    alignSelf: 'stretch',
  },
  awardHistory:{
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  awardImage:{
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: 'black',
    height: 400,
  },
  gold:{
    color: '#E88E20'
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
  timeLine:{
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  timeLineContent:{
    flex:1,
  },
  row:{
    flex:1,
    flexDirection: 'row',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1'
  },
  rightBlock:{
    flex: 4,
  },
  leftBlock:{
    flex: 1.2,
    textAlign: 'center',
  },
  yearContainer:{
    width: 70,
    height: 70,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#E88E20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  year:{
    fontSize: 20,
    fontWeight: 'bold',
    width: 60,
    height: 60,
    borderRadius: 60,
    lineHeight: 58,
    textAlign: 'center',
    backgroundColor: '#E88E20',
  },
  lastRow:{
    borderBottomWidth: 0,
    marginBottom: 0
  }
});

export default History
