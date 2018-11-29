[1,2,3].map(parseInt)

/**
 * 这个题目主要考察的就是map和parseInt
 * 1.map(function(para1,para2,para3))
 *   如果回调函数可以接收的话，map最多可以传入三个参数，分别是数组中的每一项的值，每一项的index，数组本身
 * 2.parseInt可以接收两个参数，分别是值和当前值的进制，然后返回十进制的整数值，比如：
 *   parseInt(10,2) => 2
 *   parseInt(10,8) => 8
 * 如果paseInt第二个参数未传，则默认为10进制
 * 支持的进制只有2~36，其他的均返回NaN
 * 如果输入的值不符合当前进制，则从左往右取值中符合进制的部分进行转换，比如
 *   parseInt(11,2) => 3
 *   parseInt(113,2) => 3
 * 如果值的首位就不符合进制，则直接返回NaN
 */
