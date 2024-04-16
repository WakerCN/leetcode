/*
 * @Author       : 魏威
 * @Date         : 2024-04-04 11:35
 * @LastEditTime : 2024-04-07 21:47
 * @LastEditors  : Waker
 * @Description  : 
 */
import _ from "lodash";
/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const result = _.groupBy(strs, (s) => [...s].sort().join(""));
  return Object.values(result);
}
// @lc code=end

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
