const Skeleton = ({ children }: { children: React.ReactNode }) => {
  return <div className="animate-pulse">{children}</div>;
};

export default Skeleton;
