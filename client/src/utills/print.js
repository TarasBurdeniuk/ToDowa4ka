export default function print(name, obj) {
  console.log(name, JSON.stringify(obj, null, 2));
}
