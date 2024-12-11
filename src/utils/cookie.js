export const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/;`;
};

export const getCookie = (name) => {
    const cookieValue = document.cookie
        .split('; ')
        .find(cookie => cookie.startsWith(`${name}=`));
    return cookieValue ? cookieValue.split('=')[1] : null;
};

export const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00; path=/;`;
};