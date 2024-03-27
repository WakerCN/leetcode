/*
 * @Author       : 魏威
 * @Date         : 2024-03-27 15:48
 * @LastEditTime : 2024-03-27 16:14
 * @LastEditors  : Waker
 * @Description  :
 */

/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
export function containsDuplicate(nums: number[]): boolean {
  const set = new Set(nums);
  return set.size !== nums.length;
}
// @lc code=end

containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
