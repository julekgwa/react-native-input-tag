import React from 'react';
import type { ImageStyle, TextStyle, StyleProp, ViewStyle } from 'react-native';
import type { ITagInputProps, ITags } from '../types';

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import { Autocomplete } from './Autocomplete';

type State = {
  tags: ITags;
};

export class TagInput extends React.Component<ITagInputProps, State> {
  input = React.createRef<TextInput>();

  focus() {
    this.input.current?.focus();
  }

  blur() {
    this.input.current?.blur();
  }

  clear() {
    this.input.current?.clear();
  }

  isFocused() {
    return this.input.current?.isFocused();
  }

  setNativeProps(nativeProps: object) {
    this.input.current?.setNativeProps(nativeProps);
  }

  renderLabel = (text: string, style: StyleProp<TextStyle>) => {
    return <Text style={style}>{text}</Text>;
  };

  renderLeftElement = (
    element: React.ReactElement,
    style: StyleProp<ViewStyle>
  ) => {
    return (
      <View
        style={StyleSheet.flatten([
          styles.leftElement as StyleProp<ViewStyle>,
          style,
        ])}
      >
        {element}
      </View>
    );
  };

  renderRightElement = (
    element: React.ReactElement,
    style: StyleProp<ViewStyle>
  ) => {
    return (
      <View
        style={StyleSheet.flatten([
          styles.rightElement as StyleProp<ViewStyle>,
          style,
        ])}
      >
        {element}
      </View>
    );
  };

  onChangeText = (
    text: string,
    tags: {
      tag: string;
      tagsArray: string[];
    },
    updateState: (state: { tag: string; tagsArray: string[] }) => void,
    keysForTags?: string
  ) => {
    const keysStr = keysForTags || ' ';

    if (text.includes(keysStr)) {
      if (text === keysStr) {
        return;
      }
      const tempTag = text.replace(keysStr, '').trim();

      // Avoid adding empty tags or duplicates
      if (tempTag && !tags.tagsArray.includes(tempTag)) {
        const tempArray = [...tags.tagsArray, tempTag];
        const tempObject = {
          tag: '',
          tagsArray: tempArray,
        };
        updateState(tempObject);
      }

      return this.input.current?.clear();
    }

    const tempObject = {
      tag: text,
      tagsArray: tags.tagsArray,
    };

    return updateState(tempObject);
  };

  deleteTag = (
    tagToDelete: number,
    tags: {
      tag: string;
      tagsArray: string[];
    },
    updateState: (state: { tag: string; tagsArray: string[] }) => void
  ) => {
    const tempArray = [...tags.tagsArray];
    tempArray.splice(tagToDelete, 1);

    const tempObject = {
      tag: tags.tag,
      tagsArray: tempArray,
    };
    updateState(tempObject);
  };

  render() {
    const {
      containerStyle,
      disabled,
      disabledInputStyle,
      inputContainerStyle,
      leftElement,
      leftElementContainerStyle,
      rightElement,
      rightElementContainerStyle,
      inputStyle,
      label,
      labelStyle,
      tags,
      tagStyle,
      tagTextStyle,
      tagsViewStyle,
      updateState,
      keysForTag,
      deleteIconStyles,
      customElement,
      suggestions = [],
      // Autocomplete props
      maxSuggestions,
      caseSensitive,
      autocompleteContainerStyle,
      autocompleteSuggestionItemStyle,
      autocompleteSuggestionTextStyle,
      showAutocompleteBorder,
      highlightMatchedText,
      renderSuggestion,
      renderTag,
      renderDeleteButton,
    } = this.props;

    const props = this.props;

    return (
      <View style={StyleSheet.flatten([styles.container, containerStyle])}>
        {label
          ? this.renderLabel(
              label,
              StyleSheet.flatten([styles.labelStyle, labelStyle])
            )
          : null}
        <View
          style={StyleSheet.flatten(
            StyleSheet.flatten([
              styles.inputContainer as StyleProp<ViewStyle>,
              inputContainerStyle,
            ])
          )}
        >
          {leftElement
            ? this.renderLeftElement(leftElement, leftElementContainerStyle)
            : null}
          <TextInput
            underlineColorAndroid="transparent"
            editable={!disabled}
            ref={this.input}
            style={StyleSheet.flatten([
              styles.input,
              tags.tag ? styles.hasValue : null,
              inputStyle,
              disabled && styles.disabledInput,
              disabled && disabledInputStyle,
            ])}
            {...props}
            value={tags.tag}
            onChangeText={(text) =>
              this.onChangeText(text, tags, updateState, keysForTag)
            }
          />
          {Boolean(tags.tag && suggestions?.length > 0) && (
            <Autocomplete
              suggestions={suggestions}
              text={tags.tag}
              maxSuggestions={maxSuggestions}
              caseSensitive={caseSensitive}
              containerStyle={autocompleteContainerStyle}
              suggestionItemStyle={autocompleteSuggestionItemStyle}
              suggestionTextStyle={autocompleteSuggestionTextStyle}
              showBorder={showAutocompleteBorder}
              highlightMatchedText={highlightMatchedText}
              renderSuggestion={renderSuggestion}
              onSuggestionPress={(suggestion) => {
                const tempArray = [...tags.tagsArray];
                if (!tempArray.includes(suggestion)) {
                  tempArray.push(suggestion);
                  updateState({
                    tag: '',
                    tagsArray: tempArray,
                  });
                  this.input.current?.clear();
                }
              }}
            />
          )}
          {rightElement
            ? this.renderRightElement(rightElement, rightElementContainerStyle)
            : null}
        </View>

        {customElement}
        <View
          style={StyleSheet.flatten([
            styles.tagsView as StyleProp<ViewStyle>,
            tagsViewStyle,
          ])}
        >
          {tags.tagsArray.map((item, count) => {
            if (renderTag) {
              return (
                <React.Fragment key={count}>
                  {renderTag(item, count, () =>
                    this.deleteTag(count, tags, updateState)
                  )}
                </React.Fragment>
              );
            }

            return (
              <View
                style={StyleSheet.flatten([
                  styles.tag as StyleProp<ViewStyle>,
                  tagStyle,
                ])}
                key={count}
              >
                <Text
                  style={StyleSheet.flatten([styles.tagText, tagTextStyle])}
                >
                  {item}
                </Text>
                {renderDeleteButton ? (
                  renderDeleteButton(
                    () => this.deleteTag(count, tags, updateState),
                    item,
                    count
                  )
                ) : (
                  <TouchableHighlight
                    style={styles.close as StyleProp<ViewStyle>}
                    onPress={() => this.deleteTag(count, tags, updateState)}
                  >
                    <Image
                      source={require('./close.png')}
                      style={StyleSheet.flatten([
                        styles.deleteIcon as StyleProp<ImageStyle>,
                        deleteIconStyles,
                      ])}
                    />
                  </TouchableHighlight>
                )}
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 3,
    position: 'relative' as const,
    zIndex: 0,
  },
  disabledInput: {
    opacity: 0.5,
  },
  inputContainer: {
    flexDirection: 'row',
    height: 60,
  },
  leftElement: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  rightElement: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  input: {
    color: 'black',
    fontSize: 18,
    flex: 1,
    minHeight: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  tagsView: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  tag: {
    flexDirection: 'row',
    minHeight: 26,
    borderRadius: 13,
    backgroundColor: '#979797',
    minWidth: 40,
    maxWidth: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  tagText: {
    marginHorizontal: 5,
    marginRight: 23,
  },
  close: {
    position: 'absolute' as const,
    right: 5,
  },
  labelStyle: {
    fontSize: 12,
    marginTop: 12,
    marginBottom: 10,
  },
  deleteIcon: {
    width: 20,
    height: 20,
    opacity: 0.5,
    marginLeft: 5,
  },
  hasValue: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});
