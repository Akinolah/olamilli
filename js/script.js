// Dynamic hero content update
    const messages = [
        "exchange of your favorite Gift Cards.",
        "Banks work.",
        "Wire checks.",
        "Credit cards and more...."
    ];
    let index = 0;

    setInterval(() => {
        document.getElementById('hero-message').textContent = messages[index];
        index = (index + 1) % messages.length;
    }, 3000);