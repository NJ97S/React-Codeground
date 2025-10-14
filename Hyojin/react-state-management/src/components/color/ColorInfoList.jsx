import Color from "./Color";

export default function ColorInfoList({ colors = [] }) {
  if (!colors.length) return <div>표시할 색상이 없습니다.</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          colorTitle={color.title}
          fillColor={color.color}
          colorRating={color.rating}
        />
      ))}
    </div>
  );
}
