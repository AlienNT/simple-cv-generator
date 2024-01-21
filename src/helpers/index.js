export function debounce(func, delay = 1000) {
    let timer

    return () => {
        clearTimeout(timer)

        timer = setTimeout(() => func(), delay)
    }
}

export function formattedDate(date) {
    try {
        const dateVal = new Date(date)

        return dateVal?.toLocaleDateString('en-us', {year: "numeric", month: "short"})
    } catch (e) {
        console.log('formattedDate', date, e)
    }
}

export function fileToBase(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });
}