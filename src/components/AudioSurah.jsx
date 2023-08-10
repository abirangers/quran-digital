import ReactAudioPlayer from "react-audio-player";
const AudioSurah = ({ audio }) => {
  console.log(audio);
  return (
    <div className="w-full mt-6">
      <ReactAudioPlayer src={audio} controls className="w-full" />
      {/* <audio controls={true} autoPlay={false} className="w-full">
      </audio> */}
    </div>
  );
};

export default AudioSurah;
