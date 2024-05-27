/*
 * @Author       : 魏威
 * @Date         : 2024-05-27 09:44
 * @LastEditTime : 2024-05-27 10:01
 * @LastEditors  : starone
 * @Description  :
 */
/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  const map = new Map();
  for (let index = 0; index < numbers.length; index++) {
    const num = numbers[index];
    const complement = target - num;
    if (map.has(complement)) {
      return [map.get(complement), index + 1];
    }
    map.set(num, index + 1);
  }

  return [];
}
// @lc code=end

twoSum([2, 7, 11, 15], 9);

export default twoSum;
