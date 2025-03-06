const copyLabel = document.getElementById('copyLabel').addEventListener('click', () => {
    const content = '.merix_';

    navigator.clipboard.writeText(content).then(() => {
        alert("Username copied.");
    }).catch((err) => {
        console.error(err);
    });
});