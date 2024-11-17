import "./style.css";

const colors = {
  start: "#545454", // Starting as transparent white
  end: "#ffffff",
};

export default function ShinyTextButton() {
  return (
    <>
      <div className="w-max cursor-pointer rounded-full bg-slate-900 px-8 py-2 hover:bg-slate-800">
        <div
          style={{
            backgroundImage: `radial-gradient(circle, ${colors.start} 0%, ${colors.end} 100%)`,
            color: "transparent",
            backgroundClip: "text",
            backgroundSize: "200% 100%",
            animation: "backgroundSlideKeyframes 5s linear infinite",
          }}
        >
          Shiny Boy
        </div>
      </div>
    </>
  );
}
