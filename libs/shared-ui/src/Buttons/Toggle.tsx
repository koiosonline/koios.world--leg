type ToggleType = {
  checked?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onToggle: () => void;
};

export const Toggle = (props: ToggleType) => {
  const { checked, onToggle, disabled } = props;
  const color = 'peer-checked:bg-primary dark:border-gray-600 dark:bg-gray-700';

  return (
    <label className={`relative inline-flex items-center ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}>
      <input type="checkbox" value="" className="peer sr-only" checked={checked} disabled={disabled} />
      <div
        className={`peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none ${color}`}
      />
    </label>
  );
};
