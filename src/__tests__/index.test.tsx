import { TagInput } from '../common/components/TagInput';
import type { ITags } from '../common/types';

describe('TagInput', () => {
  const mockUpdateState = jest.fn();
  const defaultProps = {
    tags: { tag: '', tagsArray: [] } as ITags,
    updateState: mockUpdateState,
  };

  beforeEach(() => {
    mockUpdateState.mockClear();
  });

  it('should be defined', () => {
    expect(TagInput).toBeDefined();
  });

  it('should have correct default props structure', () => {
    expect(defaultProps.tags).toEqual({ tag: '', tagsArray: [] });
    expect(typeof defaultProps.updateState).toBe('function');
  });
});
