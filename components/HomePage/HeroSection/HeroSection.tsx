import AgentPulse from "@/components/shared/AgentPulse";
import YoutubeVideoForm from "./YoutubeVideoForm";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center justify-center gap-4">
          <AgentPulse size="large" color="blue" />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 mt-6">
            Meet Your Personal{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
              AI Content Agent
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-8 mx-auto">
            Transform your video content with AI powered analysis, transcription
            and insights. Get started in seconds.
          </p>
          {/* Youtube Video form */}
          <YoutubeVideoForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
