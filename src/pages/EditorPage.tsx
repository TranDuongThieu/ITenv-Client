import React from 'react';
import { cn } from '../utils/helpers/cn';
import CodeEditor from '../components/editor/CodeEditor';
import Link from 'antd/es/typography/Link';
import { useNavigate } from 'react-router-dom';
import { paths } from '../routes/paths';
import { Typography } from 'antd';

const EditorPage = () => {
  const navigate = useNavigate();
  return (
    <div className={cn('border p-5')}>
      <Typography.Text onClick={() => navigate(paths.home)}>Home</Typography.Text>
      <CodeEditor defaultLanguage="python" width="500px" height="700px" />
    </div>
  );
};

export default EditorPage;
