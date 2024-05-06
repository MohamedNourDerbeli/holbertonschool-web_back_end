export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    task = true; // Removed var declaration to avoid redeclaration
    task2 = false; // Removed var declaration to avoid redeclaration
  }

  return [task, task2];
}
