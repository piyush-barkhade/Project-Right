import Cropper from "react-easy-crop";
import { useState } from "react";
import { getCroppedImg } from "../utils/cropImage";

export default function ImageCropper({ onImageCropped }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedPixels, setCroppedPixels] = useState(null);
  const [url, setUrl] = useState("");

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const loadFromUrl = () => {
    if (url) {
      setImageSrc(url);
    } else {
      alert("Please enter a valid URL");
    }
  };

  const saveCrop = async () => {
    if (!croppedPixels || !imageSrc) {
      alert("Please select and adjust the image first!");
      return;
    }
    try {
      const result = await getCroppedImg(imageSrc, croppedPixels);
      onImageCropped(result);
      alert("Image processed successfully!");
    } catch (e) {
      console.error(e);
      alert("Failed to crop image");
    }
  };

  return (
    <div className="space-y-4 border p-4 bg-white rounded">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Upload File:</label>
        <input
          type="file"
          accept="image/*"
          onChange={onFileChange}
          className="text-sm"
        />
      </div>

      <div className="flex gap-2 items-end">
        <div className="flex-1">
          <label className="text-sm font-medium">Or Paste URL:</label>
          <input
            className="border p-2 w-full text-sm rounded"
            placeholder="https://example.com/image.jpg"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={loadFromUrl}
          className="bg-gray-800 text-white px-4 py-2 rounded text-sm h-[38px]"
        >
          Load
        </button>
      </div>

      {imageSrc && (
        <div className="space-y-4">
          <div className="relative w-full h-64 bg-gray-200 rounded overflow-hidden">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={450 / 350}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={(_, pixels) => setCroppedPixels(pixels)}
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs">Zoom:</span>
            <input
              type="range"
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              onChange={(e) => setZoom(e.target.value)}
              className="w-full"
            />
          </div>

          <button
            type="button"
            onClick={saveCrop}
            className="w-full bg-green-600 text-white px-4 py-2 rounded font-bold hover:bg-green-700 transition"
          >
            Crop & Confirm Image
          </button>
        </div>
      )}
    </div>
  );
}
