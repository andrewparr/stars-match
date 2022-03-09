import utils from "./math-utils";

interface Props {
  count: number;
}

const StarsDisplay = (props: Props) => (
  <>
    {utils.range(1, props.count).map((starId) => (
      <div key={starId} className="star" />
    ))}
  </>
);

export default StarsDisplay;
