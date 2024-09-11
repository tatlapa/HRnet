import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

import React from "react";

interface FieldTitleProps {
  title: string;
  id: number;
}

const FieldTitle: React.FC<FieldTitleProps> = (props) => {
  return (
    <th className="cursor-pointer" id={props.id.toString()}>
      <div className="flex gap-2 items-center justify-center">
        <h3>{props.title}</h3>
        <div className="flex flex-col">
          <ChevronUpIcon className="w-4 h-4" />
          <ChevronDownIcon className="w-4 h-4" />
        </div>
      </div>
    </th>
  );
};

export default FieldTitle;
