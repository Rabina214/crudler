import { StyleSheet } from 'react-native';
import Screen from '../Layout/Screen';
import ModuleView from '../../Entity/Modules/ModuleView';

const ModuleViewScreen = ({navigate, route}) => {
  // Initialisations-----------------
  const { module, onDelete } = route.params;

  // State---------------------------
  // Handlers------------------------
  // View----------------------------
  return (
    <Screen>
      <ModuleView module={module} onDelete={onDelete} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;

