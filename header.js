//onSnapshot has event listener 
//onSnapshot is also called web socket

function getCartItems(){
db.collection('cart-items').onSnapshot((snapshot)=>{
let totalCount=0;
    snapshot.forEach(doc => {
        totalCount += doc.data().quantity;
    });
// console.log(`total quantity is ${totalCount}`)
setCart(totalCount)
})
}

function setCart(totalCount){
    document.querySelector('.cart-item-number').innerText = totalCount
}
getCartItems()