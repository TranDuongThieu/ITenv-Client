import { Layout, Menu, MenuProps } from 'antd';
import React, { PropsWithChildren } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import HeaderComponent from '../../components/commons/header/header.component';
import FooterComponent from '../../components/commons/footer.component';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../utils/helpers/cn';

const { Content, Sider } = Layout;

interface DefaultLayoutProps {
  useHeader?: boolean;
  useSidebar?: boolean;
  useFooter?: boolean;
}

const DefaultLayout: React.FC<PropsWithChildren<DefaultLayoutProps>> = ({
  children,
  useHeader = false,
  useSidebar = false,
  useFooter = false
}) => {
  const { pathname } = useLocation();

  const items: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`
        };
      })
    };
  });

  return (
    <div>
      {useHeader && <HeaderComponent />}
      <div className={cn(useHeader && 'flex pb-[60px] pt-[60px] desktop:h-screen')}>
        {useSidebar && (
          <Sider width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items}
            />
          </Sider>
        )}
        <Content style={{ padding: '0 24px', minHeight: 'calc(100vh - 120px)' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: 'spring', duration: 0.5 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </Content>
      </div>
      {useFooter && <FooterComponent />}
    </div>
  );
};

export default DefaultLayout;
