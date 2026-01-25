import type { TreeConfigOptions } from './types';

/**
 * 根据条件重新映射给定树结构的节点
 *
 * 对树形结构的每个节点应用映射函数，生成新的树形结构
 *
 * @typeParam T - 源树节点类型
 * @typeParam V - 目标树节点类型，必须是对象类型
 *
 * @param tree - 要映射的树结构的根节点数组
 * @param mapper - 用于映射每个节点的函数
 * @param options - 配置选项
 * @param options.childProps - 子节点属性名称，默认为 'children'
 *
 * @returns 映射后的树形结构数组
 *
 * @example 添加新属性到节点
 * ```typescript
 * const tree = [
 *   { id: 1, name: 'A', children: [{ id: 2, name: 'A-1' }] }
 * ];
 *
 * const result = mapTree(tree, node => ({
 *   ...node,
 *   label: `${node.name} (${node.id})`
 * }));
 * console.log(result);
 * // [
 * //   { id: 1, name: 'A', label: 'A (1)', children: [
 * //     { id: 2, name: 'A-1', label: 'A-1 (2)' }
 * //   ]}
 * // ]
 * ```
 *
 * @example 转换节点类型
 * ```typescript
 * const tree = [
 *   { value: 'a', children: [{ value: 'a-1' }] }
 * ];
 *
 * const result = mapTree(tree, node => ({
 *   text: node.value,
 *   checked: false
 * }));
 * console.log(result);
 * // [
 * //   { text: 'a', checked: false, children: [{ text: 'a-1', checked: false }] }
 * // ]
 * ```
 *
 * @example 使用自定义子节点属性
 * ```typescript
 * const tree = [
 *   { id: 1, items: [{ id: 2 }] }
 * ];
 *
 * const result = mapTree(
 *   tree,
 *   node => ({ ...node, mapped: true }),
 *   { childProps: 'items' }
 * );
 * ```
 */
export function mapTree<T, V extends Record<string, any>>(
  tree: T[],
  mapper: (node: T) => V,
  options?: TreeConfigOptions,
): V[] {
  const childProps = options?.childProps ?? 'children';
  return tree.map((node) => {
    const mapperNode: Record<string, any> = mapper(node);
    if (mapperNode[childProps]) {
      mapperNode[childProps] = mapTree(mapperNode[childProps], mapper, options);
    }
    return mapperNode as V;
  });
}
