/**
 let arr = [
 {id: 1, name: '部门1', pid: 0},
 {id: 2, name: '部门2', pid: 1},
 {id: 3, name: '部门3', pid: 1},
 {id: 4, name: '部门4', pid: 3},
 {id: 5, name: '部门5', pid: 4},
 ]
 */
interface tree {
  id: number,
  name: string,
  pid: number,
  children?: tree
}
function toTree(arr: Array<tree>): tree {
  arr = arr || []
  // 查找根节点
  let rootTree = null
  const other = arr.filter(tree => {
    if(tree.pid ===0) rootTree = tree
    return tree.pid !== 0
  })
  // 根据根节点找子节点
  return getChildren(other, rootTree)
}
function getChildren(origin: Array<tree> = [], currentTree: tree) {
  let children = null
  const other: Array<tree> = []
  children = origin.filter((leaf:tree):Boolean => {
    if(leaf.pid === currentTree.id){
      return true
    } else {
      other.push(leaf)
      return false
    }
  })
  let length = children.length
  while (children.length) {
    for (let i = 0; i<= length; i++) {
      getChildren(other, children[i])
    }
    length --
  }
  currentTree.children = children
  return currentTree
}
toTree([
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
])
