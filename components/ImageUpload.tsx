import React, { useEffect, useState } from 'react';
import Cropper, { Area } from 'react-easy-crop';

export interface ImageUploadProps {
  containerStyle?: React.CSSProperties;
  cropContainerStyle?: React.CSSProperties;
  controlStyle?: React.CSSProperties;
  cropperStyle?: {
    containerStyle?: React.CSSProperties;
    mediaStyle?: React.CSSProperties;
    cropAreaStyle?: React.CSSProperties;
  };
  handleOk?: () => void;
  handleCancel?: () => void;
  imageUrl?: string;
}

export const ImageUpload = (props: ImageUploadProps) => {
  const { containerStyle, cropContainerStyle, controlStyle, cropperStyle, imageUrl } = props;

  const [url, setUrl] = useState('/images/avatars/empty.png');

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (imageUrl) {
      setUrl(imageUrl);
    }
  }, [imageUrl]);

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    console.log(croppedArea, croppedAreaPixels);
  };

  return (
    <div style={containerStyle}>
      <div style={cropContainerStyle}>
        <Cropper
          style={cropperStyle}
          image={url} //"https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
          crop={crop}
          zoom={zoom}
          aspect={3 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
      <div style={controlStyle}>
        <input
          type="range"
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e) => {
            setZoom(Number(e.target.value));
          }}
        />
      </div>
    </div>
  );
};
