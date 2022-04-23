import React from "react";

export default function AboutUs(): JSX.Element {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-1/2 flex-col items-center justify-center py-20">
        <h1 className="mb-6 font-bebas-neue text-3xl font-semibold tracking-wider">
          About Us
        </h1>
        <p className="text-center tracking-wider">
          We exist to help you be your best and we encourage joy. We put you
          first—and, more importantly, we believe you should put yourself first.
          Since 2008 we’ve been curating and creating clothes, accessories,
          planners, and more to make life a little bit brighter and a lot more
          fun. Over a decade later, this remains our mission, as does drawing
          awareness to mental health issues and creating products dedicated to
          you and your well-being.
        </p>
      </div>
    </div>
  );
}
