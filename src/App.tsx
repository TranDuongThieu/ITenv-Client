import { Button, ConfigProvider } from 'antd';
import { usePagination } from './utils/hooks/usePagination.hook';
import { getPosts } from './services/testApi.service';
// import { Helmet } from 'react-helmet';


function App() {
  const { data: posts } = usePagination('posts', {}, getPosts);
  console.log(posts);
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Inter, sans-serif'
        }
      }}
    >
      {/* <Helmet>
        <title>{`ITenv`}</title>
      </Helmet> */}

      <main className="">
        <div className="text-red-200">
          <Button>Hello</Button>
        </div>
      </main>
    </ConfigProvider>
  );
}

export default App;
