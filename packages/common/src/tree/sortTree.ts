import type { TreeConfigOptions } from './types';

/**
 * 对树形结构数据进行递归排序
 *
 * 对树形结构的每一层节点应用排序函数，保持层级结构
 *
 * @typeParam T - 树节点类型，必须是对象类型
 *
 * @param treeData - 树形数据数组
 * @param sortFunction - 排序函数，用于定义排序规则
 * @param options - 配置选项
 * @param options.childProps - 子节点属性名称，默认为 'children'
 *
 * @returns 排序后的树形数据
 *
 * @example 按 id 升序排序
 * ```typescript
 * const tree = [
 *   { id: 3, name: 'C', children: [{ id: 5, name: 'E' }] },
 *   { id: 1, name: 'A', children: [{ id: 4, name: 'D' }, { id: 2, name: 'B' }] }
 * ];
 *
 * const result = sortTree(tree, (a, b) => a.id - b.id);
 * console.log(result);
 * // [
 * //   { id: 1, name: 'A', children: [
 * //     { id: 2, name: 'B' },
 * //     { id: 4, name: 'D' }
 * //   ]},
 * //   { id: 3, name: 'C', children: [{ id: 5, name: 'E' }] }
 * // ]
 * ```
 *
 * @example 按名称字母顺序排序
 * ```typescript
 * const tree = [
 *   { name: 'Zebra', children: [{ name: 'Y' }] },
 *   { name: 'Apple', children: [{ name: 'Beta' }] }
 * ];
 *
 * const result = sortTree(tree, (a, b) => a.name.localeCompare(b.name));
 * console.log(result);
 * // [
 * //   { name: 'Apple', children: [{ name: 'Beta' }] },
 * //   { name: 'Zebra', children: [{ name: 'Y' }] }
 * // ]
 * ```
 *
 * @example 按自定义属性排序
 * ```typescript
 * const tree = [
 *   { priority: 2, tasks: [{ priority: 3 }] },
 *   { priority: 1, tasks: [{ priority: 2 }] }
 * ];
 *
 * const result = sortTree(
 *   tree,
 *   (a, b) => a.priority - b.priority,
 *   { childProps: 'tasks' }
 * );
 * ```
 */
export function sortTree<T extends Record<string, any>>(
  treeData: T[],
  sortFunction: (a: T, b: T) => number,
  options?: TreeConfigOptions,
): T[] {
  const childProps = options?.childProps ?? 'children';

  return [...treeData].sort(sortFunction).map((item) => {
    const children = item[childProps as keyof T];
    if (children && Array.isArray(children) && children.length > 0) {
      const result: T = {
        ...item,
      };
      (result as any)[childProps] = sortTree(children, sortFunction, options);
      return result;
    }
    return item;
  });
}
