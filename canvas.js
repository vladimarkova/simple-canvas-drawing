window.addEventListener('load', () => {
    console.log('Hello!');
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    window.addEventListener('resize', () => {
        // Resize
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    })
    
    // ctx.fillRect(100, 100, 200, 200);

    // ctx.strokeStyle = 'red';
    // ctx.strokeRect(100, 100, 100, 200);

    // ctx.strokeStyle = 'green';
    // ctx.strokeRect(150, 200, 100, 200);

    // ctx.beginPath();
    // ctx.moveTo(100, 100);
    // ctx.lineTo(200, 100);
    // ctx.lineTo(200, 150);
    // ctx.closePath();
    // ctx.stroke();

    // Drawing app
    let painting = false;

    function startPosition(e) {
        painting = true;
        console.log('START');
        draw(e);
    }
    function endPosition() {
        painting = false;
        console.log('END');
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        console.log('DRAW');
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'red';

        // ctx.beginPath();
        // ctx.moveTo(100, 100);
        // ctx.lineTo(200, 100);
        // ctx.lineTo(200, 150);
        // ctx.closePath();
        // ctx.stroke();

        ctx.moveTo(e.clientX, e.ClientY);
        ctx.lineTo(e.clientX, e.ClientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.ClientY);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);
})
