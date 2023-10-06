const mergeObj = (arr: Array<any>) => {
    let tmp = {}
    for (const a of arr) {
        tmp = { ...tmp, ...a }
    }
    return tmp
}
