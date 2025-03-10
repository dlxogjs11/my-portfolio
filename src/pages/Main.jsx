import { useState } from "react";
import CardDetail from "../components/Card/CardDetail";
import CardList from "../components/Card/CardList";

export default function Main() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="flex items-center justify-center bg-gray-100 h-full">
      <div className="relative h-screen flex items-center justify-center bg-gray-100">
        <CardList onSelect={setSelected} />
        {selected !== null && (
          <CardDetail selected={selected} onClose={() => setSelected(null)} />
        )}
      </div>
    </section>
  );
}
