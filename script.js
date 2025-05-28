document.body.style.backgroundImage = 'url(background.jpg)';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundPosition = 'center center';

{
    const header = document.createElement('h1');
    const textHeader = document.createTextNode('Game Suwit Jawa');
    header.appendChild(textHeader);
    document.body.appendChild(header);

    header.style.textAlign = 'center';
    header.style.textTransform = 'uppercase';
    header.style.color = '#fff';
}

// container
const divContainer = document.createElement('div');
document.body.append(divContainer);

// divContainer.style.background = 'silver';
divContainer.style.height = '300px';
divContainer.style.width = '320px';
divContainer.style.margin = '100px auto';
divContainer.style.position = 'relative';
divContainer.style.borderRadius = '20px';

// div1
const div1 = document.createElement('div');
const div1H1 = document.createElement('h1');
div1.append(div1H1);
divContainer.append(div1);

div1.style.background = 'salmon';
div1.style.width = '100%';
div1.style.height = '148px';
div1.style.marginBottom = '4px';
div1.style.borderTopRightRadius = '20px';
div1.style.borderTopLeftRadius = '20px';
div1.style.alignContent = 'center';
div1.style.boxShadow = '0 0 10px #000000';

div1H1.style.textAlign = 'center';
div1H1.style.fontSize = '55px';
div1H1.style.color = 'lightgreen';

// div2
const div2 = document.createElement('div');
divContainer.append(div2);

div2.style.background = 'lightgreen';
div2.style.width = '100%';
div2.style.height = '148px';
div2.style.borderBottomRightRadius = '20px';
div2.style.borderBottomLeftRadius = '20px';
div2.style.boxShadow = '0 0 10px #000000';

// div center
const divCenter = document.createElement('div');
const divCenterH1 = document.createElement('h1');
divCenter.append(divCenterH1);
divContainer.append(divCenter);

divCenter.style.position = 'absolute';
divCenter.style.background = '#fff';
divCenter.style.width = '95px';
divCenter.style.height = '43px';
divCenter.style.borderRadius = '20px';
divCenter.style.border = '4px solid orange';
divCenter.style.top = '50%';
divCenter.style.left = '50%';
divCenter.style.transform = 'translate(-50%, -50%)';
divCenter.style.alignContent = 'center';
divCenter.style.display = 'flex';
divCenter.style.textAlign = 'center';
divCenter.style.justifyContent = 'center';
divCenter.style.alignItems = 'center';

divCenterH1.style.fontSize = '25px';
divCenterH1.style.color = 'salmon';

// div button
const divButton = document.createElement('div');
divContainer.append(divButton);

divButton.style.position = 'absolute';
// divButton.style.background = 'gray';
divButton.style.width = '280px';
divButton.style.height = '70px';
divButton.style.left = '50%';
divButton.style.top = '80%';
divButton.style.transform = 'translate(-50%, -50%)';
divButton.style.alignContent = 'center';
divButton.style.textAlign = 'center';

// button1
const btn1 = document.createElement('button');
const btn1Text = document.createTextNode('Elephant');
btn1.append(btn1Text);
divButton.append(btn1);
btn1.classList.add('btn');
btn1.classList.add('elephant');

// button2
const btn2 = document.createElement('button');
const btn2Text = document.createTextNode('Human');
btn2.append(btn2Text);
divButton.append(btn2);
btn2.classList.add('btn');
btn2.classList.add('human');

// button3
const btn3 = document.createElement('button');
const btn3Text = document.createTextNode('Ant');
btn3.append(btn3Text)
divButton.append(btn3);
btn3.classList.add('btn');
btn3.classList.add('ant');

const allBtn = document.getElementsByClassName('btn');
for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].style.background = 'salmon';
    allBtn[i].style.margin = '5px';
    allBtn[i].style.height = '30px';
    allBtn[i].style.width = '70px';
    allBtn[i].style.color = '#fff';
    allBtn[i].style.borderRadius = '5px';
}

function pilihanComputer() {
    let comp = Math.random();
    if (comp < 0.34) return 'Elephant';
    if (comp >= 0.34 && comp < 0.67) return 'Human';
    return 'Ant';
}

function hasil(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'Elephant') { if (comp == 'Human') { return 'WIN!' } else { return 'LOSE!' } }
    if (player == 'Human') return (comp == 'Elephant') ? 'LOSE!' : 'WIN!';
    if (player == 'Ant') return (comp == 'Human') ? 'LOSE!' : 'WIN!';
}

const elephantBtn = document.querySelector('.elephant');
elephantBtn.addEventListener('click', function () {
    const Computer = pilihanComputer();
    const Player = 'Elephant'
    const hasilAkhir = hasil(Computer, Player);

    div1H1.innerHTML = '';
    divCenterH1.innerHTML = '';

    const div1Text = document.createTextNode(Computer);
    div1H1.append(div1Text);

    const divCenterText = document.createTextNode(hasilAkhir);
    divCenterH1.append(divCenterText);
});

const humanBtn = document.querySelector('.human');
humanBtn.addEventListener('click', function () {
    const Computer = pilihanComputer();
    const Player = 'Human'
    const hasilAkhir = hasil(Computer, Player);

    div1H1.innerHTML = '';
    divCenterH1.innerHTML = '';
    
    const div1Text = document.createTextNode(Computer);
    div1H1.append(div1Text);

    const divCenterText = document.createTextNode(hasilAkhir);
    divCenterH1.append(divCenterText);
});

const antBtn = document.querySelector('.ant');
antBtn.addEventListener('click', function () {
    const Computer = pilihanComputer();
    const Player = 'Ant'
    const hasilAkhir = hasil(Computer, Player);
    
    div1H1.innerHTML = '';
    divCenterH1.innerHTML = '';

    const div1Text = document.createTextNode(Computer);
    div1H1.append(div1Text);

    const divCenterText = document.createTextNode(hasilAkhir);
    divCenterH1.append(divCenterText);
});