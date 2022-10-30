function qe_formula(a , b, c) {
    const d = (b ** 2) - (4 * a *c);
    if (d > 0) {
        x1 = (-b + (d ** 0.5)) / (2 * a);
        x2 = (-b - (d ** 0.5)) / (2 * a);
        return [x1, x2];
    } else if (d === 0) {
        x = -b / (2 * a);
        return [x];
    } else {
        return []
    }
}

console.log(qe_formula(12, -3, 35));