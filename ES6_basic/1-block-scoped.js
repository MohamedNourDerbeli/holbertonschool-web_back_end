export default function taskBlock(trueOrFalse) {
  var tasks = false;
  var tasks2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [tasks, tasks2];
}
