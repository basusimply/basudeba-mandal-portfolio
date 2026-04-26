import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 14,
          background: "#ffffff",
          color: "#0d9488",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          border: "1px solid #e5e7eb",
        }}
      >
        BM
      </div>
    ),
    { ...size },
  );
}
