function toggleBox(clickedBox) {
    const boxes = document.querySelectorAll('.box');
    const isAlreadyExpanded = clickedBox.classList.contains('expanded');

    boxes.forEach(box => {
        box.classList.remove('expanded', 'collapsed');
    });

    if (!isAlreadyExpanded) {
        clickedBox.classList.add('expanded');
        boxes.forEach(box => {
            if (box !== clickedBox) {
                box.classList.add('collapsed');
            }
        });
    }
}