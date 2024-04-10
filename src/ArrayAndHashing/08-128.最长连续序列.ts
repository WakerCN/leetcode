/*
 * @Author       : 魏威
 * @Date         : 2024-04-10 10:28
 * @LastEditTime : 2024-04-10 16:57
 * @LastEditors  : starone
 * @Description  :
 */
import _ from "lodash";
/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 * 1. 排序
 * 2. 数组为sortStack，sortStact依次出栈
 * 3. 如果出栈元素 是currentStact栈顶元素 + 1，则继续出栈
 * 4. 否则，更新max
 */

// @lc code=start
// function longestConsecutive(nums: number[]): number {
//   const uniqNums = _.uniq(nums);
//   const sortNums = uniqNums.slice().sort((a, b) => a - b);
//   let currentStact = [];
//   let max = 0;
//   for (let i = 0; i < uniqNums.length; i++) {
//     const element = sortNums.shift();
//     if (currentStact.length === 0) {
//       currentStact.push(element);
//     } else {
//       const diffValue = element - currentStact[currentStact.length - 1];
//       if (diffValue === 0) {
//       } else if (diffValue === 1) {
//         currentStact.push(element);
//       } else {
//         max = Math.max(currentStact.length, max);
//         currentStact = [element];
//       }
//     }
//   }
//   return Math.max(max, currentStact.length);
// }
function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let max = 0;
  for (const num of numSet) {
    if (numSet.has(num - 1)) {
      continue;
    }
    let currentNum = num;
    let currentCount = 1;
    while (numSet.has(currentNum + 1)) {
      currentNum++;
      currentCount++;
    }
    max = Math.max(max, currentCount);
  }
  return max;
}
// @lc code=end
longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]);
