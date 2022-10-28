import axios from "axios";

const getUsers = async () => {
  try {
    const res = await axios.get("https://centarnit.deta.dev/users/");
    console.log(res.data);
    return res.data;
  } catch (err) {
    throw Error(err);
  }
};

export default {
  getUsers,
};
