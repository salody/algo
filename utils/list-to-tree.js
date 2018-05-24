const listToTree = (data, options) => {
  options = options || {};
  let ID_KEY = options.idKey || "id";
  let PARENT_KEY = options.parentKey || "parent";
  let CHILDREN_KEY = options.childrenKey || "children";

  let tree = [],
    childrenOf = {};
  let item, id, parentId;

  for (let i = 0, length = data.length; i < length; i++) {
    item = data[i];
    id = item[ID_KEY];
    parentId = item[PARENT_KEY] || 0;
    // every item may have children
    childrenOf[id] = childrenOf[id] || [];
    // init its children
    item[CHILDREN_KEY] = childrenOf[id];
    if (parentId !== 0) {
      // init its parent's children object
      childrenOf[parentId] = childrenOf[parentId] || [];
      // push it into its parent's children object
      childrenOf[parentId].push(item);
    } else {
      tree.push(item);
    }
  }

  return tree;
};

const list = [
  {
    id: 6,
    any: "opps"
  },
  {
    id: 2,
    parent: 5,
    any: "foo"
  },
  {
    id: 1,
    parent: 2,
    any: "bar"
  },
  {
    id: 5,
    any: "hello"
  },
  {
    id: 3,
    parent: 2,
    any: "other"
  }
];
const tree = listToTree(list);
console.log(tree);
