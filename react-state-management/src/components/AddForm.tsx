import { useRef } from "react";

import useColors from "../hooks/useColors";

const AddForm = () => {
  const textRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);

  const { addColor } = useColors();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!textRef.current || !colorRef.current) return;

    const colorData = {
      title: textRef.current.value,
      color: colorRef.current.value,
    };

    addColor(colorData);

    textRef.current.value = "";
    colorRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={textRef} type="text" required />
      <input ref={colorRef} type="color" required />
      <button>ADD</button>
    </form>
  );
};

export default AddForm;
