/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  const sortEntries = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  const topKEntries = sortEntries.slice(0, k);
  return topKEntries.map(([num]) => num);
}
// @lc code=end
topKFrequent([1, 1, 1, 2, 2, 3], 2);
