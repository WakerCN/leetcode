/*
 * @Author       : 魏威
 * @Date         : 2024-04-16 09:27
 * @LastEditTime : 2024-05-24 10:28
 * @LastEditors  : starone
 * @Description  :
 */
/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 * 
 * 1.预先对字符串做一遍处理，仅保留字母数组，并且将字母全部转为大写
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  const pureStr = s.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
  if (pureStr.length <= 1) {
    return true;
  }
  let PointLeft = 0;
  let PointRight = pureStr.length - 1;

  const isValidChar = (char) => /^[a-zA-Z0-9]$/.test(char);

  while (PointLeft < PointRight) {
    while ( !isValidChar(pureStr[PointLeft])) PointLeft++;
    while (!isValidChar(pureStr[PointRight])) PointRight--;
    if (pureStr[PointLeft].toUpperCase() !== pureStr[PointRight].toUpperCase()) {
      return false;
    }
    PointLeft++;
    PointRight--;
  }
  return true;
}
// @lc code=end

export default isPalindrome;

isPalindrome(".,");
