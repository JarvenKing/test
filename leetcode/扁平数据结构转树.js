function toTree(arr) {
  arr = arr || [];
  // 查找根节点
  let rootTree = null;
  const other = arr.filter(function (tree) {
    if (tree.pid === 0)
      rootTree = tree;
    return tree.pid !== 0;
  });
  // 根据根节点找子节点
  return getChildren(other, rootTree);
}

function getChildren(origin, currentNode) {
  const otherArr = [];
  const currentArr = origin.filter(tree => {
    if (tree.pid === currentNode.id) {
      return true;
    } else {
      otherArr.push(tree);
      return false;
    }
  });
  currentNode.children = currentArr;
  let length = currentArr.length;
  while (length) {
    for (let i = 0; i < length; i++) {
      getChildren(otherArr, currentArr[i]);
    }
    length--;
  }
  return currentNode
}
const result = toTree([
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
])
console.log(JSON.stringify(result))
