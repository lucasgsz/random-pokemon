import "./Badge.css";

const Badge = ({ tipoPoder, bgColor }) => {
  return (
    <div className="Badge" style={{ background: bgColor }}>
      <span>{tipoPoder}</span>
    </div>
  );
};

export default Badge;
