import { Card, CardContent } from "@/components/ui/card";
import { Brain, MessageSquare, Video } from "lucide-react";

export default function AIAgentSteps() {
  const steps = [
    {
      icon: <Video className="h-6 w-6" />,
      number: "1",
      title: "Connect Your Content",
      description:
        "Share your YouTube video URL and let your agent get to work",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      number: "2",
      title: "AI Agent Analysis",
      description: "Your personal agent analyzes every aspect of your content",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      number: "3",
      title: "Receive Intelligence",
      description: "Get actionable insights and strategic recommendations",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl mb-12">
        Meet Your AI Agent in 3 Simple Steps
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <Card
            key={index}
            className="border bg-card shadow-sm hover:border-blue-500 transition-all duration-300"
          >
            <CardContent className="pt-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white">
                {step.icon}
              </div>
              <h3 className="mb-2 font-semibold tracking-tight">
                {step.number}. {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
