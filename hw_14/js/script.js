window.onload = function () {
    let range = document.querySelector('[type="range"]');
    let input = document.querySelector('[type="number"]');

    range.addEventListener('input', function () {
        input.value = this.value;
        drawDiagram(this.value);
    });
    input.addEventListener('input', function () {
        range.value = this.value;
        drawDiagram(this.value);
    });

    function drawDiagram(value) {
        let comission = 0;
        if (value < 20) {
            comission = value * 0.02
        }
        if (value >= 20 && value < 50) {
            comission = value * 0.04
        }
        if (value >= 50 && value < 75) {
            comission = value * 0.06
        }
        if (value >= 75 && value <= 100) {
            comission = value * 0.08
        }

        let valueEl = document.querySelector('.value');
        let commissionEl = document.querySelector('.commission');

        valueEl.style.height = value + 'px';
        valueEl.style.top = 100 - value + 'px';

        commissionEl.style.height = comission + 'px';
    }
};