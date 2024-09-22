export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const formaatedDate = date.toLocaleDateString('en-US', dateOptions);

    return formaatedDate;
};
