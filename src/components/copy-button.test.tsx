import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from '@testing-library/react';
import { CopyButton } from './copy-button';

// Mock navigator.clipboard
const mockWriteText = vi.fn();
Object.assign(navigator, {
  clipboard: {
    writeText: mockWriteText,
  },
});

describe('CopyButton', () => {
  beforeEach(() => {
    mockWriteText.mockClear();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders with copy icon initially', () => {
    render(<CopyButton text="test text" />);

    const button = screen.getByRole('button', { name: /copy/i });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  it('copies text to clipboard when clicked', async () => {
    render(<CopyButton text="test text to copy" />);

    const button = screen.getByRole('button', { name: /copy/i });
    fireEvent.click(button);

    expect(mockWriteText).toHaveBeenCalledWith('test text to copy');
  });

  it('shows check icon and disables button after copying', async () => {
    render(<CopyButton text="test text" />);

    const button = screen.getByRole('button', { name: /copy/i });
    fireEvent.click(button);

    // Button should now show "Copied!" and be disabled
    await waitFor(() => {
      const copiedButton = screen.getByRole('button', { name: /copied/i });
      expect(copiedButton).toBeDisabled();
    });
  });

  it('reverts to copy icon after timeout', async () => {
    render(<CopyButton text="test text" />);

    const button = screen.getByRole('button', { name: /copy/i });
    fireEvent.click(button);

    // Should show copied state
    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /copied/i }),
      ).toBeInTheDocument();
    });

    // Wait for the state to revert
    await waitFor(
      () => {
        expect(
          screen.getByRole('button', { name: /copy/i }),
        ).toBeInTheDocument();
      },
      { timeout: 2000 },
    );

    expect(screen.getByRole('button', { name: /copy/i })).not.toBeDisabled();
  });

  it('accepts custom variant prop', () => {
    render(<CopyButton text="test" variant="ghost" />);

    const button = screen.getByRole('button');
    // Check that the button rendered - the exact class names depend on shadcn/ui implementation
    expect(button).toBeInTheDocument();
  });

  it('accepts custom size prop', () => {
    render(<CopyButton text="test" size="sm" />);

    const button = screen.getByRole('button');
    // Check that the button rendered - the exact class names depend on shadcn/ui implementation
    expect(button).toBeInTheDocument();
  });
});
