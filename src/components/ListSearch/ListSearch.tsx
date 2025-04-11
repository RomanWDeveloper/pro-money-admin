import { GetProps, Input } from "antd";

type ListSearchProps = {
  onSearchStart: (value: string) => void;
};

export const ListSearch = ({ onSearchStart }: ListSearchProps) => {
  const { Search } = Input;
  type SearchProps = GetProps<typeof Input.Search>;

  const onSearch: SearchProps['onSearch'] = (value, _e) => {
    onSearchStart(value);
  };

  return (
      <Search placeholder="Поиск" onSearch={onSearch} style={{ width: 200 }} />
  );
};
