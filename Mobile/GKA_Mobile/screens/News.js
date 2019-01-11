import React, { Component } from 'react'
import {View, Text , ScrollView, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import Swiper from 'react-native-swiper'

export class News extends Component {
  
  constructor(props) {
    super(props);
    this.state={
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
        <ScrollView>
          <View style={styles.news}>
            <View style={styles.post}>
                <View style={styles.postImgContainer}>
                  <Image style={[styles.image,styles.postImg]} source={require('../img/banner1.jpg')} resizeMode="stretch"/>
                </View>
                <View style={styles.postContent}>
                    <Text style={[styles.name,styles.gold]}>Nhìn lại Cánh diều vàng 2017</Text>
                    <Text style={styles.author}>Tú Anh</Text>
                    <Text style={styles.text}>Giải thưởng Cánh diều vàng năm nay được đánh giá đã có sự đổi mới phù hợp với thực tế điện ảnh Việt.</Text>
                    <View style={styles.postImg}>
                      <Image style={styles.image} source={require('../img/news/0.jpg')} resizeMode="stretch"/>
                    </View>
                    <Text style={styles.text}>Theo nhận xét của giới chuyên môn, điện ảnh Việt Nam như đang được trẻ hóa. Nhiều bộ phim mang tính giải trí cao nhưng không còn là hài nhảm, 1/3 trong số các phim tham dự đều có chất lượng tốt và khá đồng đều. Những cái tên như Em chưa 18, Cô Ba Sài Gòn, Cô gái đến từ hôm qua… đều đạt kỷ lục doanh thu phòng vé trong thời gian vừa qua.</Text>
                    <Text style={styles.text}>Bộ phim điện ảnh Cô Ba Sài Gòn với đề tài thời trang mang yếu tố xuyên không kỳ ảo của đạo diễn Trần Bửu Lộc và Kay Nguyễn đã đạt giải Cánh diều vàng cho hạng mục phim xuất sắc nhất và giải cá nhân cho biên kịch xuất sắc nhất. Tuy bị nhận xét là có một vài hạt sạn về tâm lý nhân vật và logic thời gian, nhưng Cô Ba Sài Gòn được xem như một bộ phim có chất lượng đồng đều nhất về biên kịch, sản xuất. Đặc biệt khâu thiết kế phục trang cho phim là một điểm sáng.</Text>
                    <View style={styles.postImg}>
                      <Image style={styles.image} source={require('../img/news/1.jpg')} resizeMode="stretch"/>
                    </View>
                    <Text style={styles.text}>Dành tặng những lời có cánh cho Cô Ba Sài Gòn, đạo diễn Lê Thanh Sơn, người dành giải ở hạng mục đạo diễn xuất sắc nhất cho phim Em chưa 18 nhận xét rằng:“Theo tinh thần tôn vinh dân tộc và quảng bá cho tà áo dài Việt Nam thì Cô Ba Sài Gòn hoàn toàn xứng đáng. Mình rất mừng cho bộ phim đó vì Em chưa 18 là một bộ phim cận đại khác không đúng ngạch này thì rất may mắn Việt Nam mình có nhiều sân chơi, giải để nhiều bộ phim có những điểm rơi được tôn vinh đúng hơn”</Text>
                    <Text style={styles.text}>Trong số các giải thưởng, không thể không kể đến những bộ phim thuộc dòng nghệ thuật kén người xem. Đảo của dân ngụ cư vinh dự giành giải ở hạng mục quay phim xuất sắc nhất (quay phim Lý Thái Dũng) và diễn viên phụ xuất sắc nhất (diễn viên Nhan Phúc Vinh – vai Miên).</Text>
                    <View style={styles.postImg}>
                      <Image style={styles.image} source={require('../img/news/2.jpg')} resizeMode="stretch"/>
                    </View>
                    <Text style={styles.text}>Ở hạng mục phim truyền hình, bộ phim Thương nhớ ở ai giành được 4 giải thưởng: giải thưởng phim truyền hình xuất sắc nhất, đạo diễn xuất sắc nhất (đạo diễn Lưu Trọng Ninh, Bùi Thọ Thịnh), quay phim xuất sắc phim truyền hình (NSƯT Hoàng Tích Thiện) và nam diễn viên phụ xuất sắc phim truyền hình (Jimmy Khánh – vai Đột) . Lấy đề tài nông thôn, gần đây dường như đã bị lãng quên trong điện ảnh Việt, Thương nhớ ở ai được đầu tư kỹ lưỡng và chỉn chu về mặt dàn diễn viên, phục trang, bối cảnh.</Text>
                    <Text style={styles.text}>Đạo diễn Lưu Trọng Ninh tâm sự: “Lần đầu tiên tôi đạt được giải về truyền hình, cũng có một cảm xúc mới mẻ với mình. Có lần tôi đã nói rằng, điện ảnh là một tòa lâu đài nhưng không dễ ai bước vào, truyền hình như đường phố và mọi người đều có thể dễ dàng đến với nó. Và thực sự người nghệ sĩ cần phải đến với đường phố, tôi nghĩ Thương nhớ ở ai sẽ có hàng triệu người xem. Đến bây giờ có nhiều người vẫn hỏi để xem lại bộ phim này. Và tôi rất hạnh phúc vì điều đó.”</Text>
                    <Text style={styles.text}>Nếu giải thưởng phim truyện điện ảnh phần lớn thuộc các bộ phim thuộc hãng phim tư nhân thì, đối với dòng phim tài liệu, các giải thưởng thuộc về các hãng phim Nhà nước. Đạt giải Cánh diều vàng, phim tài liệu Ngày về của đạo diễn Phạm Thanh Hùng, điện ảnh Quân đội Nhân dân như tấm lòng tri ân đến những người thương bệnh binh, đã bỏ lại một phần xương máu của mình tại chiến trường để đất nước có một “ngày về” với hòa bình.</Text>
                    <View style={styles.postImg}>
                      <Image style={styles.image} source={require('../img/news/3.jpg')} resizeMode="stretch"/>
                    </View>
                    <Text style={styles.text}>Đạo diễn Phạm Thanh Hùng tâm sự: “Khi nhận được giải thưởng Cánh diều vàng này tôi và các thành viên trong đoàn làm phim rất vui, vui vì nhận được sự ghi nhận công sức của một tập thể điện ảnh quân đội và sự nỗ lực, cố gắng của một ekip làm phim. Tôi muốn gửi lời chúc sức khỏe tới các bác thương bệnh binh đang làm việc tại trung tâm và lời cảm ơn chân thành tới tập thể y bác sĩ, điều dưỡng tại hai trung tâm điều dưỡng thương binh nặng Thuận Thành và Nho Quan đã tạo điều kiện tốt cho đoàn làm phim thực hiện tốt nhiệm vụ của mình”</Text>
                    <View style={styles.postImg}>
                      <Image style={styles.image} source={require('../img/news/4.jpg')} resizeMode="stretch"/>
                    </View>
                    <Text style={styles.text}>Nhắc đến đóng góp cho nền điện ảnh Việt Nam không thể không nhắc đến những công trình nghiên cứu lý luận, phê bình điện ảnh. Giải cánh diều Vàng năm nay cho Giáo trình Đại học Phim tài liệu cho Giáo sư, Tiến sĩ Trần Thanh Hiệp. Phát biểu tại lễ trao giải, nhà báo Đinh Trọng Tuấn đã bày tỏ “Trong thời buổi kinh tế thị trường, mọi thứ đều diễn ra  khi đó có những người vẫn âm thầm xem phim, âm thầm nghiên cứu và âm thầm viết lý luận phê bình và có những đóng góp âm thầm cho điện ảnh Việt Nam. Tôi luôn vô cùng kính trọng những con người đó”.</Text>
                    <Text style={styles.text}>Điểm mới đáng chú ý năm nay của Cánh diều vàng là sự tham dự của nhiều bộ phim re-make (phim chuyển thể từ kịch bản nước ngoài). Tuy không được trao giải cho phim nhưng nhiều nghệ sĩ diễn viên đóng góp được xem xét trao giải. Những cái tên như “Yêu đi đừng sợ”, “Sắc đẹp ngàn cân” hay “Người phán xử” đều là những bộ phim chiếm được nhiều tình cảm của khán giả trong thời gian qua. Hội đồng nghệ thuật bày tỏ rằng đã đến lúc cần đánh giá kỹ càng hơn đối với những bộ phim Việt hóa có sáng tạo.</Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.leftBlock}>
                      <Text style={styles.date}>23 DEC 2018 19:30 pm</Text>
                    </View>
                    <View style={styles.rightBlock}>
                      <TouchableOpacity style={styles.shareBtn}>
                        <Image style={styles.image} source={require('../img/icon/facebook.png')} resizeMode="stretch"/>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.shareBtn}>
                        <Image style={styles.image} source={require('../img/icon/twitter.png')} resizeMode="stretch"/>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.shareBtn}>
                        <Image style={styles.image} source={require('../img/icon/google-plus.png')} resizeMode="stretch"/>
                      </TouchableOpacity>
                    </View>
                </View>
            </View>
          </View>
          <View style={styles.relatedNews}>
            <Text style={[styles.title,styles.gold]}>MỘT SỐ TIN LIÊN QUAN</Text>
            <Swiper style={styles.wrapper} 
                    showsButtons={true} 
                    horizontal={true} 
                    autoplay={true}
                    autoplayTimeout={6}
                    paginationStyle={styles.pagination}
                    dotStyle={styles.dot}
                    activeDotStyle={styles.activeDot}
                    dotColor={'white'}
                    activeDotColor={'#E88E20'}
                    nextButton={<Text style={styles.buttonText}>›</Text>}
                    prevButton={<Text style={styles.buttonText}>‹</Text>}
                    >
                    <View style={styles.slide}>
                      <View style={styles.relatedNewsTag}>
                        <Image style={[styles.image,styles.relatedNewsImg]} source={require('../img/banner4.jpg')} resizeMode="stretch"/>
                        <View style={styles.relatedNewsInfo}>
                          <View style={styles.blackBack}></View>
                          <Text style={[styles.relatedNewName, styles.gold]}>Trương Ngọc Ánh được sắp xếp trao giải cho Trần Bảo Sơn</Text>
                          <Text style={[styles.relatedNewText,styles.white]}>Đêm 8/1, tại Nhà hát TP. HCM, giải thưởng “Ngôi sao xanh” đã vinh danh Trần Bảo Sơn cùng nhiều nghệ sỹ khác trong ngành công nghiệp điện ảnh và truyền hình tại Việt Nam. Trương Ngọc Ánh đã xướng tên chồng cũ trong hạng mục danh giá.</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.slide}>
                      <View style={styles.relatedNewsTag}>
                        <Image style={[styles.image,styles.relatedNewsImg]} source={require('../img/banner5.jpg')} resizeMode="stretch"/>
                        <View style={styles.relatedNewsInfo}>
                          <View style={styles.blackBack}></View>
                          <Text style={[styles.relatedNewName, styles.gold]}>Kim Tuyến bất ngờ nhận giải Cánh diều vàng</Text>
                          <Text style={[styles.relatedNewText,styles.white]}>Đêm 8/1, tại Nhà hát TP. HCM, giải thưởng “Ngôi sao xanh” đã vinh danh Trần Bảo Sơn cùng nhiều nghệ sỹ khác trong ngành công nghiệp điện ảnh và truyền hình tại Việt Nam. Trương Ngọc Ánh đã xướng tên chồng cũ trong hạng mục danh giá: Nam diễn viên điện ảnh xuất sắc nhất.</Text>
                        </View>
                      </View>
                    </View>
              </Swiper>
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
  name:{
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  text:{
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 5
  },
  author:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  image:{
    flex: 1,
    width: undefined,
    height: undefined,
    alignSelf: 'stretch',
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
  rightBlock:{
    flex: 4,
  },
  leftBlock:{
    flex: 1.2,
    textAlign: 'center',
  },
  news:{
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 20,
    width: '100%'
  },
  post:{
    width: '100%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
  },
  postImgContainer:{
    width: '100%',
    height: 300,
    borderBottomColor: '#E88E20',
    borderBottomWidth: 2,
  },
  postImg:{
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  postContent:{
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  row:{
    flex: 1,
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#E88E20',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  rightBlock:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftBlock:{
    flex: 1.5,
    justifyContent: 'center',
  },
  date:{
    marginBottom: 5,
  },
  time:{
    marginBottom: 5,
  },
  shareBtn:{
    flex: 1,
    height: '100%',
    marginHorizontal: 5,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
  },
  title:{
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
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
  relatedNews:{
    paddingHorizontal: 5,
    paddingVertical: 20,
    width: '100%',
    backgroundColor: 'black',
    height: 300,
  },
  relatedNewsTag:{
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  relatedNewsInfo:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '60%',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  white:{
    color: 'white',
  },
  relatedNewName:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  relatedNewText:{
    fontSize: 12,
    marginBottom: 5,
  },
  blackBack:{
    backgroundColor: 'black',
    opacity: 0.5,
    position: 'absolute',
    height: '110%',
    width: '110%',
    top: 0,
    left: 0,
  }
});

export default News
