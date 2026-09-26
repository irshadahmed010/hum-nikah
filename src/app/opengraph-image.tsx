import { ImageResponse } from "next/og";

export const alt = "HumNikah — Verified Muslim Matrimony";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1D184C",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#C58D5F",
            fontSize: 30,
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          <span style={{ width: 70, height: 3, background: "#C58D5F" }} />
          Matrimony
          <span style={{ width: 70, height: 3, background: "#C58D5F" }} />
        </div>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            fontSize: 92,
            fontWeight: 700,
            color: "#FFFFFF",
          }}
        >
          Hum<span style={{ color: "#C58D5F" }}>Nikah</span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 40,
            color: "#E9E4F5",
          }}
        >
          Verified Muslim Matrimony
        </div>
      </div>
    ),
    size
  );
}
