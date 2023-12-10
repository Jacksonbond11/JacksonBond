import React from "react";
import BlogPost from "../../../Components/BlogPost";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const Audiochain = () => {
  return (
    <div>
      <Header />
      <BlogPost
        title={"The Audio Chain"}
        body={
          "Have you ever wondered how sound gets from your favorite podcaster’s mouths into your ears? The process, while amazing, is really pretty simple. Let’s take a look at the audio chain. <br /><br /> The first step is always a sound origin. For podcasts, that is usually someone’s vocal cords. We then need to capture the sound using a microphone. This is where people begin getting confused on the process. The microphone does not only pick up the sound waves coming directly from your mouth. Sound waves bounce around your room many times, hitting the microphone from different angles. This is what causes reverb. For podcasting, you usually will want to reduce these reflections as much as possible. You can click HERE for a guide to sound treating your room. <br /><br />The soundwaves hit the microphone which causes a magnet to move within a coil. This creates an electrical current that travels down the cable that is plugged into the mic. This analog signal needs to be converted to a digital signal so that we can process the audio within our computers. <br /><br />If you are using a conventional setup, you probably have a microphone plugged into an audio interface or mixer of some sort. (If you are using a USB mic it does all of this within the mic itself.) The signal arrives at the interface and enters the preamp. Since the microphone produces such a low-level signal, it needs to be amplified before it is converted to digital. (Pre-Amp get it?) <br /><br /> Once the level is amplified to a useable level, the magic happens. I do not really understand how the interface turns an analog signal into a digital one but I can pretend to know. The interface listens to the signal coming in and attempts to “sample” it, converting the information to bytes that the computer understands. The computer then reconstructs the information and plays back your voice as an audio file. Depending on the quality of the interface, it can mess up and sample the audio incorrectly which leads to “noise.”<br /><br />Yay we are in the computer now! This is where the fun begins. You will record the audio into a Digital Audio Workstation or DAW. Once the audio is in here, we can edit, add effects, and mix the audio. Using the power of the computer you can drastically improve the quality of your final mix. <br /><br />Once we are done editing, we export the audio file. This combines all tracks that we might have used: voice 1, voice 2, background music, etc… And now the podcast is done! We host it on a listening platform, and it is ready to be listened to. When you select an episode on Spotify, the process is reversed. The digital audio file is converted to an analog signal and travels through your headphone cable until it is amplified into your little ears."
        }
      />
      <Footer />
    </div>
  );
};

export default Audiochain;
