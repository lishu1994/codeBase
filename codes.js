/**
 * 根据map规则将target中的项修改为source中的值
 * example:
 * map = {
 *   data: 'data',
 *   props: 'properties'
 * }
 * source = {
 *   data: 1,
 *   props: 2
 * }
 * target = {
 *   data: 3,
 *   properties: 4
 * }
 * 
 */

function mapKeys(source, target, map) {
  Object.keys(map).forEach(function (key) {
    if (source[key]) {
      target[map[key]] = source[key];
    }
  });
}


