import { useLayoutEffect, useState } from "react";
import List from "./List";

interface PState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

export default function AdvanceState() {
  const [personList, setPersonList] = useState<PState["people"]>([]);
  useLayoutEffect(() => {
    setPersonList([
      {
        name: "Saif Ahmed",
        age: 10,
        url: "saif.com",
        note: "hello world",
      },
      {
        name: "Asif Ahmed",
        age: 20,
        url: "asif.com",
        note: "You are not welcome.",
      },
      {
        name: "Pushpa Raj",
        age: 25,
        url: "pushpa.com",
        note: "You also not welcome.",
      },
    ]);
  }, []);
  return (
    <div>
      <List people={personList} />
    </div>
  );
}
