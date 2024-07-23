/* eslint-disable @typescript-eslint/no-explicit-any */
import { Editor } from '@monaco-editor/react';
import { Form, FormItemProps } from 'antd';
import { useCallback, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers/cn';
import LanguageSelector from './LanguageSelector';
import { CODE_TEMPLATES } from '../../utils/constants/codeTemplate';
import { LANG_VERSIONS, LangVersionType } from '../../utils/constants/codeLanguage';
import Output from './Output';
import { CodeEditorThemeEnum } from '../../types/enum/CodeEditorTheme.enum';
import { CiDark, CiLight } from 'react-icons/ci';

const DEFAULT_LANGUAGE = 'javascript';

interface CodeEditorType extends Omit<FormItemProps<any>, 'children'> {
  name?: FormItemProps['name'];
  defaultValue?: string;
  defaultLanguage?: string;
  containerClassName?: string;
  width?: string;
  height?: string;
}

const CodeEditor: React.FC<CodeEditorType> = ({
  name,
  defaultValue,
  defaultLanguage,
  containerClassName,
  className,
  width,
  height,
  ...passProps
}) => {
  const editorRef = useRef(null);
  const [code, setCode] = useState(CODE_TEMPLATES[0].code);
  const [language, setLanguage] = useState(LANG_VERSIONS[0]);
  const [theme, setTheme] = useState<CodeEditorThemeEnum>(CodeEditorThemeEnum['light']);
  const handleMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleChange = (newValue: any) => {
    setCode(newValue);
  };

  const handleSetLanguage = useCallback(
    (newLanguage: LangVersionType) => {
      setLanguage(newLanguage);
      const selectedCodeTemplate = CODE_TEMPLATES.find((template) => template.name === newLanguage.name);
      if (selectedCodeTemplate) {
        setCode(selectedCodeTemplate.code);
      }
    },
    [setLanguage, setCode]
  );

  const handleToggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === CodeEditorThemeEnum['light'] ? CodeEditorThemeEnum['vs-dark'] : CodeEditorThemeEnum['light']
    );
  };

  const backgroundColor = theme === CodeEditorThemeEnum['light'] ? '#fff' : '#333';

  return (
    <Form.Item name={name} className={cn(containerClassName, 'w-fit bg-slate-500 p-5')}>
      <div className="flex items-center justify-between">
        <LanguageSelector language={language} onSelect={handleSetLanguage} />
        <div>
          {theme === CodeEditorThemeEnum['light'] ? (
            <CiDark onClick={handleToggleTheme} color="#fff" size={25} />
          ) : (
            <CiLight onClick={handleToggleTheme} color="#fff" size={25} />
          )}
        </div>
      </div>
      <motion.div
        className="flex gap-10"
        style={{ backgroundColor, padding: '20px' }}
        animate={{ backgroundColor }}
        transition={{ duration: 0.5 }}
      >
        
        <Editor
          theme={theme}
          height={width}
          width={height}
          defaultLanguage={defaultLanguage || DEFAULT_LANGUAGE}
          defaultValue={defaultValue}
          onMount={handleMount}
          value={code}
          onChange={handleChange}
          className={cn(className, '')}
          {...passProps}
        />

        <Output language={language} editorRef={editorRef} />
      </motion.div>
    </Form.Item>
  );
};

export default CodeEditor;
