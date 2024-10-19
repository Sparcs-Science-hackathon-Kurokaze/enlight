type IconProps = {
  src: string;
};

export default function Icon({ src }: IconProps) {
  return (
    <div>
      <img className="rounded-full bg-whi" src={src}></img>
    </div>
  );
}
