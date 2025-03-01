import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Brain,
  FileText,
  Image,
  MessageSquare,
  Sparkles,
  Video,
} from "lucide-react";

export default function ContentCreatorFeatures() {
  const features = [
    {
      icon: <Brain className="h-6 w-6 text-blue-600" />,
      title: "AI Analysis",
      description:
        "Get deep insights into your video content with our advanced AI analysis. Understand viewer engagement and content quality.",
      bgColor: "bg-blue-100",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-green-600" />,
      title: "Smart Transcription",
      description:
        "Get accurate transcriptions of your videos. Perfect for creating subtitles, blog posts, or repurposing content.",
      bgColor: "bg-green-100",
    },
    {
      icon: <Image className="h-6 w-6 text-purple-600" />,
      title: "Thumbnail Generation",
      description:
        "Generate eye-catching thumbnails using AI. Boost your click-through rates with compelling visuals.",
      bgColor: "bg-purple-100",
    },
    {
      icon: <FileText className="h-6 w-6 text-yellow-600" />,
      title: "Title Generation",
      description:
        "Create attention-grabbing, SEO-optimized titles for your videos using AI. Maximize views with titles that resonate with your audience.",
      bgColor: "bg-yellow-100",
    },
    {
      icon: <Video className="h-6 w-6 text-red-600" />,
      title: "Shot Script",
      description:
        "Get detailed, step-by-step instructions to recreate viral videos. Learn shooting techniques, angles, and editing tips from successful content.",
      bgColor: "bg-red-100",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-orange-600" />,
      title: "Discuss with Your AI Agent",
      description:
        "Engage in deep conversations about your content strategy, brainstorm ideas, and unlock new creative possibilities with your AI agent companion.",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Powerful Features for Content Creators
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="border shadow-sm hover:border-blue-500 transition-all duration-300"
          >
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-md ${feature.bgColor}`}>
                  {feature.icon}
                </div>
              </div>
              <CardTitle className="mt-4 text-xl font-semibold">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
