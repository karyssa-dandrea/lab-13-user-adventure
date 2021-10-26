export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}

export function findByID(items, id){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}