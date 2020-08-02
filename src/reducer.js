export const initialState = {
    basket:[{
        id:"123333334",
        title:"new apple ipad pro",
        price:4444,
        rating:4,
        image:"https://m.media-amazon.com/images/I/31wFK3h39yL.__AC_SY200_.jpg"
    }],
    user:null,
}

export const getBaskeTotal = (basket) =>
basket?.reduce((amount, item) => item.price+amount,0);

function reducer (state, action){
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem)=>basketItem.id===action.id)

            if(index>=0){
                newBasket.splice(index,1);
            }else{
                console.warn(
                    `cnat remove product (id: ${action.id}) as its n`
                )
            }

            return {...state,basket: newBasket,};
        default:
            return state;
    }
}

export default reducer;