import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import type { StyleProp, ViewStyle, TextStyle } from 'react-native';

interface Props {
  readonly text: string;
  readonly suggestions?: string[];
  readonly onSuggestionPress?: (suggestion: string) => void;
  readonly maxSuggestions?: number;
  readonly caseSensitive?: boolean;
  readonly containerStyle?: StyleProp<ViewStyle>;
  readonly suggestionItemStyle?: StyleProp<ViewStyle>;
  readonly suggestionTextStyle?: StyleProp<TextStyle>;
  readonly showBorder?: boolean;
  readonly highlightMatchedText?: boolean;
  readonly renderSuggestion?: (
    suggestion: string,
    index: number,
    isHighlighted: boolean,
    onPress: () => void
  ) => React.ReactNode;
}

export function Autocomplete(props: Props) {
  const {
    text,
    suggestions = [],
    onSuggestionPress,
    maxSuggestions = 5,
    caseSensitive = false,
    containerStyle,
    suggestionItemStyle,
    suggestionTextStyle,
    showBorder = true,
    highlightMatchedText = false,
    renderSuggestion,
  } = props;

  const filteredSuggestions = suggestions
    .filter((suggestion) => {
      const searchText = caseSensitive ? text : text.toLowerCase();
      const suggestionText = caseSensitive
        ? suggestion
        : suggestion.toLowerCase();
      return (
        suggestionText.includes(searchText) &&
        suggestionText !== searchText &&
        text.trim() !== ''
      );
    })
    .slice(0, maxSuggestions);

  if (filteredSuggestions.length === 0) {
    return null;
  }

  const handleSuggestionPress = (suggestion: string) => {
    onSuggestionPress?.(suggestion);
  };

  const renderSuggestionText = (suggestion: string) => {
    if (!highlightMatchedText) {
      return (
        <Text style={[styles.textStyle, suggestionTextStyle]}>
          {suggestion}
        </Text>
      );
    }

    const searchText = caseSensitive ? text : text.toLowerCase();
    const suggestionText = caseSensitive
      ? suggestion
      : suggestion.toLowerCase();
    const index = suggestionText.indexOf(searchText);

    if (index === -1) {
      return (
        <Text style={[styles.textStyle, suggestionTextStyle]}>
          {suggestion}
        </Text>
      );
    }

    const beforeMatch = suggestion.substring(0, index);
    const match = suggestion.substring(index, index + text.length);
    const afterMatch = suggestion.substring(index + text.length);

    return (
      <Text style={[styles.textStyle, suggestionTextStyle]}>
        {beforeMatch}
        <Text style={styles.highlightedText}>{match}</Text>
        {afterMatch}
      </Text>
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        data={filteredSuggestions}
        keyExtractor={(item, index) => `${item}-${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          // Check if custom render function is provided
          if (renderSuggestion) {
            const isHighlighted =
              highlightMatchedText &&
              (caseSensitive ? item : item.toLowerCase()).includes(
                caseSensitive ? text : text.toLowerCase()
              );

            return (
              <View>
                {renderSuggestion(item, index, isHighlighted, () =>
                  handleSuggestionPress(item)
                )}
              </View>
            );
          }

          // Default rendering
          return (
            <TouchableOpacity
              style={[
                styles.suggestionItems,
                suggestionItemStyle,
                !showBorder && styles.noBorder,
                index === filteredSuggestions.length - 1 && styles.lastItem,
              ]}
              onPress={() => handleSuggestionPress(item)}
              accessibilityRole="button"
              accessibilityLabel={`Select suggestion: ${item}`}
            >
              {renderSuggestionText(item)}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    opacity: 1,
    flex: 1,
    position: 'absolute',
    width: '100%',
    zIndex: 1000,
    top: 40,
    maxHeight: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    textTransform: 'capitalize',
    fontSize: 14,
    color: '#333',
  },
  suggestionItems: {
    minHeight: 40,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  highlightedText: {
    fontWeight: 'bold',
    color: '#007bff',
    backgroundColor: '#e3f2fd',
  },
});
