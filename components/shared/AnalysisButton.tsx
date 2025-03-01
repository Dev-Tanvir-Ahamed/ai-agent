"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

const AnalysisButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Analyzing..." : "Analyze"}
    </Button>
  );
};

export default AnalysisButton;
