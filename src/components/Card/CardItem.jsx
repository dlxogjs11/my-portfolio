export default function CardItem({ index, data, onClick }) {
  return (
    <div
      className="bg-white shadow-lg rounded-2xl p-24 flex items-center justify-center text-lg font-semibold cursor-pointer transition-all transform hover:scale-110"
      onClick={() => onClick(index)}
    >
      <span className="font-bold">{data.title}</span>
    </div>
  );
}
