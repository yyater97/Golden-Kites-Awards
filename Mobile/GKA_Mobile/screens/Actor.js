import React, { Component } from 'react'
import {Animated, View, Text , ScrollView, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import Swiper from 'react-native-swiper'

export class Actor extends Component {
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
                  <Image style={[styles.image,styles.actorAvatarImg]} source={require('../img/actor/nha-phuong.jpg')} resizeMode="stretch"/>
              </View>
              <View style={styles.actorInfoContent}>
                  <Text style={styles.name}>Nhã Phương</Text>
                    <Text style={styles.text}>Tên thật: Trần Thị Nhã Phương</Text>
                    <Text style={styles.text}>biệt danh: Nabi Nhã Phương</Text>
                    <Text style={styles.text}>Ngày sinh: ngày 20 tháng 5 năm 1990</Text>
                    <Text style={styles.text}>Cô được biết đến qua các phim như Những thiên thần áo trắng, Gia đình số đỏ, Hoa nắng, Cô nàng nặng cân, Quả tim máu, Vừa đi vừa khóc, Tuổi thanh xuân, Ngày ấy mình đã yêu...</Text>
                    <Text style={styles.text}>Nhã Phương quê tại Đắk Lắk. Cô học tại Đại học Sân khấu Điện ảnh TPHCM, từng tham gia đóng một số phim. Nhã Phương được khán giả biết đến qua phim ngắn “Xin lỗi, anh chỉ là thằng bán bánh giò” năm 2013. Nhã Phương sau đó tham gia các phim Tuổi thanh xuân, Quả tim máu; vai diễn chị Thêu trong Vừa đi vừa khóc đã giúp cô trở thành một trong những diễn viên trẻ triển vọng của điện ảnh Việt Nam.</Text>
              </View>
          </View>
          <View style={styles.artist}>
              <Text style={styles.title}>Tóm tắt quá trình hoạt động nghệ thuật</Text>
              <View style={styles.contentArtist}>
                  <Text style={styles.textTitle}>Ban đầu</Text>
                  <Text style={styles.text}>Các phim Nhã Phương tham gia có thể kể đến như Những Thiên Thần Áo Trắng, Hoàng Tử Xấu Trai, Hoa Nắng, Trường Nội Trú…</Text>    
                  <Text style={styles.text}>Góp mặt trong những bộ phim truyền hình này, Nhã Phương đóng vai đúng với lứa tuổi cô lúc bấy giờ - một học sinh. Tuy chỉ là những vai nhỏ, nhưng cô cũng đã thể hiện được tiềm năng diễn xuất của mình. Thời điểm đó, Nhã Phương diễn cảnh khóc đã rất có hồn.</Text>
                  <Text style={styles.text}>Sau đó, cô tham gia hai bộ phim với tuýp nhân vật khác hẳn với những vai trước đó. Một là quận chúa trong Anh Chàng Vượt Thời Gian và một là cô gái miền biển ngây thơ, trong sáng trong Cát Nóng. Hai phim này đều xếp vào hàng “thảm họa” nhưng diễn xuất của Nhã Phương vẫn được công nhận.</Text>
                  <Text style={styles.textTitle}>Vụt sáng sau "Xin lỗi, anh chỉ là thằng bán bánh giò"</Text>
                  <Text style={styles.text}>Dù tham gia nhiều phim như vậy nhưng phải mãi đến khi tham gia phim ngắn Xin Lỗi, Anh Chỉ Là Thằng Bán Bánh Giò, Nhã Phương mới thực sự trở nên nổi tiếng. Cô vào vai cô gái bán bánh tráng, có một tình yêu đẹp và buồn với chàng trai bán bánh giò.</Text>
                  <Text style={styles.text}>Ngay sau khi bộ phim được tung lên mạng Youtube, sức hút và sự lan truyền của bộ phim có lẽ cũng khiến chính Nhã Phương kinh ngạc. Cô được người xem ưu ái gọi với cái tên “hot girl bánh tráng” và từ một diễn viên không mấy tiếng tăm, Nhã Phương nổi tiếng và có thêm nhiều người hâm mộ. Tuy nhiên, thành công này cũng bắt nguồn từ diễn xuất chân thực, cảm động của Nhã Phương trong phim.</Text>
                      
                  <Text style={styles.textTitle}>Thành công với "Vừa đi vừa khóc", "Quả tim máu" và các dự án phim khác</Text>
                  <Text style={styles.text}>Sau Xin Lỗi, Anh Chỉ Là Thằng Bán Bánh Giò, Nhã Phương cứ thế thẳng tiến trong sự nghiệp diễn xuất của mình. Cô liên tiếp gặt hái thành công khi tham gia Vừa Đi Vừa Khóc và Quả Tim Máu.</Text>
                      
                  <Text style={styles.text}>Ở phim truyền hình Vừa Đi Vừa Khóc, Nhã Phương vào vai Thêu - cô gái đanh đá, mê trai điên cuồng, luôn bám theo trai (Minh Hằng) để chăm sóc. Nhã Phương đã thể hiện một Thêu lém lỉnh, hài hước, đôi lúc lại rất vô duyên khiến khán giả vô cùng thích thú. Có những giai đoạn, vai Thêu của Nhã Phương còn nổi bật hơn cả cặp nhân vật chính.</Text>
                      
                  <Text style={styles.text}>Nhã Phương nhận lời tham gia phim kinh dị Quả Tim Máu, Nhã Phương chứng tỏ cô đã trưởng thành trong diễn xuất. Có thể nói, đây là vai diễn nặng ký nhất của Nhã Phương từ trước tới giờ. Bởi vai diễn này không nhí nhảnh và tươi vui như dạng vai quen thuộc của cô, Quả Tim Máu đòi hỏi Nhã Phương phải diễn có chiều sâu hơn. Và một lần nữa, Nhã Phương lại thành công với khả năng diễn xuất của mình.</Text>
                      
                  <Text style={styles.textTitle}>Nỗ lực không ngừng nghỉ để mang đến thành công</Text>
                  
                  <Text style={styles.text}>Cô và bạn diễn trẻ hơn bốn tuổi Kang Tae Oh đã trở thành cặp đôi làm mưa làm gió trong phim Tuổi thanh xuân. Cả cô và Kang Tae Oh đều nhận được giải nam, nữ diễn viên ấn tượng. Dù hơn tuổi bạn diễn nhưng rất khó để nhận ra điều đó vì sự tươi trẻ của cô. Ngoài ra, cô còn hi sinh rất nhiều:</Text>        
                  
                  <Text style={styles.textList}>❋ Cái tát của mẹ Phong (NSND Minh Châu) trong phim. Thực chất ở ngoài cũng chẳng nhẹ hơn là bao do cô chấp nhận để mang lại hiệu quả tốt nhất cho bộ phim.</Text>
                  
                  <Text style={styles.textList}>❋ Ai cũng nghĩ rằng được đi nước ngoài rất thích nhưng chẳng mấy ai biết được khi quay ở Hàn Quốc và Nhật Bản cô phải làm việc tới 20 tiếng và chịu đựng cái rét dưới 0 độ.</Text>       
                  
                  <Text style={styles.textList}>❋ Trong cảnh quay Cynthia lái xe đâm Linh (Nhã Phương), diễn biến phim là khi xe của Cynthia chưa đi tới thì Junsu đã kịp thời xuất hiện đẩy Linh ra. Tuy nhiên trong một lần quay hỏng, bạn diễn nhấn ga quá đà khiến xe không kịp dừng và đâm vào người Nhã Phương. Nữ diễn viên bất ngờ và ngã bật ra sau. </Text>
                  
                  <Text style={styles.textList}>❋ Để có những cảnh quay chân thực nhất, các diễn viên gần như diễn thật ở những cảnh xung đột, xô đẩy. Trong phim Linh bị "hành" như thế nào thì ngoài đời Nhã Phương cũng chịu khổ y như vậy. Để có được cảnh quay "anh hùng cứu mỹ nhân" này, Nhã Phương đã chịu nhiều cú xô khá mạnh của Kang Tae Oh. </Text>
                  
                  <Text style={styles.textList}>❋ Khi quay cảnh Linh bị người đi đường va vào làm rơi điện thoại, Nhã Phương đã cho đoàn làm phim mượn chính chiếc điện thoại của mình. Vì quay đi quay lại nhiều lần cảnh rơi nên chiếc điện thoại của cô nàng đã bị hỏng khi quay xong. Nữ diễn viên chia sẻ rằng mình vô cùng hối hận vì mang điện thoại riêng đi quay và "bắt đền" đoàn làm phim gấp đôi.</Text>
                  
                  <Text style={styles.textList}>❋ Cứ tưởng phải chịu nhiều khó khăn như thế nhưng Nhã Phương vẫn là cô gái đáng ghen tỵ vì có nhiều cảnh quay tình tứ với anh chàng đẹp trai Kang Tae Oh, không ngờ ngay cả cảnh lãng mạn cũng không hề dễ dàng. Để có được nụ hôn cực ngọt ngào bên bờ sông Hàn trên phim, cả hai đã quay liên tục từ lúc chập tối đến tận đêm. Mỗi khi kết thúc cảnh quay, cả hai người nhanh chóng nhìn sang hướng khác nhau, khuôn mặt lộ rõ vẻ mệt mỏi phờ phạc. Khác với "phản ứng hóa học" tình cảm trên phim, Nhã Phương và Kang Tae Oh ngoài đời có vẻ mệt đến nỗi không thể tình tứ nổi.</Text>
              </View>
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
                                <Image style={[styles.image,styles.awardImgContent]} source={require('../img/actor/nha-phuong-canh-dieu-vang-2017.jpg')} resizeMode="stretch" />
                            </View>
                            <View style={styles.awardContent}>
                                <View style={styles.blackBack}></View>
                                <Text style={[styles.name,styles.actorAwardName]}>Cánh Diều Vàng - 2017</Text>
                                <Text style={[styles.text,styles.gold,styles.actorAwardName]}>Giải nữ diễn viên chính xuất sắc nhất</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.award}>
                            <View style={styles.awardImg}>
                                <Image style={[styles.image,styles.awardImgContent]} source={require('../img/actor/nha-phuong-canh-dieu-vang-2016.jpg')} resizeMode="stretch"/>
                            </View>
                            <View style={styles.awardContent}>
                                <View style={styles.blackBack}></View>
                                <Text style={[styles.name,styles.actorAwardName]}>Cánh Diều Vàng - 2016</Text>
                                <Text style={[styles.text,styles.gold,styles.actorAwardName]}>Giải nữ diễn viên chính xuất sắc nhất</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.award}>
                            <View style={styles.awardImg}>
                                <Image style={[styles.image,styles.awardImgContent]} source={require('../img/actor/nha-phuong-mai-vang-2016.jpg')} resizeMode="stretch"/>
                            </View>
                            <View style={styles.awardContent}>
                                <View style={styles.blackBack}></View>
                                <Text style={[styles.name,styles.actorAwardName]}>Giải Mai Vàng - 2016</Text>
                                <Text style={[styles.text,styles.gold,styles.actorAwardName]}>Giải nghệ sĩ của năm</Text>
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
            <Text style={[styles.title,styles.gold]}>Một số diễn viên khác</Text>
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
                                <Image style={[styles.image,styles.otherActorImg]} source={require('../img/actor/truong-giang.jpg')} resizeMode="stretch"/>
                            </View>
                            <View style={styles.nameBlock}>
                              <Text style={[styles.name,styles.gold,styles.actorOtherName]}>TRƯỜNG GIANG</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.otherActorTag}>
                            <View style={styles.avatarOtherActor}>
                                <Image style={[styles.image,styles.otherActorImg]} source={require('../img/actor/ngo-thanh-van.jpg')} resizeMode="stretch"/>
                            </View>
                            <View style={styles.nameBlock}>
                              <Text style={[styles.name,styles.gold,styles.actorOtherName]}>LÝ HẢI</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.otherActorTag}>
                            <View style={styles.avatarOtherActor}>
                                <Image style={[styles.image,styles.otherActorImg]} source={require('../img/actor/ly-hai.jpg')} resizeMode="stretch"/>
                            </View>
                            <View style={styles.nameBlock}>
                              <Text style={[styles.name,styles.gold,styles.actorOtherName]}>NGÔ THANH VÂN</Text>
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
  artist:{
    width:'100%',
    paddingHorizontal: 10,
  },
  contentArtist:{
    width:'100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
  },  
  textTitle:{
    fontSize: 17,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  textList:{
    fontSize: 15,
    marginLeft: 10,
  },
  awardAchieved:{
    height: 400,
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
    top: '42%',
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

export default Actor