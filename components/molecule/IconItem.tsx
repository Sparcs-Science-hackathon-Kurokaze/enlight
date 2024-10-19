import Icon from "../atom/Icon";

type IconProps = {
  src: string;
  title: string;
  onClick?: () => void;
};

export default function IconItem({ src, title, onClick }: IconProps) {
  return (
    <div onClick={onClick}>
      <Icon src={src}></Icon>
      <div className="text-point font-sans">{title}</div>
    </div>
  );
}
