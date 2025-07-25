import type { ViewStyle, StyleProp, TextStyle, ImageStyle } from 'react-native';

export interface ITags {
  tag: string;
  tagsArray: string[];
}

export interface ITagInputProps {
  disabled?: boolean;
  leftElement?: React.ReactElement;
  rightElement?: React.ReactElement;
  customElement?: React.ReactElement;
  label?: string;
  tags: {
    tag: string;
    tagsArray: string[];
  };
  updateState: (tags: ITags) => void;
  keysForTag?: string;
  containerStyle?: StyleProp<ViewStyle>;
  tagStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  tagsViewStyle?: StyleProp<ViewStyle>;
  tagTextStyle?: StyleProp<TextStyle>;
  disabledInputStyle?: StyleProp<ViewStyle>;
  leftElementContainerStyle?: StyleProp<ViewStyle>;
  rightElementContainerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  deleteIconStyles?: StyleProp<ImageStyle>;
  suggestions?: string[];
  // Autocomplete customization props
  maxSuggestions?: number;
  caseSensitive?: boolean;
  autocompleteContainerStyle?: StyleProp<ViewStyle>;
  autocompleteSuggestionItemStyle?: StyleProp<ViewStyle>;
  autocompleteSuggestionTextStyle?: StyleProp<TextStyle>;
  showAutocompleteBorder?: boolean;
  highlightMatchedText?: boolean;
  renderSuggestion?: (
    suggestion: string,
    index: number,
    isHighlighted: boolean,
    onPress: () => void
  ) => React.ReactNode;
  renderTag?: (
    tag: string,
    index: number,
    onDelete: () => void
  ) => React.ReactNode;
  renderDeleteButton?: (
    onDelete: () => void,
    tag: string,
    index: number
  ) => React.ReactNode;
}
