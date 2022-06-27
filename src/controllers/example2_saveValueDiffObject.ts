import { res } from "apiker";

export const example2_saveValueDiffObject = async ({ state }) => {
  const count = ((await state("Example2").get("count")) || 0) + 1;
  await state("Example2").put({ count });
  return res({ count });
};
