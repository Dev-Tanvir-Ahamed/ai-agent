"use server";
import { redirect } from "next/navigation";

export async function analysisYoutubeVideo(formData: any) {
  const url = formData.get("url")?.toString();
  const videoId = "abc"; //todo - fix in later
  if (!url) {
    return new Response("No URL provided", { status: 400 });
  }
  // redirect to the video analysis page
  redirect(`/video/${videoId}/analysis`);
}
