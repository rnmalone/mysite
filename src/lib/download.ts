export default function download(url: string, filename: string) {
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.target = '_blank';
    a.download = filename
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}