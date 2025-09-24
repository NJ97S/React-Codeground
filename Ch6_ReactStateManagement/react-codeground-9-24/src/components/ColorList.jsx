import Color from "./Color";
import { useContext, useState } from "react";
import { ColorContext } from "../providers/ColorProvider";

export default function ColorList() {
    const { colors } = useContext(ColorContext)

    if (colors == []) return <p>데이터가 없습니다.</p>
    return (
        <>
            {
                colors.map((color) => 
                    <Color
                        key={color.id}
                        id={color.id}
                        title={color.title}
                        rating={color.rating}
                        color={color.color}
                    />
                )
            }
        </>
    );
};
