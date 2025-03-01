"use client";
import { useUser } from "@clerk/nextjs";
import { useSchematicEvents } from "@schematichq/schematic-react";
import { useEffect } from "react";

export const SchematicWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { identify } = useSchematicEvents();
  const { user } = useUser();

  useEffect(() => {
    const username =
      user?.username ??
      user?.fullName ??
      user?.emailAddresses?.[0]?.emailAddress ??
      user?.id;

    console.log("username", username);
    if (user?.id) {
      identify({
        // company level key
        company: {
          keys: {
            id: user?.id,
          },
          name: username,
        },
        // user level key
        keys: {
          id: user?.id,
        },
        name: username,
      });
    }
  }, [user, identify]);

  return <>{children}</>;
};
