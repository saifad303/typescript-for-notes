type ChildrenProps = {
  children: string;
};

export default function Headings({ children }: ChildrenProps) {
  return <div>{children}</div>;
}
