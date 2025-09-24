import { useState } from "react";

export default function useInput({initialValue}) {
    const [value, setValue] = useState(initialValue);
    return [
        {value, onchange: e => setValue(e.target.value)},
        () => setValue(initialValue)
    ];
};
