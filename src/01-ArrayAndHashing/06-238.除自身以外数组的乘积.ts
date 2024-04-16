/*
 * @Author       : 魏威
 * @Date         : 2024-04-09 14:50
 * @LastEditTime : 2024-04-09 15:23
 * @LastEditors  : starone
 * @Description  :
 */
/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const prefixArr: number[] = [];
  const suffixArr: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefixArr[0] = 1;
    } else {
      prefixArr[i] = prefixArr[i - 1] * nums[i - 1];
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      suffixArr[nums.length - 1] = 1;
    } else {
      suffixArr[i] = suffixArr[i + 1] * nums[i + 1];
    }
  }
  return prefixArr.map((pre, index) => pre * suffixArr[index]);
}
// @lc code=end

const result = productExceptSelf([1, 2, 3, 4]);
