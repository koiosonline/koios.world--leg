import { PageTitle } from '../components/PageTitle/PageTitle';
import { SettingsItem, SettingsItemActionType } from '../components/Settings/SettingsItem';

const Settings = () => {
  return (
    <>
      <PageTitle
        title="Settings"
        description="Customize your preferences and control your experience. Adjust your account settings, privacy settings, notifications, and more to suit your needs."
      />

      <ul className=" mx-auto mt-10 max-w-2xl">
        <SettingsItem
          title="Dark mode"
          description="Dark mode switches the color scheme of the app-portal to a darker background with lighter text for improved readability in low light conditions."
          action={() => console.log('edit')}
          showBorder={false}
        />

        <SettingsItem
          title="Add $Titan to your wallet"
          description="See your $Titan balance directly in your MetaMask wallet by importing it. Simply select the 'Import' option and your $Titan balance will be automatically visible in your MetaMask wallet."
          action={() => console.log('edit')}
          actionType={SettingsItemActionType.Button}
          actionLabel="Import"
        />
      </ul>
    </>
  );
};

export default Settings;
