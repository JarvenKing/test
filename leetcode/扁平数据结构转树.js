function toTree(arr) {
    arr = arr || [];
    // 查找根节点
    var rootTree = null;
    var other = arr.filter(function (tree) {
        if (tree.pid === 0)
            rootTree = tree;
        return tree.pid !== 0;
    });
    // 根据根节点找子节点
    return getChildren(other, rootTree);
}
function getChildren(origin, currentTree) {
    if (origin === void 0) { origin = []; }
    var children = null;
    var other = [];
    children = origin.filter(function (leaf) {
        if (leaf.pid === currentTree.id) {
            return true;
        }
        else {
            other.push(leaf);
            return false;
        }
    });
    var length = children.length;
    while (children.length) {
        for (var i = 0; i <= length; i++) {
            getChildren(other, children[i]);
        }
        length--;
    }
    currentTree.children = children;
    return currentTree;
}
toTree([
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
]);
