import { render, fireEvent } from '@testing-library/react-native';
import { Text, TouchableOpacity } from 'react-native';
import { TagInput } from '../index';

describe('TagInput Custom Delete Button', () => {
  const mockTags = {
    tag: '',
    tagsArray: ['test1', 'test2'],
  };

  const mockUpdateState = jest.fn();

  const customDeleteButtonRenderer = (
    onDelete: () => void,
    tag: string,
    _index: number
  ) => (
    <TouchableOpacity testID={`custom-delete-${tag}`} onPress={onDelete}>
      <Text>🗑️</Text>
    </TouchableOpacity>
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render custom delete button when renderDeleteButton prop is provided', () => {
    const { getByTestId } = render(
      <TagInput
        tags={mockTags}
        updateState={mockUpdateState}
        renderDeleteButton={customDeleteButtonRenderer}
      />
    );

    // Check that custom delete buttons are rendered
    expect(getByTestId('custom-delete-test1')).toBeTruthy();
    expect(getByTestId('custom-delete-test2')).toBeTruthy();
  });

  it('should call delete function when custom delete button is pressed', () => {
    const { getByTestId } = render(
      <TagInput
        tags={mockTags}
        updateState={mockUpdateState}
        renderDeleteButton={customDeleteButtonRenderer}
      />
    );

    // Press the custom delete button for the first tag
    fireEvent.press(getByTestId('custom-delete-test1'));

    // Verify that updateState was called with the tag removed
    expect(mockUpdateState).toHaveBeenCalledWith({
      tag: '',
      tagsArray: ['test2'],
    });
  });

  it('should render default delete button when renderDeleteButton prop is not provided', () => {
    const { queryByTestId } = render(
      <TagInput tags={mockTags} updateState={mockUpdateState} />
    );

    // Custom delete buttons should not be present
    expect(queryByTestId('custom-delete-test1')).toBeNull();
    expect(queryByTestId('custom-delete-test2')).toBeNull();
  });

  it('should work with both renderTag and renderDeleteButton', () => {
    const customTagRenderer = (
      tag: string,
      index: number,
      _onDelete: () => void
    ) => (
      <Text testID={`custom-tag-${index}`} key={index}>
        Custom: {tag}
      </Text>
    );

    const { getByTestId, queryByTestId } = render(
      <TagInput
        tags={mockTags}
        updateState={mockUpdateState}
        renderTag={customTagRenderer}
        renderDeleteButton={customDeleteButtonRenderer}
      />
    );

    // When renderTag is provided, renderDeleteButton should be ignored
    // since the custom tag renderer takes full control
    expect(getByTestId('custom-tag-0')).toBeTruthy();
    expect(getByTestId('custom-tag-1')).toBeTruthy();
    expect(queryByTestId('custom-delete-test1')).toBeNull();
    expect(queryByTestId('custom-delete-test2')).toBeNull();
  });

  it('should pass correct parameters to renderDeleteButton', () => {
    const mockRenderDeleteButton = jest.fn((onDelete, tag, index) => (
      <TouchableOpacity testID={`mock-delete-${index}`} onPress={onDelete}>
        <Text>{tag}</Text>
      </TouchableOpacity>
    ));

    render(
      <TagInput
        tags={mockTags}
        updateState={mockUpdateState}
        renderDeleteButton={mockRenderDeleteButton}
      />
    );

    // Check that renderDeleteButton was called with correct parameters
    expect(mockRenderDeleteButton).toHaveBeenCalledTimes(2);

    // Check first call parameters
    const firstCall = mockRenderDeleteButton.mock.calls[0];
    if (firstCall) {
      expect(typeof firstCall[0]).toBe('function'); // onDelete function
      expect(firstCall[1]).toBe('test1'); // tag
      expect(firstCall[2]).toBe(0); // index
    }

    // Check second call parameters
    const secondCall = mockRenderDeleteButton.mock.calls[1];
    if (secondCall) {
      expect(typeof secondCall[0]).toBe('function'); // onDelete function
      expect(secondCall[1]).toBe('test2'); // tag
      expect(secondCall[2]).toBe(1); // index
    }
  });
});
