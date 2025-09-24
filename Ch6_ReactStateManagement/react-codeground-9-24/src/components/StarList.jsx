import { FaStar } from "react-icons/fa"

export default function StarList({ totalStars = 5, selectedStars = 3 }) {
    // Todo: 이거 왜 안돼?
    // const makeList = Array.from({length: 5})
    // const Star = Array.from({length: 5}).map(() => <FaStar color="grey" />)

    return (
        <>
            { Array.from({length: totalStars}).map(( _, i) => <FaStar key={i} color={ ( selectedStars > i ) ? "yellow" : "grey"} />) }
            <p>{selectedStars} / {totalStars}</p>
        </>
    );
};