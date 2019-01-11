import React, { Component } from 'react'
import {View, Text , ScrollView, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import Swiper from 'react-native-swiper'

export class ListFilm extends Component {
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
          <View style={styles.listFilm}>
            <View style={styles.header}>
              <Text style={styles.headerText}>DANH SÁCH PHIM HOT</Text>
            </View>
            <View style={styles.rowList}>
              <View style={styles.leftBlock}>
                <Image style={[styles.image,styles.bannerImg]} source={require('../img/nham-mat-thay-mua-he.jpg')} resizeMode="stretch"/>
              </View>
              <View style={styles.rightBlock}>
                <Text style={styles.name}>Nhắm mắt thấy mùa hè</Text>
                <Text style={styles.text}>Đánh giá: 5⭐</Text>
                <ScrollView style={styles.filmContent}>
                  <Text style={styles.text}>Nhắm mắt thấy mùa hè có thể nói là phim nghệ thuật duy nhất trong số phim ra rạp nửa đầu năm. Đã có ai đó đánh đồng phim này vào thể loại phim “về tình yêu giới trẻ”, chung một “rọ” với những phim tình cảm khác. Song nói nó là phim tình cảm không sai, nhưng nếu không mở ngoặc thêm thì không đúng.</Text>
                  <Text style={styles.text}>Dù là phim tình cảm, Nhắm mắt thấy mùa hè trên tầm hầu hết những tác phẩm cùng thể loại ra mắt trong suốt thập niên qua như Thần tượng (Nguyễn Quang Huy), 12 chòm sao: Vẽ đường cho yêu chạy và 100 ngày bên em (Vũ Ngọc Phượng), Cô gái đến từ hôm qua (Phan Gia Nhật Linh), Cho em gần anh thêm chút nữa (Văn Công Viễn)…</Text>
                </ScrollView>
                <View style={styles.bottomBlock}>
                    <TouchableOpacity style={styles.btn} onPress={()=>{this.props.navigation.navigate('Film', null);}}>
                        <Text style={styles.btnText}>XEM THÊM</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.rowList}>
              <View style={styles.leftBlock}>
                <Image style={[styles.image,styles.bannerImg]} source={require('../img/thang-nam-ruc-ro.jpg')} resizeMode="stretch"/>
              </View>
              <View style={styles.rightBlock}>
                <Text style={styles.name}>Tháng năm rực rỡ</Text>
                <Text style={styles.text}>Đánh giá: 5⭐</Text>
                <ScrollView style={styles.filmContent}>
                  <Text style={styles.text}>Là phim remake từ Sunny của Hàn Quốc, với cá nhân người viết, Tháng năm rực rỡ của “Dũng khùng” hay hơn bản gốc. Kịch bản Việt hoá tinh chỉnh khéo léo (cắt bớt nhân vật thừa, thay đổi hợp lý profile một số nhân vật, lồng ghép câu chuyện vào đời sống xã hội Việt Nam một cách thông minh), lấy bối cảnh đặc sắc thu hút hơn hẳn bối cảnh tầm thường ở bản gốc, diễn viên xinh trai đẹp gái có diễn xuất nhỉnh hơn diễn viên Hàn, quay phim có nhiều sáng tạo (đoạn cầm ô hát dưới mưa tribute Singing in the rain, đoạn chuyển cảnh Hiểu Phương bé và Hiểu Phương lớn giữa trời mưa Đà Lạt, đoạn dàn cảnh trận hỗn chiến của 2 nhóm nữ quái giữa trận đàn áp biểu tình trước 75)… là những điểm cộng góp phần làm nên thành công của bộ phim.</Text>
                </ScrollView>
                <View style={styles.bottomBlock}>
                    <TouchableOpacity style={styles.btn} onPress={()=>{this.props.navigation.navigate('Film', null);}}>
                        <Text style={styles.btnText}>XEM THÊM</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.rowList}>
              <View style={styles.leftBlock}>
                <Image style={[styles.image,styles.bannerImg]} source={require('../img/ong-kinh-sat-nhan.jpg')} resizeMode="stretch"/>
              </View>
              <View style={styles.rightBlock}>
                <Text style={styles.name}>Ống kính sát nhân</Text>
                <Text style={styles.text}>Đánh giá: 4.8⭐</Text>
                <ScrollView style={styles.filmContent}>
                  <Text style={styles.text}>Ống kính sát nhân là phim đầu tay của đạo diễn trẻ Nguyễn Hữu Hoàng. Yếu tố “trẻ” và “đầu tay” này khiến anh nhận được nhiều bình luận dạng xoa đầu, sau khi phân tích khen – chê, giống với nhận xét của nhiều người review hay cả giới làm nghề khi nói về Nhắm mắt thấy mùa hè của Cao Thuý Nhi và các cộng sự của cô.</Text>
                  <Text style={styles.text}>Nói một cách bình đẳng, 2 bộ phim này không hề cần những cái nhìn ưu ái vẫn có giá trị đáng kể (độc lập với yếu tố tuổi tác). Nhắm mắt thấy mùa hè như đã nói, nó trưởng thành và hoàn thiện hơn nhiều tác phẩm của những người lớn tuổi hay kinh nghiệm hơn.</Text>
                </ScrollView>
                <View style={styles.bottomBlock}>
                    <TouchableOpacity style={styles.btn} onPress={()=>{this.props.navigation.navigate('Film', null);}}>
                        <Text style={styles.btnText}>XEM THÊM</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.rowList}>
              <View style={styles.leftBlock}>
                <Image style={[styles.image,styles.bannerImg]} source={require('../img/100-ngay-ben-em.jpg')} resizeMode="stretch"/>
              </View>
              <View style={styles.rightBlock}>
                <Text style={styles.name}>100 ngày bên em</Text>
                <Text style={styles.text}>Đánh giá: 4.5⭐</Text>
                <ScrollView style={styles.filmContent}>
                  <Text style={styles.text}>100 ngày bên emlà một bộ phim ngôn tình nhưng cũng có ý tứ, duyên dáng, văn minh và có công xoá đi mác “hotgirl đóng phim” cho gương mặt tiềm năng của thế hệ diễn viên mới trong thời điểm hiện tại – Khả Ngân. Xét mặt bằng phim từ đầu năm đến giờ, thì phim này vẫn thuộc Top đầu.</Text>
                  <Text style={styles.text}>Vũ Ngọc Phượng là một đạo diễn được phát hiện từ thời phim ngắn Yxineff – liên hoan phim ngắn trực tuyến khá nổi, hoạt động trong giai đoạn 2010 – 2014. Anh được biết đến ngay từ năm thi đầu tiên với bộ phim L.O.V.E được giải Trái tim hồng do khán giả bình chọn.</Text>
                </ScrollView>
                <View style={styles.bottomBlock}>
                    <TouchableOpacity style={styles.btn} onPress={()=>{this.props.navigation.navigate('Film', null);}}>
                        <Text style={styles.btnText}>XEM THÊM</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.rowList}>
              <View style={styles.leftBlock}>
                <Image style={[styles.image,styles.bannerImg]} source={require('../img/lat-mat.jpg')} resizeMode="stretch"/>
              </View>
              <View style={styles.rightBlock}>
                <Text style={styles.name}>Lật mặt: Ba chàng khuyết</Text>
                <Text style={styles.text}>Đánh giá: 4.2⭐</Text>
                <ScrollView style={styles.filmContent}>
                  <Text style={styles.text}>Ba chàng khuyết có kịch bản khá lớp lang, cài cắm nhiều lần twist rất hợp lý, bất ngờ và thú vị (đặc biệt là so với twist trong phim Việt đều thường ngớ ngẩn, vô lý, tuỳ tiện như kiểu Lôi Báo của Victor Vũ hay Ở đây có nắng của Việt Linh). Riêng việc nghĩ ra một câu chuyện về một bộ ba khuyết tật: câm điếc – mù loà – bại liệt cũng là sự mới mẻ trong đa phần các câu chuyện kể chẳng mấy đặc sắc của điện ảnh Việt.</Text>
                  <Text style={styles.text}>Phim giải trí tốt (dù có thể có người không thích các mảng miếng hài trong phim), diễn xuất ổn (trừ em gái Thái Lan), nói chung là thuộc diện phim đáng xem nhất nửa đầu năm. Với ba phim đều đại thắng doanh thu: 72 tỷ – 52 tỷ và 85,5 tỷ, vừa viết kịch bản vừa đạo diễn vừa sản xuất, kể Lý Hải cũng không vừa.</Text>
                </ScrollView>
                <View style={styles.bottomBlock}>
                    <TouchableOpacity style={styles.btn} onPress={()=>{this.props.navigation.navigate('Film', null);}}>
                        <Text style={styles.btnText}>XEM THÊM</Text>
                    </TouchableOpacity>
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
  scroll:{
    flex: 1,
  },
  image:{
    flex: 1,
    width: undefined,
    height: undefined,
    alignSelf: 'stretch',
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
  listFilm:{
    width: '100%',
    height: '50%',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  header:{
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: '#E88E20',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,   
  },
  headerText:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  rowList:{
    flex: 1,
    flexDirection: 'row',
    height: 250,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
  },
  rightBlock:{
    flex: 1,
    padding: 5,
  },
  leftBlock:{
    flex: 1,
  },
  bottomBlock: {
    paddingHorizontal: 20,
  },
  name:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#E88E20',
  }
});

export default ListFilm
