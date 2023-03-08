import { Toggle } from '@koios-world/shared-ui';

export enum SettingsItemActionType {
  Toggle = 'Toggle',
  Button = 'Button'
}

type SettingsItemType = {
  title: string;
  description: string;
  action: () => void;
  actionType?: SettingsItemActionType;
  actionLabel?: string;
  showBorder?: boolean;
};

export const SettingsItem = (props: SettingsItemType) => {
  const { title, description, action, actionType = 'Toggle', actionLabel, showBorder = true } = props;

  return (
    <div className={`flex items-center justify-between gap-10 py-6 ${showBorder ? 'border-t' : ''} border-slate-200 py-2`}>
      <div>
        <h1 className="h6 mb-2 text-primary-dark">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>

      {actionType === SettingsItemActionType.Toggle && <Toggle onToggle={action} />}
      {actionType === SettingsItemActionType.Button && <button onClick={action}>{actionLabel}</button>}
    </div>
  );
};
