import React from "react";

type Props = {
  word: string;
};

export default function BounceAnimation({ word }: Props): JSX.Element {
  return (
    <>
      {[...word].map((letter, index) => (
        <span
          key={index}
          className="animate-dot-bounce"
          style={{ animationDelay: `0.${index + 2}s` }}
        >
          {letter}
        </span>
      ))}
    </>
  );
}
