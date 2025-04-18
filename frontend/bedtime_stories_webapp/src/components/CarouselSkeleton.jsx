import React from "react";
import { Skeleton } from "@mantine/core";

export default function CarouselSkeleton(numberOfItems) {
  return (
    <div style={{ display: "flex", gap: "16px", padding: "16px" }}>
      {Array.from({ length: numberOfItems }).map((_, index) => (
        <div key={index} style={{ width: "200px", textAlign: "center" }}>
          <Skeleton height={150} radius="md" />
          <Skeleton height={20} mt="sm" width="80%" />
        </div>
      ))}
    </div>
  );
}
