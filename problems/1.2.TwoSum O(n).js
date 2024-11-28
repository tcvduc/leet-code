/**
 * Problem
 * Given an array of integers "nums"
 * and an integer "target"
 * return "indices" of the two
 * numbers such that they add up
 * to "target".
 *
 * You may assume that each input
 * would have exactly one solution
 * and you may not use the same
 * element twice.
 *
 * You can return the answer
 * in any order.
 *
 *
 * -----------------------
 * -- Example 1
 * -----------------------
 *
 * ---------------0 1 2  3
 * input: nums = [2,7,11,5], target = 9
 * output: [0,1]
 * explanation:
 * nums[0] + nums[1] = 2 + 7 = 9
 * => return [0,1]
 *
 * Example 2
 * input: nums = [3,2,4], target = 6
 * output:
 *
 * -----------------------
 * -- Example 2
 * -----------------------
 *
 * --------0 1 2
 * nums = [3,2,4]
 * target = 6
 * output = [1,2]
 * explanation
 * nums[1] + nums[2] = 2 + 4 = 6
 * => [1,2]
 *
 *
 * -----------------------
 * -- Example 3
 * -----------------------
 *
 * --------0 1
 * nums = [3,3]
 * target = 6
 * output = [0,1]
 * explanation
 * nums[0] + nums[1] = 3 + 3 = 6
 * => [0,1]
 *
 * Constraints
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * Only one valid answer exists
 *
 * Follow-up
 * Can you come up with an algorithm
 * that is less than O(n^2) time
 * complexity ?
 *
 *
 *
 *
 *
 */

/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 */
function twoSum(nums, target) {
  const numsLength = nums.length;
  const breakLoop = numsLength - 1;

  for (let i = 0; i <= breakLoop; ) {
    const num1 = nums[i];
    const num2 = nums[i + 1];

    if (num1 + num2 === target) {
      return [i, i + 1];
    }

    if (num1 + num2 !== target) {
    }
  }
}

{
  // Test Case 1
  const nums1 = [2, 7, 11, 5];
  const target1 = 9;
  const output1 = twoSum(nums1, target1);

  console.log(output1); // [0,1]

  // Test case 2
  const nums2 = [3, 2, 4];
  const target2 = 6;
  const output2 = twoSum(nums2, target2);

  console.log(output2); // [1,2]

  // Test case 3
  const nums3 = [3, 3];
  const target3 = 6;
  const output3 = twoSum(nums3, target3);

  console.log(output3); // [0,1]
}
