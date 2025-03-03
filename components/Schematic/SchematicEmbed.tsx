"use client";
import { SchematicEmbed as SchemeticComponent } from "@schematichq/schematic-components";

export const SchematicEmbed = ({
  componentId,
  accessToken,
}: {
  componentId: string;
  accessToken: string;
}) => {
  return <SchemeticComponent accessToken={accessToken} id={componentId} />;
};
