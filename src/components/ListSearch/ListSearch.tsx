import { GetProps, Input } from "antd";
import { memo, useCallback } from "react";

type ListSearchProps = {
  onSearchStart: (value: string) => void;
};

export const ListSearch = memo(({ onSearchStart }: ListSearchProps) => {
  const { Search } = Input;
  type SearchProps = GetProps<typeof Input.Search>;

  const onSearch: SearchProps['onSearch'] = useCallback((value: string) => {
    onSearchStart(value);
  }, [onSearchStart]);

  return (
      <Search placeholder="Поиск" onSearch={onSearch} style={{ width: 200 }} />
  );
});
