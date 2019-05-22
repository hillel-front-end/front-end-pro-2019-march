window.onload = function () {
    let button = document.querySelector('button');
    button.addEventListener('click', function () {
        let inputs = document.querySelectorAll("input");
        let textArea = document.querySelector('textarea');
        let i = 0;
        let interval = setInterval(function () {
            console.log(inputs[i]);
            if (i < inputs.length) {
                let comma = (i !== inputs.length - 1) ? ',' : '';
                textArea.value += inputs[i].value + comma;
                i++;
            }
            else {
                clearInterval(interval)
            }
        }, 1000);
    });

    let clearButton = document.querySelector('#clear-tags');
    clearButton.addEventListener('click', function () {
        let elements = document.querySelectorAll(":not(html):not(body):not(head)");
        let processedAttributes = [
            'color',
            'backgroundColor',
            'width',
            'height'
        ];
        for (let elId = 0; elId < elements.length; elId++) {
            for (let i = 0; i < processedAttributes.length; i++) {
                elements[elId].style[processedAttributes[i]] = null;
            }
        }
    });
};