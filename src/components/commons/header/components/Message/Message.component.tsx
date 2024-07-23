import { Badge, Input, List, Typography } from 'antd';

import MessageItem from './MessageItem.component';
import { IoSearchOutline } from 'react-icons/io5';

const MessageComponent = () => {
  return (
    <div className="min-w-[400px]">
      <List
        header={
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="mb-5 flex gap-2 text-[1.6rem] font-semibold">
                <Typography.Title className="text-[1.6rem]">Messages</Typography.Title>
                <Badge count={1} />
              </div>
              <></>
            </div>
            <Input placeholder="Search your friends..." prefix={<IoSearchOutline />} />
          </div>
        }
        children={
          <div>
            <MessageItem />
            <MessageItem isRead={true} />
            <MessageItem isRead={false} />
          </div>
        }
        footer={
          <div className="flex justify-center">
            <Typography.Link className="text-center">Read all messages</Typography.Link>
          </div>
        }
      />
    </div>
  );
};

export default MessageComponent;
