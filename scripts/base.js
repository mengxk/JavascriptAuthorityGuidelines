/**
 * Created by mengxk on 2017/3/10.
 */
Object.classOf = function(o){
    if (o === null)  return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8, -1);
};
// console.info(Object.classOf(null));