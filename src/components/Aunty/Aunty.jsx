import { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';
import "./Aunty.css"

const Aunty = () => {

    const [money,setMoney]= useContext(MoneyContext)

    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousin name={'Mamshad'}></Cousin>
                <Cousin name={'Rubaiya'}></Cousin>
            </section>
            <p>Money : Rs.{money}</p>
            <button className='btn-style'>Add Rs.1000/-</button>
        </div>
    );
};

export default Aunty;