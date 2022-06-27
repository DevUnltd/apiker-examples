import { res } from "apiker";

export const example3_instancePerRouteParam = async ({ state, matches }) => {
  // Get username from route (/example3/:username)
  const username = matches.params.username;
  const acceptedUsernames = ["bob", "rob", "todd"];

  if (acceptedUsernames.includes(username)) {
    const { name = username, count = 0 } = (await state("Example3").get("username")) || {};
    const payload = {
      username: {
        name,
        count: count + 1
      }
    };

    await state("Example3").put(payload);
    return res(payload);
  } else {
    return res({ acceptedUsernames });
  }
};
