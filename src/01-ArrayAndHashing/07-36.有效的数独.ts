/*
 * @Author       : 魏威
 * @Date         : 2024-04-09 15:56
 * @LastEditTime : 2024-04-10 09:05
 * @LastEditors  : starone
 * @Description  :
 */
/*
 * @lc app=leetcode.cn id=36 lang=typescript
 *
 * [36] 有效的数独
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
  const lineMap = new Map();
  const columnMap = new Map();
  const blockMap = new Map();
  // const lineHashTable;
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      const char = board[y][x];
      if (char !== ".") {
        /* 对 行 hash 判断
        =========================================== */
        if (!lineMap.get(y)) {
          lineMap.set(y, [char]);
        } else {
          const arr = lineMap.get(y);
          if (arr.indexOf(char) !== -1) return false;
          arr.push(char);
          lineMap.set(y, arr);
        }
        /* 对 列 hash 判断
        =========================================== */
        if (!columnMap.get(x)) {
          columnMap.set(x, [char]);
        } else {
          const arr = columnMap.get(x);
          if (arr.indexOf(char) !== -1) return false;
          arr.push(char);
          columnMap.set(x, arr);
          {
          }
        }
        /* 对 块 hash 判断
        =========================================== */
        const blockIndex = Math.floor(x / 3) + Math.floor(y / 3) * 3;
        if (!blockMap.get(blockIndex)) {
          blockMap.set(blockIndex, [char]);
        } else {
          const arr = blockMap.get(blockIndex);
          if (arr.indexOf(char) !== -1) return false;
          arr.push(char);
          blockMap.set(blockIndex, arr);
        }
      }
    }
  }
  return true;
}
// @lc code=end

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

isValidSudoku(board);
