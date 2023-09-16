export const getStoreCurrent = () => {
    const storeCurrent = JSON.parse(localStorage.getItem("storeCurrent"));
    return storeCurrent;
};

export const setStoreCurrent = (storeCurrent) => {
    localStorage.setItem("storeCurrent", JSON.stringify(storeCurrent));
};
