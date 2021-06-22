interface ChildProps {
  color: string;
  onClick: () => void;
}
export const Child: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>click me!</button>
    </div>
  );
};
