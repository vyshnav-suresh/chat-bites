import React from "react";
import Canvas from "../Canvas";
import SaveChanges from "./SaveChanges";
import MessageBox from "./MessageBox";
import { MiniMap } from "reactflow";

const Layout = () => {
  return (
    <div className="w-screen h-screen ">
      <div className="h-16 w-full bg-gray-100 relative">
        <SaveChanges />
      </div>
      <div className="w-full h-full flex">
        <div className="w-4/6 h-full">
          <Canvas />
        </div>
        <div className="w-2/6 border-2 rounded-sm">
          <div className="p-2 ">
            <MessageBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
