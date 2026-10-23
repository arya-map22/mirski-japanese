import { ImageResponse } from "next/og";

export const alt = "Mirski Japanese — A clear path from first words to N2";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f7f2e7",
        color: "#1c1a16",
        padding: "72px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "64px",
            height: "64px",
            backgroundColor: "#b23a2a",
            color: "#f7f2e7",
            fontSize: "34px",
          }}
        >
          道
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "34px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Mirski
          </span>
          <span style={{ fontSize: "16px", letterSpacing: "0.28em" }}>JAPANESE</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: "76px",
            lineHeight: 1.04,
            letterSpacing: "-0.04em",
            maxWidth: "980px",
          }}
        >
          <span>A clear path from&nbsp;</span>
          <span style={{ color: "#b23a2a", fontStyle: "italic" }}>first words</span>
          <span>&nbsp;to N2.</span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "14px",
            fontSize: "20px",
            letterSpacing: "0.1em",
            color: "#5a5348",
          }}
        >
          <span>STARTER N5</span>
          <span>·</span>
          <span>ELEMENTARY N4</span>
          <span>·</span>
          <span>INTERMEDIATE N3</span>
          <span>·</span>
          <span>ADVANCED N2</span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(28, 26, 22, 0.2)",
          paddingTop: "24px",
          fontSize: "18px",
          color: "#5a5348",
        }}
      >
        <span>Japanese language education</span>
        <span>Four levels · one direction</span>
      </div>
    </div>,
    size,
  );
}
