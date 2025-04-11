import { useGetArticleGroups } from "@/hooks/api/constructor";
import { GroupsContent } from "./style";
import { ListConstructorGroups } from "@/components/ListConstructorGroups";

export const Groups = () => {

  const { data } = useGetArticleGroups();

  return (
    <GroupsContent>
      <ListConstructorGroups groups={data || []} />
     </GroupsContent>
  );
};