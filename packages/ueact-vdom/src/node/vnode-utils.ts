import { VNode } from './VNode';

export const createEmptyVNode = (text: string = '') => {
  const node = new VNode();
  return node;
};

/**
 * Description 创建
 * @param val
 * @return {VNode}
 */
export function createTextVNode(val: string | number) {
  return new VNode(undefined, undefined, [String(val)]);
}
