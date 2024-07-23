import { Button, Typography, Card } from 'antd';
import { cn } from '../../utils/helpers/cn';
import React, { useState } from 'react';
import { LangVersionType } from '../../utils/constants/codeLanguage';
import { executeCode } from '../../apis/executeCode.api';

const { Text } = Typography;

type OutputType = {
  editorRef: any;
  language: LangVersionType;
};

const Output: React.FC<OutputType> = React.memo(({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const runCode = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const sourceCode = editorRef.current.getValue();
      if (!sourceCode) return;
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output);
    } catch (error: any) {
      setError(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={cn('flex min-w-[500px] flex-col gap-4 p-4')}>
      <div className="flex items-center gap-4">
        <Text style={{ marginBottom: '8px', fontSize: 'large' }}>Output</Text>
        <Button type="primary" style={{ marginBottom: '16px' }} loading={isLoading} onClick={runCode}>
          Run Code
        </Button>
      </div>
      <Card
        style={{
          height: '75vh',
          padding: '16px',
          border: '1px solid #333',
          borderRadius: '4px',
          color: '#333'
        }}
      >
        {output}
      </Card>
    </div>
  );
});

export default Output;
