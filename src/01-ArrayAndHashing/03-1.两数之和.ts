/*
 * @Author       : 魏威
 * @Date         : 2024-03-28 14:39
 * @LastEditTime : 2024-03-28 14:58
 * @LastEditors  : Waker
 * @Description  :
 */
/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    /** 差值 */
    const diff = target - nums[i];
    if (!map.has(nums[i])) {
      map.set(diff, i);
    } else {
      return [map.get(nums[i]), i];
    }
  }
}
// @lc code=end
