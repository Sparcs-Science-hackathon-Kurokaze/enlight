type PageTitleProps = {
  title: string;
};
export default function PageTitle({ title }: PageTitleProps) {
  return <div className="text-point font-noto mt-2 text-40pt font-bold">{title}</div>;
}
