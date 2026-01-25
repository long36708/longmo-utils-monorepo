import type { TreeConfigOptions } from './types';

/**
 * 遍历树形结构，并返回所有节点中指定的值
 *
 * 使用深度优先遍历（DFS）遍历树形结构的所有节点，提取每个节点的指定值
 *
 * @typeParam T - 树节点类型
 * @typeParam V - 节点值的类型
 *
 * @param tree - 树形结构数组
 * @param getValue - 获取节点值的函数
 * @param options - 配置选项
 * @param options.childProps - 子节点属性名称，默认为 'children'
 *
 * @returns 所有节点中指定的值的数组
 *
 * @example 提取所有节点的 id
 * ```typescript
 * const tree = [
 *   { id: 1, name: 'A', children: [{ id: 2, name: 'A-1' }] },
 *   { id: 3, name: 'B' }
 * ];
 * const ids = traverseTreeValues(tree, node => node.id);
 * console.log(ids); // [1, 2, 3]
 * ```
 *
 * @example 使用自定义子节点属性
 * ```typescript
 * const tree = [
 *   { id: 1, items: [{ id: 2 }] }
 * ];
 * const ids = traverseTreeValues(
 *   tree,
 *   node => node.id,
 *   { childProps: 'items' }
 * );
 * ```
 *
 * @example 提取所有节点的名称
 * ```typescript
 * const names = traverseTreeValues(tree, node => node.name);
 * console.log(names); // ['A', 'A-1', 'B']
 * ```
 */
export function traverseTreeValues<T, V>(
  tree: T[],
  getValue: (node: T) => V,
  options?: TreeConfigOptions,
): V[] {
  const result: V[] = [];
  const childProps = options?.childProps ?? 'children';

  const dfs = (treeNode: T) => {
    const value = getValue(treeNode);
    result.push(value);
    const children = (treeNode as Record<string, any>)?.[childProps];
    if (!children) {
      return;
    }
    if (children.length > 0) {
      for (const child of children) {
        dfs(child);
      }
    }
  };

  for (const treeNode of tree) {
    dfs(treeNode);
  }
  return result.filter(Boolean);
}
