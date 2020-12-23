export default function print(name, obj) {
  // eslint-disable-next-line no-console
  console.log(name, JSON.stringify(obj, null, 2));
}
