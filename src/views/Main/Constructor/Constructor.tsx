import { ListSearch } from "@/components/ListSearch";
import { ListSort } from "@/components/ListSort";
import { Button, Flex } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { CONSTRUCTOR } from "@/constants/links/constructor";
import { ConstructorContent } from "./style";

export const Constructor = () => {
  const navigate = useNavigate();

  return (
    <ConstructorContent>
        <Flex className="filter-content">
          <Flex gap={10}>
            <Button type="primary" onClick={() => navigate(CONSTRUCTOR.TEMPLATE.CREATE.fullPath)}>Добавить шаблон</Button>
            <Button type="primary" onClick={() => navigate(CONSTRUCTOR.GROUP.CREATE.fullPath)}>Добавить группу</Button>
          </Flex>

          <ListSort 
            options={[]}
            handleChange={() => {}}
            onDirectionChange={() => {}}
          />
          <ListSearch 
            onSearchStart={() => {}}
          />
      </Flex>
      <Outlet />
    </ConstructorContent>
  );
};