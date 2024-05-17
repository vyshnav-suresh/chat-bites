import React from "react";
import { TbMessage } from "react-icons/tb";

const MessageBox = (click: any) => {
  return (
    <div
      className="  border-[.5px] border-blue-800  h-20 w-32  bg-white rounded text-blue-900 text-sm flex justify-center items-center p-2 flex-col draggable-element"
      onClick={click ?? null}
      draggable
    >
      <TbMessage />
      Message
    </div>
  );
};

export default MessageBox;
