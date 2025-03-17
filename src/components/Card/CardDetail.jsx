import InfinityScroll from "../Portfolio/InfinityScroll";
import TokenManagement from "../Portfolio/TokenManagement";
import ImageResizing from "../Portfolio/ImageResizing";

const DETAIL_COMPONENTS = {
  0: InfinityScroll,
  1: TokenManagement,
  2: ImageResizing,
};

export default function CardDetail({ selected, onClose }) {
  const DetailComponent = DETAIL_COMPONENTS[selected];

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center transition-all duration-500 ease-in-out z-50">
      <div className="relative bg-white w-full h-full flex items-center justify-center">
        <button
          className="absolute top-4 right-4 bg-gray-200 w-[50px] h-[50px] rounded-full text-xl"
          onClick={onClose}
        >
          ✕
        </button>
        <DetailComponent />
      </div>
    </div>
  );
}
