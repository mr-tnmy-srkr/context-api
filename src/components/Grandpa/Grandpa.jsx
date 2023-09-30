import Dad from "../Dad/dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";
import { createContext, useState } from "react";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000)

const Grandpa = () => {

const [money,setMoney] = useState(1000)

  const asset = "diamond";
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Net Assets : Rs.{money}</p>
      {/*   <section className="flex">
        <Dad asset={asset}></Dad>
        <Uncle asset={asset}></Uncle>
        <Aunty></Aunty>
      </section> */}

     <MoneyContext.Provider value={[money,setMoney]}>
     <AssetContext.Provider value="gold">
        <section className="flex">
          <Dad asset={asset}></Dad>
          <Uncle asset={asset}></Uncle>
          <Aunty></Aunty>
        </section>
      </AssetContext.Provider>
     </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
