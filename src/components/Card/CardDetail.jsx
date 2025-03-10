import DetailOne from "../Portfolio/1";
import DetailTwo from "../Portfolio/2";
import DetailThree from "../Portfolio/3";

const DETAIL_COMPONENTS = {
  0: DetailOne,
  1: DetailTwo,
  2: DetailThree,
};

export default function CardDetail({ selected, onClose }) {
  const DetailComponent = DETAIL_COMPONENTS[selected];

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center transition-all duration-500 ease-in-out z-50">
      <div className="relative bg-white w-full h-full flex items-center justify-center">
        <button
          className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full text-xl"
          onClick={onClose}
        >
          ✕
        </button>
        <DetailComponent />
      </div>
    </div>
  );
}
