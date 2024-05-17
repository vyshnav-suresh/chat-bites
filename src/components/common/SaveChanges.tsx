import React from "react";

const SaveChanges = (click: any) => {
  return (
    <div
      className=" absolute border-[.5px] border-blue-800  h-12 w-32 top-2 right-10 bg-white rounded text-blue-900 font-semibold text-sm flex justify-center items-center p-2"
      onClick={click ?? null}
    >
      Save Changes
    </div>
  );
};

export default SaveChanges;
