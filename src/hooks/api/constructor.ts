import { useArticleGroupsServiceGetV1AdminArticleGroups as useGetArticleGroups } from "@/generated-api/queries";
import { useArticleGroupsServiceGetV1AdminArticleGroupsById as useGetArticleGroup } from "@/generated-api/queries";
import { useArticleGroupsServicePostV1AdminArticleGroups as useCreateArticleGroup } from "@/generated-api/queries";
import { useArticleGroupsServicePutV1AdminArticleGroupsById as useUpdateArticleGroup } from "@/generated-api/queries";
import { useArticleGroupsServicePatchV1AdminArticleGroupsByIdStatus as useChangeActiveGroup } from "@/generated-api/queries";

export {
  useGetArticleGroups,
  useGetArticleGroup,
  useCreateArticleGroup,
  useUpdateArticleGroup,
  useChangeActiveGroup,
}