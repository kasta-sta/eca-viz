// Get bit at pos(ition) for num(ber)
const get_bit = (num, pos) => (num >> pos) & 1;

// Combines 3 bits into an integer between 0 and 7
const combine = (b1, b2, b3) => (b1 << 2) + (b2 << 1) + (b3 << 0);

// Returns given number in the form of a tertiary function (a rule)
const get_rule = num => (b1, b2, b3) => get_bit(num, combine(b1, b2, b3));

function createAutomaton(container, initialRule = 126) {
    const width = 400; // Width of the canvas
    const height = 300; // Height of the canvas

    const cells_across = 80; // Number of cells horizontally in the grid
    const cell_scale = width / cells_across; // Size of each cell
    const cells_down = height / cell_scale; // Number of cells vertically in the grid

    let ruleNumber = initialRule;
    let rule = get_rule(ruleNumber);

    const automatonDiv = document.createElement('div');
    automatonDiv.className = 'automaton';

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const input = document.createElement('input');
    input.type = 'number';
    input.min = 0;
    input.max = 255;
    input.value = ruleNumber;
    input.style.margin = '10px';

    const applyButton = document.createElement('button');
    applyButton.textContent = 'A'; // Apply Rule Button

    // Save Button
    const saveButton = document.createElement('button');
    saveButton.textContent = 'S'; // Save Image Button

    // Close Button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'C'; // Close Button
    
    automatonDiv.appendChild(canvas);
    automatonDiv.appendChild(input);
    automatonDiv.appendChild(applyButton);
    automatonDiv.appendChild(saveButton);
    automatonDiv.appendChild(closeButton);
    container.appendChild(automatonDiv);

    const context = canvas.getContext('2d');
    let animationFrame;
    let current_row = initial_row(cells_across);
    let row_index = 0;

    function draw_rule() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        current_row = initial_row(cells_across);
        row_index = 0;

        function animate() {
            if (row_index >= cells_down) {
                row_index = 0;
                current_row = initial_row(cells_across);
            }

            draw_row(context, current_row, cell_scale, row_index);
            current_row = next_row(current_row, rule);
            row_index++;

            animationFrame = requestAnimationFrame(animate);
        }

        cancelAnimationFrame(animationFrame);
        animate();
    }

    button.addEventListener('click', () => {
        const newRuleNumber = parseInt(input.value);
        if (newRuleNumber !== ruleNumber && newRuleNumber >= 0 && newRuleNumber <= 255) {
            ruleNumber = newRuleNumber;
            rule = get_rule(ruleNumber);
            draw_rule();
        }
    });

    // Save image function
    saveButton.addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = `automaton_rule_${ruleNumber}.png`;
        link.href = canvas.toDataURL();
        link.click();
    });

    // Close window function
    closeButton.addEventListener('click', () => {
        automatonDiv.remove(); // Remove the automaton window
    });
    
    draw_rule();
}

function draw_row(ctx, row, scale, row_index) {
    ctx.save();
    ctx.translate(0, row_index * scale);
    row.forEach(cell => {
        ctx.fillStyle = cell === 1 ? '#000' : '#fff';
        ctx.fillRect(0, 0, scale, scale);
        ctx.translate(scale, 0);
    });
    ctx.restore();
}

function next_row(old, rule) {
    return old.map((_, i) => rule(old[i - 1] || 0, old[i], old[i + 1] || 0));
}

function initial_row(width) {
    const initial_row = Array(width).fill(0);
    initial_row[Math.floor(width / 2)] = 1;
    return initial_row;
}

// Function to generate a random rule number between 0 and 255
function getRandomRule() {
    return Math.floor(Math.random() * 256);
}

window.onload = function () {
    const container = document.getElementById('container');
    const addButton = document.getElementById('addWindow');
    const randomButton = document.getElementById('randomRuleButton'); // For the "+R" button
    const toggleButton = document.getElementById('themeToggle');

    // Set initial theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(currentTheme);

    // Create the first automaton
    createAutomaton(container);

    // Add new automaton when the "+" button is clicked
    addButton.addEventListener('click', () => {
        createAutomaton(container);
    });

    // Add new automaton with random rule when the "+R" button is clicked
    randomButton.addEventListener('click', () => {
        const randomRule = getRandomRule();
        createAutomaton(container, randomRule);
    });

    // Toggle theme on button click
    toggleButton.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(newTheme);
        localStorage.setItem('theme', newTheme); // Save the theme preference
    });
};





