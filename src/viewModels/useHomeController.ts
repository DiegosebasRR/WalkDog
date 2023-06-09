import { useState } from "react";
import { Card } from "../types/Card";

const useHomeViewModel = () => {
  const [card, setCard] = useState<Card[]>([
    { id: "1", name: "Pablo Gomez", image: "../assets/paseador.png", km: 7 },
    { id: "2", name: "Juan Torres", image: "../assets/paseador.png", km: 9 },
    { id: "3", name: "Pepe Gomez", image: "../assets/paseador.png", km: 8 },
    { id: "4", name: "Tania Gomez", image: "../assets/paseador.png", km: 18 },
  ]);

  return { card };
};

export default useHomeViewModel;
