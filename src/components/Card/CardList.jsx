import useAPI from "../../hooks/useAPI";
import CardItem from "./CardItem";

export default function CardList({ onSelect }) {
  const { data, loading, error } = useAPI("GET", "GET_CARD_DATA");
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-3 gap-4 p-24">
      {data.map((item, index) => (
        <CardItem key={index} index={index} data={item} onClick={onSelect} />
      ))}
    </div>
  );
}
