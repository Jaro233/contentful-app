import { createClient } from "contentful";
import { useState, useEffect } from "react";
const client = createClient({
  space: "etw6vrcmg85b",
  environment: "master",
  accessToken: "pgwseIDvzdHLwWNpKCCJ0eaJ_mB4976cgrzUrHxYHmA",
});

export const useFetchProjects = () => {
  const [loading, SetLoading] = useState(true);
  const [projects, SetProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      SetProjects(projects);
      SetLoading(false);
    } catch (error) {
      console.log(error);
      SetLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
