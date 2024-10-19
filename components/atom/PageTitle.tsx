type PageTitleProps = {
  title: string;
};
export default function PageTitle({ title }: PageTitleProps) {
  return <div className="text-5xl text-point">{title}</div>;
}
