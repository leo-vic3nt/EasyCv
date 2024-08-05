/* eslint-disable react/prop-types */
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useState } from "react";

function Container({ children }) {
  return (
    <div className="mx-auto my-0 flex h-fit w-full flex-col rounded-2xl bg-white py-2 shadow-md shadow-slate-300">
      {children}
    </div>
  );
}

function CardHeader({ title, icon, isExpanded, setIsExpanded }) {
  return (
    <button
      onClick={() => setIsExpanded((e) => !e)}
      className="flex justify-between px-4 py-2"
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

function ExpandableContainer({ children, isExpanded }) {
  return (
    <div

    // @todo find another way to make the container expandable

      className={clsx(
        "overflow-hidden rounded-xl bg-white duration-200 ease-in-out",
        isExpanded ? "h-" : "h-0",
      )}
    >
      {children}
    </div>
  );
}

function AddToListBtn({ title }) {
  return (
    <button className="mx-auto flex items-center gap-1 rounded-full border-4 border-gray-300 px-4 py-2 font-medium capitalize hover:border-gray-400">
      <PlusIcon className="size-5" />
      {title}
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
      <ExpandableContainer isExpanded={isExpanded}>
        {children}
        <AddToListBtn title={title} />
      </ExpandableContainer>
    </Container>
  );
}

export default ExpandableCard;
