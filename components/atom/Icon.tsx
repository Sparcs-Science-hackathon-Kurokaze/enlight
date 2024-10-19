type IconProps = {
  src: string;
};

export default function Icon({ src }: IconProps) {
  return (
    <div>
      <img  className="rounded-full bg-white p-4" src={src}></img>
    </div>
  );
}
