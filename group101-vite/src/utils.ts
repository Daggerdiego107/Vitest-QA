export function compileCode(code: string) {
    if (code === '') {
        throw new Error('Cannot compile empty string');
    }
    return code
}