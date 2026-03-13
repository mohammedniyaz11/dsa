function isStringIsoMorphic(str1, str2) {
    let objStr1 = {};
    let objStr2 = {};
    for (let i = 0; i < str1.length; i++) {
        let charS1 = str1[i];
        let charS2 = str2[i];

        if (objStr1[charS1] && objStr1[charS1] !== charS2) {
            return false
        }


        if (objStr2[charS2] && objStr2[charS2] !== charS1) {
            return false
        }

        objStr1[charS1] = charS2;
        objStr2[charS2] = charS1

    }
    return true
}