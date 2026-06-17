//02.241043,1,MEUCIQCKRcSv0tkkebU/hilTPmWMRKii+4rUk5MStN1zxpQUQAIgO8Xxjd5wZwauhw86UjMzu/rafxKHxmxnOmipGUzYrbY=.iitkidcard

function getRollno(qrText) {
    const split = qrText.split('.', 2);
    const rollnoSplit = split[1].split(',', 2);
    const finalrollno = rollnoSplit[0];

    if (finalrollno.length !== 6) {
        throw new Error("invalid roll no");
    }

    return finalrollno;
}

function isRegistered(rollNo) {
    const rollNumber = Number(rollNo);
    if (rollNumber < 240001 || rollNumber > 240400) {
        return false;
    }
    return true;
}

export { getRollno, isRegistered };