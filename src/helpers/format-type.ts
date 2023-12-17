const formatType = (type: string): string => {
    let color: string;

    switch (type) {
        case '80s':
            color = 'red lighten-1';
            break;
        default:
            color = 'grey';
            break;
    }


    return `chip ${color}`;
}

export default formatType;