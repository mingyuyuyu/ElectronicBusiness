export default function SalingGoodsReducer(state = {}, action){
	let reState = JSON.parse(JSON.stringify(state));
	
	switch(action.type){

		case 'BeforeRequest':
			reState.loading = true;
			break;

		case 'Requested':
			reState.loading = false;
			reState.dataset = JSON.parse(action.dataset);
			break;		
		default:
			reState.loading = false;
	}
	return reState;
}