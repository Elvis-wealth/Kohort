import { ImageResponse } from "next/og";

export const alt = "Kohorts — Sell, run and certify paid cohorts in one place";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        color: "black",
      }}
    >
      <div
        style={{
          width: 128,
          height: 128,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 28,
          background: "black",
          color: "white",
          fontSize: 80,
          fontWeight: 700,
        }}
      >
        K
      </div>
      <div style={{ marginTop: 40, fontSize: 96, fontWeight: 700 }}>
        Kohorts
      </div>
      <div style={{ marginTop: 16, fontSize: 36, color: "#595959" }}>
        Sell, run and certify paid cohorts in one place.
      </div>
    </div>,
    { ...size }
  );
}
