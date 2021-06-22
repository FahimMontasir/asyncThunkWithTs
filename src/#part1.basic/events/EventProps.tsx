export const EventHandler: React.FC = () => {
  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(e);
  };
  return <button onClick={handleOnClick}>click me</button>;
};
