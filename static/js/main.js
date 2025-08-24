document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.curved-image.custom-img');
    const title = document.getElementById('dynamic-title');
    const stack = document.getElementById('dynamic-stack');
    const text = document.getElementById('dynamic-text');
    const button = document.getElementById('dynamic-btn');
    const buttons = document.querySelectorAll('.row.h-20 .expanding-buttons input[type="radio"]');
    
    const imageMap = {
        'btn-one': 'static/images/bg1.jpg',
        'btn-two': 'static/images/bg2.jpg',
        'btn-three': 'static/images/bg3.jpg'
    };

    const titleMap = {
        'btn-one': 'Clear Reflection',
        'btn-two': 'Lily Ponds',
        'btn-three': 'Calm Breeze'
    };

    const stackMap = {
        'btn-one': 'Stacks full-width on small screens.',
        'btn-two': 'Stacks full-width on small screens.',
        'btn-three': 'Stacks full-width on small screens.'
    };

    const textMap = {
        'btn-one': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'btn-two': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'btn-three': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    };

    function fadeText(element, newText) {
        if (!element) return;
        element.classList.remove('fade-ltr-active');
        element.classList.add('fade-ltr');
        setTimeout(() => {
            if (element.tagName === 'BUTTON') {
                element.textContent = newText;
            } else {
                element.textContent = newText;
            }
            element.classList.remove('fade-ltr');
            element.classList.add('fade-ltr-active');
        }, 500);
    }

    buttons.forEach(btn => {
        btn.addEventListener('change', function() {
            if (btn.checked) {
                if (image) {
                    image.classList.add('fade-out');
                    setTimeout(() => {
                        image.src = imageMap[btn.id];
                        image.classList.remove('fade-out');
                        image.classList.add('fade-in');
                        setTimeout(() => {
                            image.classList.remove('fade-in');
                        }, 500);
                    }, 500);
                }
                fadeText(title, titleMap[btn.id]);
                fadeText(stack, stackMap[btn.id]);
                fadeText(text, textMap[btn.id]);
                fadeText(button, button.textContent);
            }
        });
    });

    [title, stack, text, button].forEach(el => {
        if (el) el.classList.add('fade-ltr-active');
    });

    if (button) {
        button.addEventListener('click', function() {
            const radios = Array.from(buttons);
            const currentIdx = radios.findIndex(r => r.checked);
            const nextIdx = (currentIdx + 1) % radios.length;
            radios[nextIdx].checked = true;
            radios[nextIdx].dispatchEvent(new Event('change'));
        });
    }
});