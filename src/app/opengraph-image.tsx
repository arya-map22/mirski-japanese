import { ImageResponse } from "next/og";

export const alt = "Mirski Japanese — Kursus bahasa Jepang dari N5 sampai N2";
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
        backgroundColor: "#ffcc55",
        color: "#241c10",
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
            borderRadius: "50%",
            backgroundColor: "#241c10",
            color: "#ffcc55",
            fontSize: "28px",
            fontWeight: 800,
          }}
        >
          N5
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "34px", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Mirski Japanese
          </span>
          <span style={{ fontSize: "16px", letterSpacing: "0.28em" }}>KURSUS BAHASA JEPANG</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: "76px",
            fontWeight: 800,
            lineHeight: 1.04,
            letterSpacing: "-0.04em",
            maxWidth: "980px",
          }}
        >
          <span>Dari kata pertama&nbsp;</span>
          <span style={{ display: "flex", flexDirection: "column" }}>
            <span>sampai N2</span>
            <span style={{ height: "10px", backgroundColor: "#fffaf2", marginTop: "-10px" }} />
          </span>
          <span>&nbsp;— satu jalur jelas.</span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "14px",
            fontSize: "20px",
            letterSpacing: "0.1em",
            color: "#5f5343",
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
          borderTop: "1px solid rgba(36, 28, 16, 0.2)",
          paddingTop: "24px",
          fontSize: "18px",
          color: "#5f5343",
        }}
      >
        <span>Kursus bahasa Jepang online</span>
        <span>Empat level · satu arah</span>
      </div>
    </div>,
    size,
  );
}
