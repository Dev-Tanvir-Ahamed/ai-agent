"use client";
type AgentPulseProps = {
  size?: "small" | "medium" | "large";
  color?: "blue" | "green" | "purple";
};

const AgentPulse = ({ size = "medium", color = "blue" }: AgentPulseProps) => {
  const sizeClass = {
    small: "h-6 w-6",
    medium: "h-12 w-12",
    large: "h-16 w-16",
  };
  const colorClass = {
    blue: "bg-blue-500 shadow-[0_0_0_8px_4px_rgba(59,130,246,0.5)]",
    green: "bg-blue-500 shadow-[0_0_0_8px_4px_rgba(34,197,94,0.5)]",
    purple: "bg-blue-500 shadow-[0_0_0_8px_4px_rgba(168,85,247,0.5)]",
  };
  return (
    <div
      className={`${sizeClass[size]} ${colorClass[color]} animate-pulse rounded-full`}
    ></div>
  );
};

export default AgentPulse;
