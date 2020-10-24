    import {todos , count} from '../redux/state'


export let reducer = (state = todos ,action) =>{
    switch (action.type){
        case 'ADDTODO' :
        let newtodo = [...state];
        newtodo.push(action.payload) 
        return newtodo;
            break;

        case 'INCREMENT' : 

        
        break;

        case 'INCRIMENTCART' :
            
            let newtodo_ = [...state];
            let index = -1 ;

            for(let i  = 0 ; i < newtodo_.length; i++ )
            {
                index++
                if(newtodo_[i].id == action.payload.id)
                {
                    break;
                }
            }


            if(index != -1)
            {
                console.log(newtodo_);
                newtodo_[index] = {
                    id : action.payload.id,
                    name : newtodo_[index].name,
                    img : newtodo_[index].img,
                    Qt : newtodo_[index].Qt +1 
                }
                return newtodo_
            }
           

        return state;
            
        break;

        case 'DICTIMENTCART' :
            
            let newtodo_dic = [...state];
            let index_ = -1 ;

            for(let i  = 0 ; i < newtodo_dic.length; i++ )
            {
                index_++
                if(newtodo_dic[i].id == action.payload.id)
                {
                    break;
                }
            }


            if(index_ != -1)
            {
                console.log(newtodo_);
                newtodo_dic[index_] = {
                    id : action.payload.id,
                    name : newtodo_dic[index_].name,
                    img : newtodo_dic[index_].img,
                    Qt : newtodo_dic[index_].Qt -1
                }
                return newtodo_dic
            }
           

        return state;
            
        break;
    
         
        
        default : 
            return state; 
    }
}

export let countreducer = (state = count,action) =>{
    switch (action.type){

    case 'INCIMENT' : 

    const  newtodo = {
        count  : state[0].count + 1
    }

    return [newtodo]
        break;

    

        case 'DICRIMENT' : 

        const  newstate  = {
            count  : state[0].count - 1
        }
        return [newstate]
            break;

            case 'RESETCOUNT' : 
            const  videstate  = {
                count  : 0
            }
            return [videstate]

        default : 
            return state;
}}