import Icon from "../atom/Icon";

type IconProps = {
  src: string;
  title: string;
};

export default function IconItem({ src, title }: IconProps) {
  return (
    <div>
      <Icon src={src}></Icon>
      <div className="text-point">{title}</div>
    </div>
  );
}
