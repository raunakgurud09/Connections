
// import Image from "next/image"
// import madeEasy from "../../../public/Images/clubbing-made-easier.jpg"
import { useEffect, useRef } from "react";


export default function MadeEasy() {

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };


  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="relative ">
      {/* <Image
        src={madeEasy}
        alt={"clubbing-made-easy"}
        width={1400}
        height={400}
        className="w-screen" /> */}
      <video
        ref={videoEl}
        // src="https://res.cloudinary.com/dmaeznlik/video/upload/v1688384601/fullcover-dev/video/Bg_Video_xufaeh.mp4"
        // src="https://res.cloudinary.com/dmaeznlik/video/upload/v1688542595/fullcover-dev/video/homepage_video_zvf4cc.mp4"
        src="https://res.cloudinary.com/dmaeznlik/video/upload/v1688644064/fullcover-dev/video/Clubbing_made_easier_than_ever_21_9_._2_sc1yul.mp4"
        playsInline
        loop
        muted
        // style={{ width: '1600px', height: '600px' }}
        className='w-full h-full'
      />
      
      {/* <div className='w-full h-full bg-gradient-to-r from-darkbg/100 via-darkbg/0 to-darkbg/100 absolute top-0 z-20'></div> */}
    </div>
  )
}
