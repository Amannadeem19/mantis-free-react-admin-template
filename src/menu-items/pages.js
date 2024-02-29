// assets
import {CodepenCircleOutlined, LoginOutlined, ProfileOutlined,
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,

} from '@ant-design/icons';
// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  CodepenCircleOutlined,
  AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'eduConnect',
  title: 'EduConnect.io',
  type: 'group',
  children: [
    {
      id: 'classroom',
      title: 'Classroom',
      type: 'item',
      url: '/classroom',
      icon: icons.CodepenCircleOutlined,
      // target: true
    },
    {
      id: 'classdetails',
      // title: 'Classroom',
      type: 'item',
      url: '/c',
      // icon: icons.CodepenCircleOutlined,
      // target: true
    },
    {
      id: 'GeneralAnnouncements',
      title: 'GeneralAnnouncements',
      type: 'item',
      url: '/announcements',
      icon: icons.ProfileOutlined,
      // target: true
    },
    {
      id: 'Timetable',
      title: 'Time Table',
      type: 'item',
      url: '/schedule',
      icon: icons.LoginOutlined,
      // target: true
    },
    {
      id: 'Attendance',
      title: 'Attendance',
      type: 'item',
      url: '/attendance',
      icon: icons.BarcodeOutlined,
      // target: true
    },
    {
      id: 'Marks',
      title: 'Marks',
      type: 'item',
      url: '/marks',
      icon: icons.BgColorsOutlined,
      // target: true
    },
    {
      id: 'hub',
      title: 'Opportunity Hub',
      type: 'item',
      url: '/ohub',
      icon: icons.AppstoreAddOutlined,
      // target: true
    },
  ]
};

export default pages;
