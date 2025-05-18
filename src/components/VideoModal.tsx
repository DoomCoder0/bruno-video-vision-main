import React from "react";

interface VideoModalProps {
  videoUrl: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, isOpen, onClose }) => {
  if (!isOpen || !videoUrl) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    >
      <video
        src={videoUrl}
        controls
        autoPlay
        className="max-w-5xl w-full rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};
