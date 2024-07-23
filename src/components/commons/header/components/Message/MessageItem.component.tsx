import { Avatar, Popover, Typography } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { GoDotFill } from 'react-icons/go';
import { HiDotsHorizontal } from 'react-icons/hi';
import { cn } from '../../../../../utils/helpers/cn';
type MessageItemProps = {
  isRead?: boolean;
};

const MessageItem: React.FC<MessageItemProps> = ({ isRead }) => {
  console.log(isRead);
  return (
    <div className="group flex cursor-pointer items-center gap-5 p-[12px] duration-200 hover:bg-[rgba(0,0,0,0.05)]">
      <Avatar size={42} icon={<UserOutlined />} />
      <div className="flex flex-2 items-center justify-between">
        <div className="flex flex-col">
          <Typography.Text strong>tranduongthieu</Typography.Text>
          <div className="flex gap-3">
            <Typography.Text strong={isRead ? false : true}>tranduongthieu</Typography.Text>
            <Typography.Text strong={isRead ? false : true} className="tracking-tight">
              1 hour ago
            </Typography.Text>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Popover
            placement="bottomRight"
            content={<>hehe</>}
            trigger="click"
            arrow={false}
            className="popover-notification cursor-pointer"
            overlayClassName="max-w-[45rem] max-h-[40rem] p-0"
            autoAdjustOverflow={false}
          >
            <HiDotsHorizontal
              size={22}
              className="hidden text-gray-500 duration-200 hover:text-gray-800 group-hover:block"
            />
          </Popover>
          <GoDotFill size={18} className={cn('text-primary-color', !isRead ? 'opacity-100' : 'opacity-0')} />
        </div>
      </div>
    </div>
  );
};

export default MessageItem;