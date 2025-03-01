// @typescript-eslint/no-unused-vars
"use client";
import { analysisYoutubeVideo } from "@/actions/analysisYoutubeVideo";
import AnalysisButton from "@/components/shared/AnalysisButton";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";

const YoutubeVideoForm = () => {
  const [, formAction] = useActionState(analysisYoutubeVideo, null);

  return (
    <div>
      <form
        action={formAction}
        className="flex flex-col sm:flex-row gap-4 items-center"
      >
        <Input
          type="text"
          placeholder="Enter YouTube Video URL"
          className="w-lg"
        />
        <AnalysisButton />
      </form>
    </div>
  );
};

export default YoutubeVideoForm;
