import { PersonCard } from "./components/Card";
import { data } from "./data";

export default function Explore() {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {data.map((item) => (
        <PersonCard
          image={item.image}
          name={item.name}
          description={item.description}
        />
      ))}
    </div>
  );
}
