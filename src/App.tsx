import { ConfigProvider } from 'antd';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PAGE_ROUTES, RouteType } from './routes/routes';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { Fragment } from 'react/jsx-runtime';
import { Helmet } from 'react-helmet';
// import { Helmet } from 'react-helmet';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Inter, sans-serif'
        }
      }}
    >
      <Helmet>
        <title>{`ITenv`}</title>
      </Helmet>

      <main className="">
        <Router>
          <Routes>
            {/* {PAGE_ROUTES.map((route: InfoPage, index: number) => {
              let Layout: any = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
             ) }} */}
            {PAGE_ROUTES.map((route: RouteType, index: number) => {
              let Layout: any = DefaultLayout;
              if (route.layout) Layout = route.layout;
              else if (route.layout === null) route.layout = Fragment;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout useHeader={route.useHeader} useSidebar={route.useSidebar}>
                      {route.element}
                    </Layout>
                  }
                ></Route>
              );
            })}
          </Routes>
        </Router>
      </main>
    </ConfigProvider>
  );
}

export default App;
