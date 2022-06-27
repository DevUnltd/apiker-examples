import { res } from "apiker";

export const example1_saveValueCommon = async ({ state }) => {
  // Using `state` with no parameters will default to the Common object
  const count = ((await state().get("count")) || 0) + 1;
  await state().put({ count });
  return res({ count });
};
