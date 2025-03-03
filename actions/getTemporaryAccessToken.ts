"use server";

import { currentUser } from "@clerk/nextjs/server";
import { SchematicClient } from "@schematichq/schematic-typescript-node";

const apiKey = process.env.NEXT_PUBLIC_SCHEMATIC_SECRET_KEY;

const client = new SchematicClient({ apiKey });

export const getTemporaryAccessToken = async () => {
  const user = await currentUser();
  if (!user) {
    return null;
  }
  const response = await client.accesstokens.issueTemporaryAccessToken({
    resourceType: "company",
    lookup: {
      id: user.id,
    },
  });
  return response.data.token;
};
