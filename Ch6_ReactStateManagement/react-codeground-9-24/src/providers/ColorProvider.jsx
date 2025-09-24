import { v4 } from "uuid";
import colorData from "../data/color-data.json";
import { useState, createContext } from "react";

export const ColorContext = createContext(null);

export default function ColorProvider({children}) {
    const [ colors, setColors ] = useState(colorData.colors);

    const removeColor = (id) => setColors(colors.filter(color => color.id !== id));

    const addColor = (title, color) => {
        setColors([
            ...colors, 
            {
                id: v4(),
                rating: 0,
                title,
                color
            }
        ]);
        console.log(colors);
    };

    const rateColor = (id, selectedStars) => 
        setColors(colors.map(color => (color.rating = (color.id === id ? selectedStars : color.rating ))));

    return (
        <ColorContext.Provider value={{colors, removeColor, addColor, rateColor}}>
            {children}
        </ColorContext.Provider>
    )
};
