import Home from '../screens/Home';
import Actor from '../screens/Actor';
import Film from '../screens/Film';
import History from '../screens/History';
import ListFilm from '../screens/ListFilm';
import Login from '../screens/Login';
import News from '../screens/News';
import Signup from '../screens/Signup';
import {createDrawerNavigator, createStacknavigation, createAppContainer} from 'react-navigation';

const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen: Home,
        navigationOptions:{
            title: 'Trang chủ',
            header: null,
        }
    },
    Actor:{
        screen: Actor,
        navigationOptions:{
            title: 'Diễn viên',
            header: null,
        }
    },
    Film:{
        screen: Film,
        navigationOptions:{
            title: 'Trang phim',
            header: null,
        }
    },
    History:{
        screen: History,
        navigationOptions:{
            title: 'Lịch sử',
            header: null,
        }
    },
    ListFilm:{
        screen: ListFilm,
        navigationOptions:{
            title: 'Danh sách phim hot',
            header: null,
        }
    },
    News:{
        screen: News,
        navigationOptions:{
            title: 'Tin tức',
            header: null,
        }
    },
    Login:{
        screen: Login,
        navigationOptions:{
            title: 'Đăng nhập',
            header: null,
        }
    },
    Signup:{
        screen: Signup,
        navigationOptions:{
            title: 'Đăng ký',
            header: null,
        }
    },
},{
    initialRouteName: 'Home',
});

export const RootNav = createAppContainer(DrawerNavigator);
