import useAudioRecorder from "@hooks/useAudioRecorder";

const MicButton = () => {
  const { isRecording, isUploading, toggleRecording } = useAudioRecorder();

  return (
    <button
      type="button"
      onClick={toggleRecording}
      disabled={isUploading}
      className={`bg-gray-100 px-3 py-2 rounded-full transition-all duration-200
        ${isRecording ? "text-red-500 hover:bg-red-100" : "text-black hover:bg-gray-200"}
        ${isUploading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <i className={isRecording ? "ri-mic-off-line" : "ri-mic-line"}></i>
    </button>
  );
};

export default MicButton;
