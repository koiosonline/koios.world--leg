import { Icon } from '@koios-world/shared-ui';
import { useState } from 'react';
import validator from '@rjsf/validator-ajv8';
import Form, { IChangeEvent } from '@rjsf/core';
import { schema, uiSchema } from './Schema/Schema';
import { UiSchema } from '@rjsf/utils';

type SearchBarType = {
  onSearch: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export const SearchBar = (props: SearchBarType) => {
  const { onSearch, placeholder, className } = props;
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: IChangeEvent) => {
    const { formData } = event;
    setSearchTerm(formData);
  };

  const handleSubmit = (event: IChangeEvent) => {
    const { formData } = event;
    onSearch(formData.title);
  };

  return (
    <div
      className={`flex items-center  rounded border-2 border-slate-100 text-sm focus-within:border-secondary-light ${className ?? className}`}
    >
      <div className=" px-2">
        <Icon name="magnifying-glass" />
      </div>

      <Form
        schema={schema}
        uiSchema={uiSchema(placeholder) as UiSchema}
        validator={validator}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onError={() => console.log('errors')}
        formData={searchTerm}
        className="flex-grow"
      />
    </div>
  );
};
