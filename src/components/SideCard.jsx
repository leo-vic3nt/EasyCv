/* eslint-disable react/prop-types */

function Container({ children }) {
  return (
    <div className="mx-auto my-0 flex w-full flex-col gap-3 rounded-2xl bg-white p-4 shadow-md shadow-slate-300">
      {children}
    </div>
  );
}

function CardHeader({ title, icon }) {
  return (
    <div className="flex justify-between">
      <h3 className="text-2xl font-bold capitalize">{title}</h3>
      <span className="size-10">{icon}</span>
    </div>
  );
}

function SideCard({ title, icon, children }) {
  return (
    <Container>
      <CardHeader title={title} icon={icon} />
      {children}
    </Container>
  );
}

export default SideCard;
