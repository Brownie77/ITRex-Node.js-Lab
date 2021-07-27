function setABS(num) { console.log(`ABS:${num}`) }
function setTraction(num) { console.log(`Traction Control:${num}`) }
function setStability(num) { console.log(`Stability Control:${num}`) }

const Begginer = () => {
    setABS(5);
    setTraction(5);
    setStability(5);
}

const GoodDriver = () => {
    setABS(3);
    setTraction(3);
    setStability(3);
}


const Maniac = () => {
    setABS(1);
    setTraction(1);
    setStability(1);
}

Begginer();
GoodDriver();
Maniac();