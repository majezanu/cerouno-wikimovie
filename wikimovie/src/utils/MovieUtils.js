class MovieUtils {
    static convertMoney = (money) => {
        let formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
        });
        return formatter.format(money);
    }

    static calcTime = (time) => {
        const hours = ~~(time / 60);
        const mins = time % 60;
        return `${hours}h ${mins}m`;
    }
}

export default MovieUtils;