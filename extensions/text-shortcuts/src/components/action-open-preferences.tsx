import { Action, ActionPanel, Icon, openCommandPreferences } from "@raycast/api";

export function ActionOpenPreferences() {
  return (
    <ActionPanel.Section>
      <Action
        icon={Icon.Gear}
        title="Open Command Preferences"
        shortcut={{ modifiers: ["shift", "cmd"], key: "," }}
        onAction={openCommandPreferences}
      />
    </ActionPanel.Section>
  );
}
