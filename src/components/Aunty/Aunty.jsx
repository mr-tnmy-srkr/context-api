import { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

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
            <button onClick={()=>setMoney(money+1000)}>Add Rs.1000/-</button>
        </div>
    );
};

export default Aunty;