import { useState } from "react";

export default function ImageResizing() {
  const [image, setImage] = useState(null);
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const [fileSize, setFileSize] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 이미지 파일 크기 구하기 (바이트 단위)
      const sizeInBytes = file.size; // bytes
      setFileSize(sizeInBytes);

      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      console.log("Hi");
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-full p-6 bg-white shadow-lg rounded-2xl text-center overflow-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-12">
        📂 이미지 리사이징
      </h1>

      {/* 파일 업로드 */}
      <label className="block mb-4 cursor-pointer mb-12">
        <span className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          파일 업로드
        </span>
        <input type="file" className="hidden" onChange={handleFileChange} />
      </label>

      {/* 이미지 업로드 및 리사이징 UI */}
      {image && (
        <div className="flex items-center justify-center gap-8">
          {/* 원본 이미지 */}
          <div className="flex flex-col items-center">
            <img
              src={image}
              alt="Uploaded"
              className="border rounded-lg"
              // style={{ width: `${width}px`, height: `${height}px` }}
            />
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-semibold">가로:</label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="w-auto px-2 py-1 border rounded-md text-center"
                />
              </div>
              <div className="flex items-center space-x-2">
                <label className="text-sm font-semibold">세로:</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-auto px-2 py-1 border rounded-md text-center"
                />
              </div>
              <div className="flex items-center space-x-2">
                <label className="text-sm font-semibold">크기:</label>
                <input
                  type="number"
                  value={fileSize}
                  disabled
                  className="w-auto px-2 py-1 border rounded-md text-center"
                />
              </div>
            </div>
          </div>

          {/* 화살표 */}
          <div className="text-3xl font-bold">➡️</div>

          {/* 리사이징된 이미지 */}
          <div className="flex flex-col items-center">
            <img
              src={image}
              alt="Resized"
              className="border rounded-lg"
              // style={{ width: `${width}px`, height: `${height}px` }}
            />
            <div className="mt-4 space-y-2 w-auto">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-semibold">가로:</label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => {
                    console.log(e);

                    setWidth(e.target.value);
                  }}
                  className="px-2 py-1 border rounded-md text-center w-auto"
                />
              </div>
              <div className="flex items-center space-x-2">
                <label className="text-sm font-semibold">세로:</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="px-2 py-1 border rounded-md text-center w-auto"
                />
              </div>
              <div className="flex items-center space-x-2">
                <label className="text-sm font-semibold">크기:</label>
                <input
                  type="number"
                  value={fileSize}
                  disabled
                  className="px-2 py-1 border rounded-md text-center w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
