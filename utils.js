export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}

