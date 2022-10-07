import "./NavigationItem.css";

interface NavigationItemInterface {
  text: string;
}

function NavigationItem({ text }: NavigationItemInterface) {
  return (
    <div
      className="navItem"
      style={{
        fontWeight: 500,
        fontSize: "16px",
        fontFamily: "Lato",
        color: "white",
        paddingRight: "16px",
        paddingLeft: "16px",
        cursor: "pointer",
      }}
    >
      {text.toUpperCase()}
    </div>
  );
}

export default NavigationItem;
