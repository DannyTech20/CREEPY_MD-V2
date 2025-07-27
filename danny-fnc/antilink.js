//-----------------[Created by Danny]----------------------------//
//------------------[wa.me/dannytech]----------------------// 

const addAntiLinkGroup = (groupId, _dir) => {
    const obj = { id: groupId, warnCount: 0, enabled: true }; 
    if (!_dir.some(group => group.id === groupId)) {
        _dir.push(obj);
        fs.writeFileSync('./database/antilink.json', JSON.stringify(_dir, null, 2));
    }
};
const isAntiLinkEnabled = (groupId, _dir) => {
    const group = _dir.find(group => group.id === groupId);
    return group ? group.enabled : false;
};

const enableAntiLink = (groupId, _dir) => {
    const group = _dir.find(group => group.id === groupId);
    if (group) {
        group.enabled = true;
        fs.writeFileSync('./database/antilink.json', JSON.stringify(_dir, null, 2));
    }
};

const disableAntiLink = (groupId, _dir) => {
    const group = _dir.find(group => group.id === groupId);
    if (group) {
        group.enabled = false;
        fs.writeFileSync('./database/antilink.json', JSON.stringify(_dir, null, 2));
    }
};

const incrementWarnCount = (groupId, _dir) => {
    const group = _dir.find(group => group.id === groupId);
    if (group) {
        group.warnCount += 1;
        fs.writeFileSync('./database/antilink.json', JSON.stringify(_dir, null, 2));
    }
};

const getWarnCount = (groupId, _dir) => {
    const group = _dir.find(group => group.id === groupId);
    return group ? group.warnCount : 0;
};

const resetWarnCount = (groupId, _dir) => {
    const group = _dir.find(group => group.id === groupId);
    if (group) {
        group.warnCount = 0;
        fs.writeFileSync('./database/antilink.json', JSON.stringify(_dir, null, 2));
    }
};

module.exports = {
    addAntiLinkGroup,
    isAntiLinkEnabled,
    enableAntiLink,
    disableAntiLink,
    incrementWarnCount,
    getWarnCount,
    resetWarnCount
};