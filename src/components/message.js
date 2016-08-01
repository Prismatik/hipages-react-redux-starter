import React from 'react';
import Image from './image';
import Text from './text';

const Message = ({ senderImage, message }) => {
  return (
    <div>
      <Image src={senderImage} />
      <Text text={message} />
    </div>
  )
};

export default Message;
