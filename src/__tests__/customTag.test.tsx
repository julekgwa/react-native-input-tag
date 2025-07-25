import { render, fireEvent } from '@testing-library/react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { TagInput } from '../index';

describe('TagInput Custom Tag Rendering', () => {
  const mockTags = {
    tag: '',
    tagsArray: ['tag1', 'tag2'],
  };

  const mockUpdateState = jest.fn();

  const customTagRenderer = (
    tag: string,
    index: number,
    onDelete: () => void
  ) => (
    <View testID={`custom-tag-${index}`} key={index}>
      <Text testID={`custom-tag-text-${index}`}>#{tag}</Text>
      <TouchableOpacity testID={`custom-delete-${index}`} onPress={onDelete}>
        <Text>✕</Text>
      </TouchableOpacity>
    </View>
  );

  it('should render custom tags when renderTag prop is provided', () => {
    const { getByTestId } = render(
      <TagInput
        tags={mockTags}
        updateState={mockUpdateState}
        renderTag={customTagRenderer}
      />
    );

    // Check that custom tags are rendered
    expect(getByTestId('custom-tag-0')).toBeTruthy();
    expect(getByTestId('custom-tag-1')).toBeTruthy();

    // Check custom tag text format
    expect(getByTestId('custom-tag-text-0')).toHaveTextContent('#tag1');
    expect(getByTestId('custom-tag-text-1')).toHaveTextContent('#tag2');
  });

  it('should call delete function when custom delete button is pressed', () => {
    const { getByTestId } = render(
      <TagInput
        tags={mockTags}
        updateState={mockUpdateState}
        renderTag={customTagRenderer}
      />
    );

    // Press the custom delete button for the first tag
    fireEvent.press(getByTestId('custom-delete-0'));

    // Verify that updateState was called with the tag removed
    expect(mockUpdateState).toHaveBeenCalledWith({
      tag: '',
      tagsArray: ['tag2'],
    });
  });

  it('should render default tags when renderTag prop is not provided', () => {
    const { queryByTestId, getByText } = render(
      <TagInput tags={mockTags} updateState={mockUpdateState} />
    );

    // Custom tags should not be present
    expect(queryByTestId('custom-tag-0')).toBeNull();
    expect(queryByTestId('custom-tag-1')).toBeNull();

    // Default tags should be present
    expect(getByText('tag1')).toBeTruthy();
    expect(getByText('tag2')).toBeTruthy();
  });

  it('should handle empty tags array with custom renderer', () => {
    const emptyTags = { tag: '', tagsArray: [] };

    const { queryByTestId } = render(
      <TagInput
        tags={emptyTags}
        updateState={mockUpdateState}
        renderTag={customTagRenderer}
      />
    );

    // No custom tags should be rendered
    expect(queryByTestId('custom-tag-0')).toBeNull();
  });
});
