const base = "/";
function assets(resource: string) {
  if (!resource) throw new Error("Exepected a path valid to rouserce");

  return `${base}${resource}`;
}

export default assets;
