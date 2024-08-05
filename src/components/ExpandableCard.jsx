/* eslint-disable react/prop-types */
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useState } from "react";

function Container({ children }) {
  return (
    <div className="mx-auto my-0 flex h-fit w-full flex-col rounded-2xl bg-white shadow-md shadow-slate-300">
      {children}
    </div>
  );
}

function CardHeader({ title, icon, isExpanded, setIsExpanded }) {
  return (
    <button
      onClick={() => setIsExpanded((e) => !e)}
      className="flex justify-between px-4 py-5"
    >
      <div className="flex items-center gap-2">
        <span className="size-7">{icon}</span>
        <h3 className="text-xl font-semibold capitalize">{title}</h3>
      </div>
      <ChevronDownIcon
        className={clsx(
          "size-6 transition-transform duration-300",
          isExpanded && "rotate-180",
        )}
      />
    </button>
  );
}

function ExpandableCard({ title, icon, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Container>
      <CardHeader
        title={title}
        icon={icon}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
      {children}
    </Container>
  );
}

export default ExpandableCard;
