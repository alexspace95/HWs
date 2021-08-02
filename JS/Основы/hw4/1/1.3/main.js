//3)Расстояние между двумя объектами-точками


function getPointsDistance() {
    const Object1 = {
        CoordX: x1 = Number(prompt('Enter Xa')),
        CoordY: y1 = Number(prompt('Enter Ya')),
        CoordZ: z1 = Number(prompt('Enter Za'))
    }
    const Object2 = {
        CoordX: x2 = Number(prompt('Enter Xb')),
        CoordY: y2 = Number(prompt('Enter Yb')),
        CoordZ: z2 = Number(prompt('Enter Zb'))
    }
    const AB = (((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2) ** (1 / 2));
    return document.write('Расстояние от точки А(' + x1 + ',' + y1 + ',' + z1 + ') и точки B(' + x2 + ',' + y2 + ',' + z2 + ') = ' + AB);
}
getPointsDistance();