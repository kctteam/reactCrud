export const getUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
};

export const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};
