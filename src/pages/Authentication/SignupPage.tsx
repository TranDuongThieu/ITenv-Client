import React from 'react';

import { Button, Form, Input } from 'antd';
import { cn } from '../../utils/helpers/cn';
import Link from 'antd/es/typography/Link';
import { paths } from '../../routes/paths';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const handleLogin = (values: any) => {
    console.log(values);
  };
  const navigate = useNavigate();
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-[50%] top-[50%] flex h-[600px] w-[500px] translate-x-[-50%] translate-y-[-50%] flex-col gap-5 bg-white p-3">
        <h1 className={cn('text-center text-3xl font-semibold')}>SignUp</h1>
        <Form onFinish={handleLogin}>
          <Form.Item name="username">
            <Input size="large" placeholder="Username" />
          </Form.Item>
          <Form.Item name="password">
            <Input size="large" placeholder="Password" />
          </Form.Item>
          <Form.Item name="confirm_password">
            <Input size="large" placeholder="Confirm Password" />
          </Form.Item>
          <div className="flex items-center justify-between">
            {' '}
            <Button htmlType="submit">Sign Up</Button>
            <Link onClick={() => navigate(paths.login)}>Login</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignupPage;
