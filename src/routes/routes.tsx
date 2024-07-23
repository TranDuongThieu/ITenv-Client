/* eslint-disable react-refresh/only-export-components */
import LazyLoadComponent from '../components/commons/LazyComponent';
import { paths } from './paths';
export type RouteType = {
  element: React.ReactNode;
  layout?: any;
  useHeader?: boolean;
  useSidebar?: boolean;
  useFooter?: boolean;
  path: string;
  private?: 'public' | 'auth' | 'admin';
};
const LazyHomePage = LazyLoadComponent(() => import('../pages/Public/Home/HomePage'))(true);

const LazyEditorPage = LazyLoadComponent(() => import('../pages/EditorPage'))(true);
const LazyLoginPage = LazyLoadComponent(() => import('../pages/Authentication/LoginPage/LoginPage'))(true);
const LazySignupPage = LazyLoadComponent(() => import('../pages/Authentication/SignupPage'))(true);
const LazyForgetPasswordPage = LazyLoadComponent(() => import('../pages/Authentication/ForgetPassword'))(true);

export const PAGE_ROUTES: RouteType[] = [
  {
    path: paths.editor,
    element: <LazyEditorPage />,
    layout: null,
    private: 'public',
    useHeader: true,
    useSidebar: true,
    useFooter: true
  },
  {
    path: paths.home,
    element: <LazyHomePage />,
    layout: null,
    private: 'public',
    useHeader: true,
    useSidebar: true,
    useFooter: true
  },
  {
    path: paths.login,
    element: <LazyLoginPage />,
    layout: null,
    private: 'public',
    useHeader: false,
    useSidebar: false,
    useFooter: false
  },
  {
    path: paths.signup,
    element: <LazySignupPage />,
    layout: null,
    private: 'public'
  },
  {
    path: paths.forgetPassword,
    element: <LazyForgetPasswordPage />,
    layout: null,
    private: 'public'
  }
];
