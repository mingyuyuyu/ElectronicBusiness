export default function shipmentsReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest':
            reState.loading = true;
            break;
        case 'shipments':
            reState.dataset =action.dataset;
            break;
        case 'Recc1':
            // reState.dataset =action.dataset;
            break;
        default:
            reState.loading = false;
    }
    return reState ;
}