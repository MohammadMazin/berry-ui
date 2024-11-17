import "./style.css";
import ShinyTextButton from "./ShinyTextButton";
import SyntaxHighlighterWrapper from "../SyntaxHighlighterWrapper";

const colors = {
  start: "#545454", // Starting as transparent white
  end: "#ffffff",
};

const customStyle = {
  lineHeight: "1.5",
  fontSize: "1rem",
  borderRadius: "5px",
  backgroundColor: "#f7f7f7",
  padding: "20px",
};

export default function ShinyText() {
  const codeString = `
  const colors = {
    start: "#545454", // Starting as transparent white
    end: "#ffffff",
  };

  //animation in css file
  //   @keyframes backgroundSlideKeyframes {
  //     from {
  //         background-position: 200% 0%;
  //     }
  //     to {
  //         background-position: -200% 0%;
  //     }
  // }
  
  export default function ShinyTextButton() {
    return (
      <>
        <div className="w-max cursor-pointer rounded-full bg-slate-900 px-8 py-2 hover:bg-slate-800">
          <div
            style={{
              backgroundImage: \`radial-gradient(circle, ${colors.start} 0%, ${colors.end} 100%)\`,
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
  `;

  return (
    <div className="flex w-full items-center justify-center ">
      <span className="flex w-1/4 justify-center">
        <ShinyTextButton />
      </span>
      <SyntaxHighlighterWrapper
        codeString={codeString}
        title=".tsx"
      ></SyntaxHighlighterWrapper>
    </div>
  );
}
