import Link from 'antd/es/typography/Link';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../routes/paths';
import { Typography } from 'antd';
import PostComponent from './components/Post.component';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Typography.Text onClick={() => navigate(paths.editor)}>HomePage</Typography.Text>

      <Link onClick={() => navigate(paths.editor)}> Code Editor</Link>
      <PostComponent />
    </div>
  );
};

export default HomePage;
