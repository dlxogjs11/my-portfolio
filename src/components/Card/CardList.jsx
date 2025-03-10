import CardItem from "./CardItem";

export default function CardList({ onSelect }) {
  return (
    <div className="grid grid-cols-3 gap-4 p-24">
      {Array.from({ length: 9 }, (_, i) => (
        <CardItem key={i} index={i} onClick={onSelect} />
      ))}
    </div>
  );
}
