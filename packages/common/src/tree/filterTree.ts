import type { TreeConfigOptions } from './types';

/**
 * 根据条件过滤给定树结构的节点
 *
 * 保留满足条件的节点及其祖先节点，保持原有的层级结构
 *
 * @typeParam T - 树节点类型，必须是对象类型
 *
 * @param tree - 要过滤的树结构的根节点数组
 * @param filter - 用于匹配每个节点的条件函数
 * @param options - 配置选项
 * @param options.childProps - 子节点属性名称，默认为 'children'
 *
 * @returns 包含所有匹配节点的数组
 *
 * @example 过滤包含特定属性的节点
 * ```typescript
 * const tree = [
 *   { id: 1, active: true, children: [
 *     { id: 2, active: false },
 *     { id: 3, active: true }
 *   ]},
 *   { id: 4, active: false }
 * ];
 *
 * const result = filterTree(tree, node => node.active);
 * console.log(result);
 * // [
 * //   { id: 1, active: true, children: [{ id: 3, active: true }] }
 * // ]
 * ```
 *
 * @example 过滤包含特定文本的节点
 * ```typescript
 * const tree = [
 *   { name: 'A', children: [{ name: 'Apple' }] },
 *   { name: 'B', children: [{ name: 'Banana' }] }
 * ];
 *
 * const result = filterTree(tree, node => node.name.includes('A'));
 * console.log(result);
 * // [
 * //   { name: 'A', children: [{ name: 'Apple' }] }
 * // ]
 * ```
 *
 * @example 使用自定义子节点属性
 * ```typescript
 * const tree = [
 *   { id: 1, items: [{ id: 2, visible: true }] }
 * ];
 *
 * const result = filterTree(
 *   tree,
 *   node => node.visible,
 *   { childProps: 'items' }
 * );
 * ```
 */
export function filterTree<T extends Record<string, any>>(
  tree: T[],
  filter: (node: T) => boolean,
  options?: TreeConfigOptions,
): T[] {
  const childProps = options?.childProps ?? 'children';

  const _filterTree = (nodes: T[]): T[] => {
    return nodes.filter((node: Record<string, any>) => {
      if (filter(node as T)) {
        if (node[childProps]) {
          node[childProps] = _filterTree(node[childProps]);
        }
        return true;
      }
      return false;
    });
  };

  return _filterTree(tree);
}
