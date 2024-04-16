/*
 * @Author       : 魏威
 * @Date         : 2024-03-28 09:35
 * @LastEditTime : 2024-03-28 11:31
 * @LastEditors  : Waker
 * @Description  :
 */

/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const sMap = [...s].reduce((pre, cur) => {
    pre[cur] = (pre[cur] ?? 0) + 1;
    return pre;
  }, {} as Object);

  for (let i = 0; i < t.length; i++) {
    if (!sMap.hasOwnProperty(t[i])) {
      return false;
    } else {
      sMap[t[i]] -= 1;
    }
  }
  return Object.values(sMap).every((v) => v === 0);
}
// @lc code=end

isAnagram("anagram", "nagaram");
