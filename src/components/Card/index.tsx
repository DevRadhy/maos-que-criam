import { Card, CardContent } from "../ui/card";

type PersonCardProps = {
  image: string;
  name: string;
  description: string;
}

export function PersonCard({ image, name, description }: PersonCardProps) {
  return (
    <Card className="w-96 h-[560px] rounded-lg shadow-lg overflow-hidden p-0">
      <CardContent className="relative h-full p-0">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 flex flex-col justify-end w-full text-gray-100 bg-gradient-to-t from-black from-5% to-transparent h-3/4 p-6">
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-400">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
