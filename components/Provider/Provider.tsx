"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { SchematicProvider } from "@schematichq/schematic-react";
import React from "react";
import { SchematicWrapper } from "./SchemeticWrapper";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const schematicPublicKey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLIC_KEY;
  if (!schematicPublicKey) {
    throw new Error("NEXT_PUBLIC_SCHEMATIC_PUBLIC_KEY is not set");
  }
  return (
    <ClerkProvider>
      <SchematicProvider publishableKey={schematicPublicKey}>
        <SchematicWrapper>{children}</SchematicWrapper>
      </SchematicProvider>
    </ClerkProvider>
  );
};

export default Provider;
