import React, { useEffect, useCallback, forwardRef } from 'react';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  name?: string;
  hint: string;
  error: string | null;
  placeholder: string;
  label: string;
  attribute: string;
  labelAction: string | null;
  disabled: boolean;
  required: boolean;
};

// Remove unused imports unless planning to use them
// import {
//   Button,
//   Box,
//   Field,
//   Flex,
//   Popover,
//   Typography,
//   useComposedRefs,
// } from '@strapi/design-system';

const Input = forwardRef<HTMLDivElement, InputProps>(
  ({ value, onChange, name, attribute, disabled, error, hint, label, labelAction, placeholder, required }, ref) => {
    const handleUpdate = useCallback(
      ({ editor }: { editor: Editor }) => {
        const html = editor.getHTML();
        onChange(html);
      },
      [onChange],
    );
    console.log(attribute, 'attribute');

    const editor = useEditor({
      extensions: [StarterKit],
      content: value || '',
      onUpdate: handleUpdate,
    });

    // Sync external value changes with editor content
    useEffect(() => {
      if (!editor) return;

      const currentHTML = editor.getHTML();
      if (value !== currentHTML) {
        editor.commands.setContent(value || '', false);
      }
    }, [editor, value]);

    return (
      <div ref={ref}>
        {editor && (
          <>
            <EditorContent
              placeholder={placeholder}
              label={label ?? labelAction}
              editor={editor}
              name={name}
              disabled={disabled}
              required={required}
            />
            {hint && <span>{hint}</span>}
            {error && <span style={{ color: 'red' }}>{error}</span>}
          </>
        )}
        {name && <input type="hidden" name={name} value={editor?.getHTML() || ''} />}
      </div>
    );
  },
);

Input.displayName = 'Input'; // important for forwardRef debugging

export default Input;
