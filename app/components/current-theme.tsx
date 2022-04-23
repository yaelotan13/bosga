import React from "react";

type Props = {};

export default function CurrentTheme({}: Props): JSX.Element {
  return (
    <div className="flex h-[600px] w-full justify-between bg-beige bg-summer bg-contain">
      <div className="w-1/2">
        <img
          src="/images/bg/summer.jpg"
          alt="beach vibe"
          className="h-full w-full"
        ></img>
      </div>
      <div className="flex h-full w-1/2 items-center justify-center">
        <div className="m-12 flex h-2/3 flex-col items-center justify-center border p-4">
          <p className="mt-4 w-1/2 text-center text-5xl">Summer Days</p>
          <img
            src="/images/bg/hello-summer.png"
            alt="hello summer"
            className="h-44 w-44"
          ></img>
        </div>
      </div>
    </div>
  );
}
