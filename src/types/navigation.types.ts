import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Project } from './project.types';

export type RootStackParamList = {
  Home: undefined;
  ProjectDetail: { project: Project };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export type ProjectDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProjectDetail'>;

export type ProjectDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProjectDetail'
>;
