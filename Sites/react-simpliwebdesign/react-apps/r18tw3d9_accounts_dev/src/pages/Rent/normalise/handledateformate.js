

/** date format */
export const handledateformate = (dt) => {
  const date = new Date(dt);
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}