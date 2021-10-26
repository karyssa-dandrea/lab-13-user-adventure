
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

export function generateUser(formData){
    return {
        completed: {},
        gold: 40,
        hp: 100,
        name: formData.get('name'),
        race: formData.get('race')
    };
}

export function getUser(){
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}