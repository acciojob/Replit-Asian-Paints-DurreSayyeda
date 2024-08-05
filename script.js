//your JS code here. If required.
window.onload = function() {
    document.getElementById('change_button').addEventListener('click', function() {
        // Reset all grid items to transparent
        const gridItems = document.getElementsByClassName('grid-item');
        for (let item of gridItems) {
            item.style.backgroundColor = 'transparent';
        }

        // Get the block ID and color from input fields
        const blockId = document.getElementById('block_id').value;
        const color = document.getElementById('colour_id').value;

        // Change the background color of the specified block
        if (blockId && color) {
            const block = document.getElementById(blockId);
            if (block) {
                block.style.backgroundColor = color;
            }
        }
    });

    document.getElementById('reset_button').addEventListener('click', function() {
        // Reset all grid items to transparent
        const gridItems = document.getElementsByClassName('grid-item');
        for (let item of gridItems) {
            item.style.backgroundColor = 'transparent';
        }
    });
};
