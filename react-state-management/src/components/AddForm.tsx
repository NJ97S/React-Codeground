import { useRef } from "react";

import type { newColorType } from "../types/type";

interface AddFormProps {
  addColor: (colorData: newColorType) => void;
}

const AddForm = ({ addColor }: AddFormProps) => {
  const textRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);

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
