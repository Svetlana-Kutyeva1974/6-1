export default function orderByProps(obj, args) {
  const result = [];
  const result2 = [];
  for (const key of args) {
    result.push({ key: `${key}`, value: `${obj[key]}` });
  }
  for (const key in obj) {
    if (!args.includes(key)) {
      result2.push({ key: `${key}`, value: `${obj[key]}` });
    }
  }
  result2.sort((a, b) => a.key.localeCompare(b.key));
  return [...result, ...result2];
}
