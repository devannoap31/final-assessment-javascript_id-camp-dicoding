function fibonacci(n, sequence = [0]) {
    if (n === 0) return sequence;
    if (n === 1) {
        sequence.push(1);
        return sequence;
    }
    if (sequence.length < n + 1) {
        const last = sequence[sequence.length - 1] || 0;
        const secondLast = sequence[sequence.length - 2] || 0;
        sequence.push(last + secondLast || 1);
        return fibonacci(n, sequence);
    }
    return sequence;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
