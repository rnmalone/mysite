export default function download(url: string) {
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}