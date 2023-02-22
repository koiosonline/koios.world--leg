import { Icon } from '@koios-world/shared-ui';
import { useState } from 'react';

type SearchBarType = {
  onSearch: (value: string) => void;
  placeholder?: string;
};

export const SearchBar = (props: SearchBarType) => {
  const { onSearch, placeholder } = props;
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className='flex items-center gap-2'>
      <Icon name={'magnifying-glass'} />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder={placeholder} value={searchTerm} onChange={handleInputChange} />
      </form>
    </div>
  );
};
