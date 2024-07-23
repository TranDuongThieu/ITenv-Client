import { UserOutlined } from '@ant-design/icons';
import { Anchor, Avatar, Badge, Form, Input, Popover, Typography } from 'antd';
import { AnchorLinkItemProps } from 'antd/es/anchor/Anchor';
import React, { ReactNode, SetStateAction, useState } from 'react';
import { PiBell, PiMessengerLogo, PiMoon, PiSun } from 'react-icons/pi';
import logo from '../../../assets/logo/logo.png';
import './header.style.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { HiOutlineUsers } from 'react-icons/hi2';
import { IoSearchOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/app/hook';
import { paths } from '../../../routes/paths';
import { setTheme, THEME } from '../../../redux/app/app.slice';
import FriendsComponent from './components/Friends/Friends.component';
import MessageComponent from './components/Message/Message.component';
import NotificationComponent from './components/Notification/Notification.component';
import SettingsComponent from './components/Settings/Settings.component';
import { TooltipPlacement } from 'antd/es/tooltip';

interface ComponentPopoverProps {
  content: ReactNode;
  isOpen: boolean;
  setOpen: (value: SetStateAction<boolean>) => void;
  icon: ReactNode;
  placement: TooltipPlacement;
}

const ComponentPopover: React.FC<ComponentPopoverProps> = ({ content, isOpen, setOpen, icon, placement }) => (
  <Popover
    rootClassName="popover-wrapper"
    placement={placement || 'bottom'}
    content={content}
    trigger="click"
    arrow={false}
    className="popover-notification cursor-pointer"
    overlayClassName="max-w-[45rem] max-h-[40rem] p-0"
    autoAdjustOverflow={false}
    open={isOpen}
    onOpenChange={(visible) => setOpen(visible)}
  >
    <Badge count={1}>{icon}</Badge>
  </Popover>
);

const HeaderComponent: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [friendsVisible, setFriendsVisible] = useState(false);
  const [messagesVisible, setMessagesVisible] = useState(false);
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const [settingsVisible, setSettingsVisible] = useState(false);
  const { theme } = useAppSelector((state) => state.app);

  const menuItems: AnchorLinkItemProps[] = [
    {
      key: 'problems',
      title: 'Problems',
      href: '/code-editor'
    },
    {
      key: 'contest',
      title: 'Contest',
      href: '#contest'
    },
    {
      key: 'discuss',
      title: 'Discuss',
      href: '#discuss'
    }
  ];

  const handleSearch = (values: any) => {
    console.log(values);
  };

  const toggleTheme = () => {
    dispatch(setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));
  };

  return (
    <div className="header-wraper fixed top-0 z-10 h-[60px] w-full border bg-white shadow-md">
      <div className="flex h-full w-full items-center justify-between px-5">
        <div onClick={() => navigate(paths.home)} className="flex cursor-pointer items-center gap-2">
          <img src={logo} className="h-[32px] w-[32px]" style={{ userSelect: 'none' }} alt="Logo" />
          <h6 className="font-mono text-[2.2rem] font-extrabold" style={{ userSelect: 'none' }}>
            ITenv
          </h6>
        </div>
        <div className="anchor-wrapper">
          <Anchor direction="horizontal" items={menuItems} />
        </div>
        <Form onFinish={handleSearch}>
          <Form.Item style={{ margin: 0 }} name={'search'}>
            <Input prefix={<IoSearchOutline />} placeholder="Search users and blogs..." size="middle" />
          </Form.Item>
        </Form>
        <div className="flex items-center gap-8">
          <div className="flex cursor-pointer duration-200 hover:text-[#64f6ee]" onClick={toggleTheme}>
            <AnimatePresence initial={false} mode="wait">
              {theme === THEME.LIGHT ? (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <PiSun size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <PiMoon size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <ComponentPopover
            content={<FriendsComponent />}
            isOpen={friendsVisible}
            setOpen={setFriendsVisible}
            icon={
              <HiOutlineUsers
                size={28}
                color={!friendsVisible ? '#000000e0' : '#4bc0f1'}
                className="duration-200 hover:text-[#64f6ee]"
              />
            }
            placement="bottomRight"
          />
          <ComponentPopover
            content={<MessageComponent />}
            isOpen={messagesVisible}
            setOpen={setMessagesVisible}
            icon={
              <PiMessengerLogo
                size={25}
                color={!messagesVisible ? '#000000e0' : '#4bc0f1'}
                className="duration-200 hover:text-[#64f6ee]"
              />
            }
            placement="bottomRight"
          />
          <ComponentPopover
            content={<NotificationComponent />}
            isOpen={notificationsVisible}
            setOpen={setNotificationsVisible}
            icon={
              <PiBell
                size={25}
                color={!notificationsVisible ? '#000000e0' : '#4bc0f1'}
                className="duration-200 hover:text-[#64f6ee]"
              />
            }
            placement="bottomRight"
          />
          <Popover
            placement="bottomRight"
            content={<SettingsComponent />}
            trigger="click"
            arrow={false}
            className="popover-notification cursor-pointer"
            overlayClassName="max-w-[45rem] max-h-[40rem] p-0"
            autoAdjustOverflow={false}
            open={settingsVisible}
            onOpenChange={(visible) => setSettingsVisible(visible)}
          >
            <Avatar size={32} icon={<UserOutlined />} />
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
