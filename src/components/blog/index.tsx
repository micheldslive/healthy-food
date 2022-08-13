import { BlogCarousel } from "@/components/blogCarousel";
import { data } from "@/mocks/data";
import * as C from "./styled";

export const ReadBlog = () => {
  const { blog } = data
  return (
    <>
      <C.ReadBlogFull id="blog">
        <C.ReadBlogContainer>
          <C.Title>{blog.title}</C.Title>
          <C.Subtitle>
            {blog.desc}
          </C.Subtitle>
          <C.CardContainer>
            <BlogCarousel />
          </C.CardContainer>
        </C.ReadBlogContainer>
      </C.ReadBlogFull>
    </>
  );
};