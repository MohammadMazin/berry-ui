type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return <h1 className="text-3xl font-bold text-white">{title}</h1>;
}
