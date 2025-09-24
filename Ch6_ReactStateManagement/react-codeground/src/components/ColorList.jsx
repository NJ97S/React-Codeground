import { useContext } from "react";

import Color from "./Color";
import { ColorContext } from "../provider/ColorProvider";

export default function ColorList() {
    const { colors } = useContext(ColorContext)

    if(!colors.length) return <div>표시할 색이 없습니다.</div>;

    return (
        <div>
            {
                colors.map(color => 
                    <Color key={color.id} {...color} />
                )
            }
        </div>
    );
};
