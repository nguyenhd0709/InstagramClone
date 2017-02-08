import Header from './components/Header';
import Content from './components/Content';
import Profile from './components/Profile';
import Index from './components/Index';
import Welcome from './components/Welcome';
import LoginPractice from './components/LoginPractice';

export default {
  Welcome: {
    index: 'welcome',
    component: Welcome
  },
  Index: {
    index: 'index',
    component: Index
  },
  Header : {
    index: 'header',
    component: Header
  },
  Content : {
    index:' content',
    component: Content
  },
  LoginPractice:{
    index: 'login',
    component: LoginPractice
  },
  Profile: {
    index: 'profile',
    component: Profile
  }
};
