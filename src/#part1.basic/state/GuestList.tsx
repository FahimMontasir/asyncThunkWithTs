import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guest, setGuest] = useState<string[]>([]);
  const onClick = () => {
    setName("");
    setGuest([...guest, name]);
  };
  return (
    <>
      {guest.map((guest) => (
        <li>{guest}</li>
      ))}
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        name="name"
        id="1"
      />
      <button onClick={onClick}>click me</button>
    </>
  );
};
export default GuestList;
