import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Cwiczenie1MetaData } from './Cwiczenie1/router-data';
import { Cwiczenie2MetaData } from './Cwiczenie2/router-data';
import { Cwiczenie3MetaData } from './Cwiczenie3/router-data';
import { MoreOrLessMetaData } from './MoreOrLess/router-data';
import { MoreOrLessAdvancedMetaData } from './MoreOrLessAdvanced/router-data';
import { blockRouterMetaData as MaterialUIBasicElements } from './MaterialUIBasicElements/router-data';
import { blockRouterMetaData as MUITemplateDashboard } from './MUITemplateDashboard/router-data';
import { blockRouterMetaData as TodoExercise } from './TodoExercise/router-data';
import { blockRouterMetaData as LocalDevAndFetch } from './LocalDevAndFetch/router-data';
import { blockRouterMetaData as ToDoWithServer } from './ToDoWithServer/router-data';
import { blockRouterMetaData as ReduxTest } from './ReduxTest/router-data';
import { blockRouterMetaData as ReduxCounter } from './ReduxCounter/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Cwiczenie1MetaData,
  Cwiczenie2MetaData,
  Cwiczenie3MetaData,
  MoreOrLessMetaData,
  MoreOrLessAdvancedMetaData,
  MaterialUIBasicElements,
  MUITemplateDashboard,
  TodoExercise,
  LocalDevAndFetch,
  ToDoWithServer,
  ReduxTest,
  ReduxCounter,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
