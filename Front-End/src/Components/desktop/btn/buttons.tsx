import "./buttons.css";

interface props {
  text: string;
  back?: boolean;
  sub?: boolean;
}

export const Buttons = ({ text, back, sub }: props) => {
  const bg = back ? "colorback" : "";
  return (
    <>
      <button
        className={bg + " button_styles"}
        type={sub ? "submit" : "button"}
      >
        {text}
      </button>
    </>
  );
};
