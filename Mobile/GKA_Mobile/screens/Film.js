import React, { Component } from 'react'
import {Animated, View, Text , ScrollView, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import Swiper from 'react-native-swiper'

export class Film extends Component {
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
            <Image style={styles.menuIcon} source={require('../img/icon/menu.png')} resizeMode="stretch"/>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.actorInfo}>
              <View style={styles.actorAvatar}>
                  <Image style={[styles.image,styles.actorAvatarImg]} source={require('../img/film/em-chua-18-0.jpg')} resizeMode="stretch"/>
              </View>
              <View style={styles.actorInfoContent}>
                  <Text style={styles.name}>EM CHƯA 18</Text>
                  <Text style={styles.text}>Đạo diễn: Lê Thanh Sơn</Text>
                  <Text style={styles.text}>Nhà sản xuất: Charlie Nguyễn</Text>
                  <Text style={styles.text}>Diễn viên: Kiều Minh Tuấn, Kaity Nguyễn, Will 365, Châu Bùi, Quang Minh, Nguyễn Chánh Tín, Huy Khánh, Kathy Uyên, Don Nguyễn</Text>
                  <Text style={styles.text}>Doanh thu: 171 tỷ VND</Text>
              </View>
              <ScrollView style={styles.filmInfoDetail}>
                    <Text style={styles.text}>Em chưa 18 là bộ phim điện ảnh tình cảm hài hước Việt Nam của đạo diễn Lê Thanh Sơn thực hiện, do Charlie Nguyễn và hãng phim Chánh Phương sản xuất năm 2017. Phim có sự góp mặt của các diễn viên: Kiều Minh Tuấn, Kaity Nguyễn, Will 365, Quang Minh, Huy Khánh. Em chưa 18 được công chiếu vào ngày 28 tháng 04 năm 2017 tại các rạp trên toàn quốc.</Text>
                    <Text style={styles.text}>Em chưa 18 nhanh chóng trở thành phim có doanh thu phim Việt cao nhất mọi thời đại. Tại Liên hoan phim Việt Nam lần thứ 20, phim đoạt giải Bông Sen Vàng và diễn viên Kaity Nguyễn đoạt giải Nữ diễn viên chính xuất sắc.</Text>
                    <Text style={styles.text}>Giới thiệu về nội dung</Text>
                    <Text style={styles.text}>Em chưa 18 kể về “cú ngã” của tay chơi Hoàng. Là một công tử với túi tiền rủng rỉnh, gương mặt đẹp trai, thích qua đêm với các cô gái nhưng không bao giờ ngủ với cô nàng nào lần thứ hai, Hoàng vướng vào rắc rối khi cặp với cô nàng trẻ con Linh Đan. Em chưa 18 xoay quanh chuyện anh chàng “trai hư” 35 tuổi trong một lần đi bar đã có tình một đêm với một hot girl lần đầu gặp gỡ. Tuy nhiên, sáng hôm sau, anh chàng mới tá hỏa khi biết cô nàng có tên Linh Đan này chưa đủ 18 tuổi. Điều trớ trêu là Linh Đan đã quay lại video cảnh “ân ái” giữa hai người và dọa tố cáo do quan hệ với người dưới tuổi vị thành niên, nếu anh chàng tay chơi này không chịu làm bạn trai của cô. Những tình huống dở khóc dở cười đẩy cả hai xích lại gần nhau hơn. Những bí mật về nàng hot girl dần được hé lộ… Phim tạo được dấu ấn ở những tình huống hài và thẳng thắn nói đến cuộc sống hiện đại ngày nay của các cô cậu tuổi teen – không phải chỉ ở nhà làm “con ngoan trò giỏi” như trước kia mà đã biết lên bar vào cuối tuần, xài điện thoại xịn và sẵn sàng bộc lộ cảm xúc của bản thân chứ chẳng cần che giấu trước mặt cha mẹ.</Text>
                    <Text style={styles.text}>Nội dung phim</Text>
                    <Text style={styles.text}>Hoàng là một người huấn luyện viên yoga, mà cũng là một tay chơi sát gái, thường qua đêm với các cô gái. Trớ trêu thay, một lần nọ Hoàng tán tỉnh và quan hệ với một cô bé chưa đủ 18 tuổi tên Linh Đan.</Text>
                    <Text style={styles.text}>Linh Đan đã quay lại đoạn clip đêm đó và bắt buộc Hoàng phải làm bạn trai của cô. Trước đây Linh Đan từng bị bạn trai trong trường phản bội, bây giờ cô muốn dùng Hoàng để chọc tức bạn trai cũ.</Text>
                    <Text style={styles.text}>Trong thời gian giả làm bạn trai mới của Linh Đan, Hoàng đã dạy yoga cho một nữ diễn viên tên Uyên Thi. Hoàng biết được kế hoạch của Linh Đan và la mắng cô. Tony - bạn trai cũ của Linh Đan vẫn đang vui vẻ bên cô hot girl Yến, chứ không hề bị đau khổ như Linh Đan nghĩ. Linh Đan khóc và đưa điện thoại cho Hoàng xóa cái clip.</Text>
                    <Text style={styles.text}>Cứ tưởng sẽ không gặp nhau nữa, nhưng Hoàng vẫn thường xuyên đưa đón Linh Đan đi học, chở Linh Đan đi chơi. Trong trường của Linh Đan sắp tổ chức một đêm vũ hội cuối năm, Tony đang là ứng cử viên nặng ký cho chức King, còn Linh Đan và Yến đang là ứng cử viên nặng ký cho chức Queen.</Text>
                    <Text style={styles.text}>Linh Đan nói với Hoàng rằng cô đã có thai, Hoàng liền kêu cô đi phá thai nhưng cô từ chối. Ông chủ của trung tâm yoga hốt hoảng khi nghe tin Hoàng đã làm cho một đứa con gái chưa đủ 18 tuổi có thai, nên đã đuổi việc Hoàng.</Text>
                    <Text style={styles.text}>Hoàng gọi điện cho ba và nghe ông tâm sự về quá khứ của ông, sau đó Hoàng suy nghĩ lại. Hoàng mua những món đồ dành cho em bé, rồi anh cầu hôn Linh Đan. Nhưng Linh Đan tiết lộ rằng cô không hề có thai và vào đêm hôm đó cô và Hoàng chưa xảy ra chuyện gì cả.</Text>
                    <Text style={styles.text}>Hoàng nhận ra mình đã yêu Linh Đan thật rồi, anh từ chối ngủ với Uyên Thi và chạy đến đêm vũ hội. Hoàng còn gọi điện kêu ba của Linh Đan chở cô đến vũ hội. Tại đây, Tony và Linh Đan đã giành được chức King và Queen. Tony bảo Linh Đan hãy đến với tình yêu thật sự của cô. Sau đó Hoàng và Linh Đan công khai tình cảm, rồi họ hôn nhau. Bộ phim kết thúc.</Text>
              </ScrollView>
          </View>
          <View style={styles.someImgInFilm}>
            <Text style={styles.title}>Một số hình ảnh trong phim</Text>
                <Swiper style={styles.wrapper} 
                        showsButtons={true} 
                        horizontal={true} 
                        autoplay={true}
                        autoplayTimeout={8}
                        showsPagination={false}
                        nextButton={<Text style={styles.buttonText}>›</Text>}
                        prevButton={<Text style={styles.buttonText}>‹</Text>}
                        >
                    <View style={styles.slide}>
                        <View style={styles.imgContainer}>
                            <View style={styles.imgInFilm}>
                                <Image style={[styles.image,styles.someFilmImg]} source={require('../img/film/em-chua-18-14.jpg')} resizeMode="stretch" />
                            </View>
                            <View style={styles.imgInFilm}>
                                <Image style={[styles.image,styles.someFilmImg]} source={require('../img/film/em-chua-18-6.jpg')} resizeMode="stretch" />
                            </View>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.imgContainer}>
                            <View style={styles.imgInFilm}>
                                <Image style={[styles.image,styles.someFilmImg]} source={require('../img/film/em-chua-18-8.jpg')} resizeMode="stretch" />
                            </View>
                            <View style={styles.imgInFilm}>
                                <Image style={[styles.image,styles.someFilmImg]} source={require('../img/film/em-chua-18-9.jpg')} resizeMode="stretch" />
                            </View>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.imgContainer}>
                            <View style={styles.imgInFilm}>
                                <Image style={[styles.image,styles.someFilmImg]} source={require('../img/film/em-chua-18-10.jpg')} resizeMode="stretch" />
                            </View>
                            <View style={styles.imgInFilm}>
                                <Image style={[styles.image,styles.someFilmImg]} source={require('../img/film/em-chua-18-11.jpg')} resizeMode="stretch" />
                            </View>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.imgContainer}>
                            <View style={styles.imgInFilm}>
                                <Image style={[styles.image,styles.someFilmImg]} source={require('../img/film/em-chua-18-12.jpg')} resizeMode="stretch" />
                            </View>
                            <View style={styles.imgInFilm}>
                                <Image style={[styles.image,styles.someFilmImg]} source={require('../img/film/em-chua-18-15.jpg')} resizeMode="stretch" />
                            </View>
                        </View>
                    </View>
                </Swiper>
          </View>
          <View style={styles.awardAchieved}>
            <Text style={[styles.title,styles.gold]}>Các giải thưởng đã đạt được</Text>
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
                        <View style={styles.award}>
                            <View style={styles.awardImg}>
                                <Image style={[styles.image,styles.awardImgContent]} source={require('../img/film/canh-dieu-vang.png')} resizeMode="stretch" />
                            </View>
                            <View style={styles.awardContent}>
                                <View style={styles.blackBack}></View>
                                <Text style={[styles.name,styles.actorAwardName]}>Cánh diều bạc - Phim chiếu rạp - 2017</Text>
                                <Text style={[styles.text,styles.gold,styles.actorAwardName]}>Trái với dự đoán của nhiều khán giả, "Em Chưa 18" đã để hụt giải thưởng quan trọng Cánh Diều Vàng. "Cô Ba Sài Gòn" đã chiến thắng tại hạng mục này lẫn Biên kịch xuất sắc.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.award}>
                            <View style={styles.awardImg}>
                                <Image style={[styles.image,styles.awardImgContent]} source={require('../img/film/canh-dieu-vang.png')} resizeMode="stretch"/>
                            </View>
                            <View style={styles.awardContent}>
                                <View style={styles.blackBack}></View>
                                <Text style={[styles.name,styles.actorAwardName]}>Cánh Diều Vàng - 2016</Text>
                                <Text style={[styles.text,styles.gold,styles.actorAwardName]}>là bộ phim thuần túy giải trí, nhưng đã lập nên cột mốc doanh thu lịch sử là 171 tỷ đồng, qua đó tạo ra cú hích lớn cho nền điện ảnh nước nhà. Phim có hai giải là Đạo diễn (Lê Thanh Sơn) và Nam diễn viên chính xuất sắc (Kiều Minh Tuấn).</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.award}>
                            <View style={styles.awardImg}>
                                <Image style={[styles.image,styles.awardImgContent]} source={require('../img/film/bong-sen-vang.jpeg')} resizeMode="stretch"/>
                            </View>
                            <View style={styles.awardContent}>
                                <View style={styles.blackBack}></View>
                                <Text style={[styles.name,styles.actorAwardName]}>Bông sen vàng - 2017</Text>
                                <Text style={[styles.text,styles.gold,styles.actorAwardName]}>Với kỷ lục 175 tỷ đồng doanh thu phòng vé (vượt qua cả doanh thu của bộ phim Hollywood: "Kong: Skull Island") cùng nội dung hấp dẫn, "Em chưa 18" của đạo diễn Lê Thanh Sơn ngay từ đầu đã được xem là ứng cử viên sáng giá cho giải thưởng Bông Sen Vàng tại "Liên hoan phim Việt Nam lần thứ 20".</Text>
                            </View>
                        </View>
                    </View>
                </Swiper>
          </View>
          <View style={styles.comments}>
                <Text style={styles.title}>Bình luận về tác phẩm</Text>
                <View style={styles.commentContainer}>
                    <View style={styles.comment}>
                        <View style={styles.topCommentBlock}>
                          <View style={styles.likeContainer}>
                              <Text style={styles.likeBtn}>👍</Text>
                              <View style={styles.numberLikeContainer}>
                                <Text style={styles.numberLike}>5</Text>
                              </View>
                              <Text style={styles.dislikeBtn}>👎</Text>
                          </View>
                          <View style={styles.userContainer}>
                                <View style={styles.user}>
                                    <View style={styles.avatarUser}>
                                        <Image style={[styles.image,styles.userImg]} source={require('../img/nene.jpg')} resizeMode="stretch"/>
                                    </View>
                                    <Text style={styles.userText}>Trần Văn A</Text>
                                    <Text style={styles.userText}>Khán giả</Text>
                                    <Text style={styles.userText}>1.2</Text>
                                </View>
                          </View>
                        </View>
                        <View style={styles.commentContent}>
                          <Text style={styles.datetimeComment}>27-Nov-2018 8:41 AM</Text>
                          <ScrollView style={styles.commentText}>
                            <Text style={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ipsam odio assumenda et at nemo optio dicta dolor corrupti praesentium!</Text>
                          </ScrollView>   
                          <View style={styles.row}>
                            <View style={styles.half}>
                                <Text style={styles.amountOfResponse}>5 phản hồi</Text>
                            </View>
                            <View style={styles.half}>
                              <View style={styles.bottomBlock}>
                                  <TouchableOpacity style={styles.btn}>
                                      <Text style={styles.btnText}>XEM PHẢN HỒI</Text>
                                  </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        </View>
                    </View>
                </View>
                <View style={styles.commentMaker}>
                    <View style={styles.leftBlock}>  
                      <View style={styles.user}>
                          <View style={[styles.avatarUser,{height: '50%'}]}>
                              <Image style={[styles.image,styles.userImg]} source={require('../img/nene.jpg')} resizeMode="stretch"/>
                          </View>
                          <Text style={styles.userText}>Trần Văn A</Text>
                          <Text style={styles.userText}>Khán giả</Text>
                          <Text style={styles.userText}>1.2</Text>
                        </View>
                    </View>
                    <View style={styles.rightBlock}>
                      <TextInput style={styles.commentArea} 
                        multiline = {true} 
                        numberOfLines = {4}>
                      </TextInput>
                      <View style={[styles.bottomBlock,{paddingHorizontal: 20}]}>
                          <TouchableOpacity style={styles.btn}>
                              <Text style={styles.btnText}>BÌNH LUẬN</Text>
                          </TouchableOpacity>
                      </View>
                    </View>
                </View>
          </View>
          <View style={styles.otherActor}>
            <Text style={[styles.title,styles.gold]}>Một số tác phẩm khác</Text>
            <Swiper style={styles.wrapper} 
                    showsButtons={false} 
                    horizontal={true} 
                    autoplay={true}
                    autoplayTimeout={5}
                    showsPagination={false}
                    >
                    <View style={styles.slide}>
                        <View style={styles.otherActorTag}>
                            <View style={styles.avatarOtherActor}>
                                <Image style={[styles.image,styles.otherActorImg]} source={require('../img/film/toi-thay-hoa-vang-tren-co-xanh.jpg')} resizeMode="stretch"/>
                            </View>
                            <View style={styles.nameBlock}>
                              <Text style={[styles.name,styles.gold,styles.actorOtherName]}>TÔI THẤY HOA VÀNG TRÊN CỎ XANH</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.otherActorTag}>
                            <View style={styles.avatarOtherActor}>
                                <Image style={[styles.image,styles.otherActorImg]} source={require('../img/film/nguoi-phan-xu.jpg')} resizeMode="stretch"/>
                            </View>
                            <View style={styles.nameBlock}>
                              <Text style={[styles.name,styles.gold,styles.actorOtherName]}>NGƯỜI PHÁN XỬ</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.otherActorTag}>
                            <View style={styles.avatarOtherActor}>
                                <Image style={[styles.image,styles.otherActorImg]} source={require('../img/film/co-ba-sai-gon.jpg')} resizeMode="stretch"/>
                            </View>
                            <View style={styles.nameBlock}>
                              <Text style={[styles.name,styles.gold,styles.actorOtherName]}>CÔ BA SÀI GÒN</Text>
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
  image:{
    flex: 1,
    width: undefined,
    height: undefined,
    alignSelf: 'stretch',
  },
  actorInfo:{
    width:'100%',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    paddingBottom: 20,
  },
  actorAvatar:{
    width: '100%',
    alignItems: 'center',
    height: 250,
    paddingVertical: 10
  },
  actorAvatarImg:{
    borderRadius: 10,
  },
  name:{
    fontSize: 26,
    color: '#E88E20',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  filmInfoDetail:{
    width: '100%',
    height: 300,
    marginTop: 10,
  },
  someImgInFilm:{
    height: 400,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderTopColor: '#c9c9c9',
    borderTopWidth: 1,
  },
  imgContainer:{
    width: '100%',
  },
  imgInFilm:{
    width: '100%',
    height: '50%',
    padding: 10,
  },
  someFilmImg:{
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
  },
  awardAchieved:{
    height: 500,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: 'black',
    paddingBottom: 25
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
  award:{
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  awardImg:{
    height: '100%',
    borderRadius: 10,
    zIndex: 1
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
    fontWeight: 'bold',
  },
  awardImgContent:{
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
  },
  awardContent:{
    position: 'absolute',
    bottom: '5%',
    left: 0,
    width: '100%',
    zIndex: 10,
  },
  blackBack:{
    position: 'absolute',
    backgroundColor: 'black',
    width: '110%',
    height: '100%',
    top: '-5%',
    opacity: 0.5,
  },
  gold:{
    color: '#E88E20',
  },
  actorAwardName:{
    textAlign: 'center',
  },
  otherActor:{
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: 'black',
    height: 350,
  },
  otherActorTag:{
    width: '100%',
    borderRadius: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
  },
  avatarOtherActor:{
    width: '100%',
    height: '80%'
  },
  otherActorImg:{
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  nameBlock:{
    width: '100%',
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  actorOtherName:{
    paddingTop: 10,
    fontSize: 18,
  },
  comments:{
    width:'100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  comment: {
    width: '100%',
    height: 400,
    flex: 1,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
  },
  topCommentBlock:{
    width: '100%',
    height: '40%',
    flex: 1,
    flexDirection: 'row',
  },
  likeContainer:{
    flex:1,
    paddingTop: 20,
  },
  likeBtn:{
    textAlign:'center'
  },
  dislikeBtn:{
    textAlign:'center'
  },
  numberLikeContainer:{
    width: '100%',
    alignItems: 'center',
  },
  numberLike:{
    width: 50,
    height: 50,
    lineHeight: 50,
    textAlign: 'center',
    borderRadius: 50,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  userContainer:{
    flex: 2,
  },
  avatarUser:{
    width: '100%',
    height: '65%'
  },
  btn:{
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 25,
    marginTop: 10,
  },
  btnText:{
    color: 'black',
    textAlign: 'center',
  },
  row:{
    flex: 1,
    flexDirection: 'row',
  },
  half:{
    flex: 1,
    justifyContent: 'center',
  },
  userText:{
    fontSize: 16,
  },
  commentContent:{
    flex: 1,
    width: '100%',
    height: '60%',
  },
  commentText:{
    height: '42%'
  },
  datetimeComment:{
    marginVertical: 5,
  },
  commentMaker:{
    width: '100%',
    height: 300,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  commentArea:{
    height: '70%',
    backgroundColor: '#f1f1f1',
    marginLeft: 5,
    borderRadius: 10,
  },
  leftBlock:{
    flex: 1,
  },
  rightBlock:{
    flex: 2,
  }
});

export default Film