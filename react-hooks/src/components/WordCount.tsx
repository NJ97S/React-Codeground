import { useEffect, useMemo, type PropsWithChildren } from "react";

import useAnyKeyToRender from "../hooks/useAnyKeyToRender";

const WordCount = ({ children }: PropsWithChildren) => {
  useAnyKeyToRender();

  const words = useMemo(() => children.split(""), [children]);

  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  );
};

export default WordCount;
