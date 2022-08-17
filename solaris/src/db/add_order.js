import { addDoc,collection } from 'firebase/firestore';
import { db } from './connection';

function add_order(buyer,items,total){
    const order = {
        buyer:buyer,
        items:items,
        total:total
    };
    const ordersColletion = collection(db,"orders");

    addDoc(ordersColletion,order).then(({id})=>{
        return id;
    })
}

export {add_order};