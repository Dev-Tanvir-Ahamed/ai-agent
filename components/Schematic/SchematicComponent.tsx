import { getTemporaryAccessToken } from "@/actions/getTemporaryAccessToken";
import { SchematicEmbed } from "./SchematicEmbed";

const SchematicComponent = async ({ componentId }: { componentId: string }) => {
  const accessToken = await getTemporaryAccessToken();
  if (!componentId) {
    return null;
  }
  if (!accessToken) {
    throw new Error("Failed to get Access Token");
  }

  return <SchematicEmbed componentId={componentId} accessToken={accessToken} />;
};

export default SchematicComponent;
