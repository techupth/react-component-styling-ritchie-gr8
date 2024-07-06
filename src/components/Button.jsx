import "./Button.css";

export default function Button({ style }) {
  return (
    <button
      className={`btn ${style === "primary" ? "btn-primary" : "btn-secondary"}`}
    >
      Button
    </button>
  );
}
