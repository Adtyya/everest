import api from "@/utils/axios";

const getAllBlog = async (query) => {
  try {
    const searchQuery =
      query !== "" ? `filters[title][$contains]=${query ?? ""}&` : "";
    const res = await api.get(`/blogs?${searchQuery}populate=*`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export { getAllBlog };
