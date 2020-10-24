export function addTodo(todo) 
{
    return {
        type : 'ADDTODO',
        payload : todo
    }
}


export function IncrimentCart(todoid)
{
    return {
        type : 'INCRIMENTCART',
        payload : todoid
    }
}

export function DicrimentCart(todoid)
{
    return {
        type : 'DICTIMENTCART',
        payload : todoid
    }
}



export function inciment() 
{
    return {
        type : 'INCIMENT',
    }

}

export function dicriment() 
{
    return {
        type : 'DICRIMENT',
    }

}

export function ResetCount() 
{
    return {
        type : 'RESETCOUNT',
    }

}

