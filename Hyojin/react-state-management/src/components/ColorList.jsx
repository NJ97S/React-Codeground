import ColorInfo from './ColorInfo';
import ColorForm from './ColorForm';
import { v4 as uuidv4 } from "uuid";
import { useContext } from 'react';
import { ColorContext } from '../providers/ColorProvider';

export default function ColorList() {
  const {colors, setColors} = useContext(ColorContext);
  
  const onDelete = (id) => {
    const newColorDatas = colors.filter((color) => color.id !== id);
    console.log(newColorDatas)
    setColors(newColorDatas);
  };

  const createNewColor = (title, color) => {
    const newColorInfo = {
      id: uuidv4(),
      title,
      color,
      rating: 0,
    }
    setColors([newColorInfo, ...colors])
  }

  return(
    <>
      <ColorForm onCreate={createNewColor}/>
      {colors.map((colorData) => <ColorInfo colorData={colorData} key={colorData.id} onDelete={onDelete}/>)}
    </>
  );
}
