import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface IRatingProps {
  rating: number;
  onClick: (i: number) => void;
  style?: React.CSSProperties;
}

const Rating = (props: IRatingProps) => {
  const { rating, onClick, style } = props;
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;