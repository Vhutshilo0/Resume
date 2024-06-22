function downloadCertificate(filename) {
    const link = document.createElement('a');
    link.href = `certificates/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
