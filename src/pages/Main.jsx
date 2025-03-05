import { useState } from "react";

export default function Main() {
  const [selected, setSelected] = useState(null); // 선택된 카드
  const [animateOut, setAnimateOut] = useState(false); // 애니메이션 상태
  const [cardOpen, setCardOpen] = useState(false); // 애니메이션 상태
  const handleClick = (index) => {
    setSelected(index); // 카드 클릭 시 선택
    setAnimateOut(true); // 확대 애니메이션 시작
    setTimeout(() => setCardOpen(true), 500); // 애니메이션 끝나면 원래 화면으로
  };

  const handleClose = () => {
    setAnimateOut(false); // 축소 애니메이션 시작
    setCardOpen(false);
    setSelected(null);
  };

  return (
    <section className="flex items-center justify-center bg-gray-100 h-full">
      <div className="relative h-screen flex items-center justify-center bg-gray-100">
        {/* 카드 리스트 */}
        <div className="grid grid-cols-3 gap-4 p-24">
          {Array.from({ length: 9 }, (_, i) => (
            <div
              key={i}
              className={`bg-white shadow-lg rounded-2xl p-24 flex items-center justify-center text-lg font-semibold cursor-pointer 
              transition-all ease-in-out transform 
              ${selected === i ? "scale-125 opacity-100 z-999" : ""}`}
              onClick={() => handleClick(i)} // 카드 클릭 시 애니메이션 적용
            >
              Card {i + 1}
            </div>
          ))}
        </div>

        {/* 선택된 카드 (확대 & 글씨 커짐) */}
        {selected !== null && cardOpen && (
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center 
            transition-all duration-500 ease-in-out z-1000"
          >
            <div className="text-5xl font-bold transition-all duration-500 ease-in-out scale-150 opacity-100">
              Card {selected + 1}
            </div>
            <button
              className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full text-xl"
              onClick={handleClose} // 엑스 버튼 클릭 시 애니메이션 실행
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
