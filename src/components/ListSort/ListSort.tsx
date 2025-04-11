import { Flex, Select } from "antd";
import { ArrowUpOutlined } from '@ant-design/icons';
import { useState } from "react";
import { UserSortDirection, UserSortOption, UserSortOptions } from '@/types';

type SortProps = {
  handleChange: (value: UserSortOption) => void;
  options: UserSortOptions;
  onDirectionChange: (direction: UserSortDirection) => void;
};

export const ListSort = ({ handleChange, options, onDirectionChange }: SortProps) => {
    const [arrowDirection, setArrowDirection] = useState<UserSortDirection>('asc');
    const handleArrowClick = () => {
      const newDirection: UserSortDirection = arrowDirection === 'asc' ? 'desc' : 'asc';
      setArrowDirection(newDirection);
      
      if (onDirectionChange) {
        onDirectionChange(newDirection);
      }
    };

  return (
    <Flex style={{ marginLeft: 'auto', marginRight: 10 }} gap={10} align="center">
        <ArrowUpOutlined onClick={handleArrowClick} style={{ transform: arrowDirection === 'desc' ? 'rotate(180deg)' : 'rotate(0deg)' }} />
        <Select
          placeholder="Сортировать"
          style={{ width: 250 }}
          onChange={handleChange}
          options={options}
      />
    </Flex>
  );
};
