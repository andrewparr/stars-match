// Color Theme
const colors: { [id: string]: string } = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
};

interface Props {
  status: string;
  onClick: any;
  number: number;
}

const PlayNumber = (props: Props) => (
  <button
    className="number"
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

export default PlayNumber;
