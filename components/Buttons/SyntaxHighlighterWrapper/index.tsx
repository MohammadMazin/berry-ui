"use client";

import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaRegClipboard } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
type Props = {
  codeString: string;
  title: string;
  column?: boolean;
};

const customStyle = {
  lineHeight: "1.5",
  fontSize: "1rem",
  borderRadius: "0 0 5px 5px",
};

export default function SyntaxHighlighterWrapper({
  codeString,
  title,
  column = false,
}: Props) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    setCopied(true);
    navigator.clipboard.writeText(codeString);
    setTimeout(() => {
      setCopied(false);
    }, 3500);
  }

  return (
    <div
      className={`flex ${column ? "h-[350px] w-full" : "h-[400px] flex-1"} flex-col overflow-auto`}
    >
      <div className="flex w-full justify-between rounded-t bg-slate-600 px-4 py-1 text-white">
        <span>{title}</span>
        {copied ? (
          <span className="inline-flex items-center gap-2">
            <IoIosCheckmarkCircleOutline />
            Copied
          </span>
        ) : (
          <button
            className="inline-flex items-center gap-2"
            onClick={() => {
              handleCopy();
            }}
          >
            <FaRegClipboard />
            Copy
          </button>
        )}
      </div>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={customStyle}
        wrapLines
        showLineNumbers
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
